import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, RefreshCw, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

const quizVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8,
    transition: {
      duration: 0.3
    }
  }
};

const answerVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 10,
    }
  },
  hover: {
    scale: 1.02,
    backgroundColor: "rgba(var(--primary-rgb), 0.1)",
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.98
  }
};

const progressVariants = {
  initial: { scaleX: 0 },
  animate: { 
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { QuizQuestion, QuizAnswer } from "@shared/schema";

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Apa penyebab utama meningkatnya kadar gula darah pada penderita diabetes mellitus?",
    options: ["Kekurangan vitamin C", "Gangguan produksi atau kerja insulin", "Kekurangan zat besi"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "Diabetes Mellitus tipe 2 paling sering disebabkan oleh faktor:",
    options: [
      "Kekurangan insulin sejak lahir",
      "Gaya hidup tidak sehat dan obesitas",
      "Kekurangan tidur",
    ],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "Berikut ini adalah gejala umum dari diabetes, kecuali:",
    options: ["Sering haus", "Berat badan turun tanpa sebab", "Nafsu makan menurun drastis"],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "Pola makan yang baik untuk mencegah diabetes adalah:",
    options: ["Tinggi gula dan lemak", "Seimbang dan tinggi serat", "Rendah air dan tinggi garam"],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "Kadar gula darah puasa yang menunjukkan diabetes adalah:",
    options: ["≥126 mg/dL", "≤80 mg/dL", "90–100 mg/dL"],
    correctAnswer: 0,
  },
  {
    id: 6,
    question: "Salah satu komplikasi serius dari diabetes adalah:",
    options: ["Gangguan pernapasan", "Kerusakan saraf dan ginjal", "Penyakit kulit ringan"],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: "Kebiasaan berikut yang dapat meningkatkan risiko diabetes adalah:",
    options: [
      "Olahraga teratur",
      "Sering mengonsumsi makanan cepat saji",
      "Mengatur pola makan seimbang",
    ],
    correctAnswer: 1,
  },
  {
    id: 8,
    question: "Manakah makanan yang sebaiknya dihindari penderita diabetes?",
    options: ["Sayur rebus", "Nasi merah", "Donat manis"],
    correctAnswer: 2,
  },
  {
    id: 9,
    question: "Kadar HbA1c 6,5% menunjukkan bahwa:",
    options: [
      "Gula darah masih normal",
      "Ada risiko prediabetes",
      "Terjadi diabetes yang perlu dikontrol",
    ],
    correctAnswer: 2,
  },
  {
    id: 10,
    question: "Langkah pencegahan diabetes yang paling efektif adalah:",
    options: [
      "Menghindari buah-buahan",
      "Menjaga berat badan ideal dan pola makan sehat",
      "Tidak makan nasi sama sekali",
    ],
    correctAnswer: 1,
  },
];

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const submitQuizMutation = useMutation({
    mutationFn: async (quizData: { score: number; totalQuestions: number; answers: string }) => {
      return await apiRequest("POST", "/api/quiz-results", quizData);
    },
    onSuccess: () => {
      toast({
        title: "Kuis Berhasil Diselesaikan!",
        description: "Hasil kuis Anda telah disimpan.",
      });
    },
    onError: () => {
      toast({
        title: "Terjadi Kesalahan",
        description: "Hasil kuis tidak dapat disimpan, tetapi Anda masih dapat melihat hasilnya.",
        variant: "destructive",
      });
    },
  });

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const question = quizQuestions[currentQuestion];
    const isCorrect = selectedAnswer === question.correctAnswer;

    const newAnswer: QuizAnswer = {
      questionId: question.id,
      selectedAnswer,
      isCorrect,
    };

    const newAnswers = [...answers, newAnswer];
    setAnswers(newAnswers);
    setIsSubmitted(true);

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsSubmitted(false);
      } else {
        setShowResult(true);
        const score = newAnswers.filter((a) => a.isCorrect).length;
        submitQuizMutation.mutate({
          score,
          totalQuestions: quizQuestions.length,
          answers: JSON.stringify(newAnswers),
        });
      }
    }, 1500);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResult(false);
    setIsSubmitted(false);
  };

  const getScoreCategory = (score: number, total: number) => {
    if (score >= 9) {
      return {
        title: "Sangat Baik!",
        message: "Kamu paham tentang diabetes.",
        color: "text-primary",
      };
    } else if (score >= 6) {
      return {
        title: "Cukup Baik",
        message: "Tingkatkan pengetahuanmu.",
        color: "text-secondary",
      };
    } else if (score >= 3) {
      return {
        title: "Perlu Belajar Lagi",
        message: "Pelajari lebih lanjut mengenai gaya hidup sehat.",
        color: "text-accent",
      };
    } else {
      return {
        title: "Mari Belajar Lagi",
        message: "Sebaiknya pelajari kembali informasi dasar tentang diabetes.",
        color: "text-destructive",
      };
    }
  };

  const score = answers.filter((a) => a.isCorrect).length;
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (showResult) {
    const category = getScoreCategory(score, quizQuestions.length);
    const percentage = (score / quizQuestions.length) * 100;

    return (
      <section id="quiz" className="py-16 sm:py-24" ref={ref}>
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 text-center">
                <div className="flex justify-center mb-4">
                  <Award className={`w-20 h-20 ${category.color}`} />
                </div>
                <CardTitle className="text-3xl">Hasil Kuis</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold" data-testid="quiz-score">
                    {score}/{quizQuestions.length}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-semibold ${category.color}`}>
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">{category.message}</p>
                  </div>
                  <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Skor: {percentage.toFixed(0)}%
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Rincian Jawaban:</h4>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {answers.map((answer, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-md bg-muted"
                      >
                        <span className="text-sm">Pertanyaan {answer.questionId}</span>
                        {answer.isCorrect ? (
                          <CheckCircle className="w-5 h-5 text-primary" />
                        ) : (
                          <XCircle className="w-5 h-5 text-destructive" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={handleRestartQuiz}
                  className="w-full"
                  size="lg"
                  data-testid="button-restart-quiz"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Ulangi Kuis
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  const question = quizQuestions[currentQuestion];
  const isAnswerCorrect = selectedAnswer === question.correctAnswer;

  return (
    <section id="quiz" className="py-16 sm:py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Cek Pemahamanmu Tentang Diabetes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jawab setiap pertanyaan dengan memilih salah satu jawaban yang benar
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">
                Pertanyaan {currentQuestion + 1} dari {quizQuestions.length}
              </span>
              <span className="text-sm font-medium">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="text-xl sm:text-2xl leading-relaxed">
                {question.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              <RadioGroup
                value={selectedAnswer?.toString()}
                onValueChange={(value) => handleAnswerSelect(parseInt(value))}
                className="space-y-4"
                disabled={isSubmitted}
              >
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const showCorrect = isSubmitted && index === question.correctAnswer;
                  const showIncorrect = isSubmitted && isSelected && !isAnswerCorrect;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Label
                        htmlFor={`option-${index}`}
                        className={`flex items-center gap-4 p-4 rounded-md border-2 cursor-pointer transition-all ${
                          showCorrect
                            ? "border-primary bg-primary/10"
                            : showIncorrect
                            ? "border-destructive bg-destructive/10"
                            : isSelected
                            ? "border-primary bg-primary/5"
                            : "border-border hover-elevate"
                        }`}
                      >
                        <RadioGroupItem
                          value={index.toString()}
                          id={`option-${index}`}
                          data-testid={`option-${index}`}
                        />
                        <span className="flex-1 text-base">{option}</span>
                        {showCorrect && <CheckCircle className="w-6 h-6 text-primary" />}
                        {showIncorrect && <XCircle className="w-6 h-6 text-destructive" />}
                      </Label>
                    </motion.div>
                  );
                })}
              </RadioGroup>

              <Button
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null || isSubmitted}
                className="w-full mt-8"
                size="lg"
                data-testid="button-next-question"
              >
                {currentQuestion < quizQuestions.length - 1
                  ? isSubmitted
                    ? "Memuat pertanyaan berikutnya..."
                    : "Selanjutnya"
                  : isSubmitted
                  ? "Menghitung hasil..."
                  : "Selesai"}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
