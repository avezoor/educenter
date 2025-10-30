import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Heart,
  Activity,
  AlertCircle,
  Shield,
  Info,
  Stethoscope,
  Users,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.8,
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
  hover: {
    scale: 1.2,
    rotate: 15,
    transition: {
      duration: 0.3,
    },
  },
};

export function EducationHub() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const diabetesTypes = [
    {
      icon: Heart,
      title: "Diabetes Mellitus Tipe 1",
      description:
        "Terjadi karena sistem kekebalan tubuh menyerang sel beta pankreas yang memproduksi insulin. Umumnya terjadi pada usia muda dan membutuhkan terapi insulin seumur hidup.",
      color: "text-primary",
    },
    {
      icon: Activity,
      title: "Diabetes Mellitus Tipe 2",
      description:
        "Terjadi karena resistensi insulin, di mana tubuh tidak dapat menggunakan insulin secara efektif. Jenis ini paling banyak terjadi pada orang dewasa dan berhubungan erat dengan gaya hidup tidak sehat.",
      color: "text-secondary",
    },
    {
      icon: Users,
      title: "Diabetes Gestasional",
      description:
        "Terjadi pada wanita selama masa kehamilan dan biasanya hilang setelah melahirkan. Namun, dapat meningkatkan risiko terjadinya DM tipe 2 di kemudian hari.",
      color: "text-accent",
    },
  ];

  const symptoms = [
    "Sering buang air kecil (poliuria)",
    "Sering haus (polidipsia)",
    "Sering lapar (polifagia)",
    "Berat badan menurun tanpa sebab jelas",
    "Luka sulit sembuh",
    "Penglihatan kabur",
    "Mudah lelah",
    "Infeksi kulit berulang",
  ];

  const riskFactors = [
    "Riwayat keluarga penderita diabetes",
    "Berat badan berlebih atau obesitas",
    "Pola makan tinggi gula, lemak jenuh, dan rendah serat",
    "Kurang aktivitas fisik",
    "Usia di atas 40 tahun",
    "Riwayat tekanan darah tinggi atau kolesterol tinggi",
    "Riwayat diabetes gestasional",
  ];

  const preventionTips = [
    {
      title: "Pola Makan Sehat",
      points: [
        "Batasi konsumsi gula tambahan maksimal 4 sdt/hari",
        "Pilih karbohidrat kompleks seperti nasi merah, oatmeal, atau roti gandum",
        "Konsumsi sayur dan buah tinggi serat",
        "Batasi makanan berlemak jenuh dan gorengan",
      ],
    },
    {
      title: "Aktivitas Fisik Teratur",
      points: [
        "Lakukan olahraga minimal 30 menit setiap hari",
        "Pilih aktivitas seperti jalan cepat, bersepeda, atau berenang",
      ],
    },
    {
      title: "Hindari Rokok dan Alkohol",
      points: [
        "Keduanya dapat memperburuk resistensi insulin",
        "Mempercepat komplikasi diabetes",
      ],
    },
    {
      title: "Pemeriksaan Rutin",
      points: [
        "Cek kadar gula darah secara berkala",
        "Terutama bagi yang memiliki faktor risiko",
      ],
    },
  ];

  const complications = [
    "Penyakit jantung dan stroke",
    "Gagal ginjal (nefropati diabetik)",
    "Gangguan penglihatan (retinopati)",
    "Kerusakan saraf (neuropati)",
    "Luka kaki diabetik",
    "Risiko amputasi",
  ];

  return (
    <section id="education" className="py-16 sm:py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" data-testid="title-education">
            Pusat Informasi Diabetes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-education-subtitle">
            Pelajari lebih lanjut tentang diabetes mellitus, gejala, pencegahan, dan pengelolaannya
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden" data-testid="card-diabetes-definition">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                <CardTitle className="flex items-center gap-2">
                  <Info className="w-6 h-6 text-primary" />
                  Apa itu Diabetes Mellitus?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-base leading-relaxed" data-testid="text-diabetes-definition">
                  Diabetes Mellitus (DM) adalah penyakit metabolik kronis yang ditandai oleh peningkatan
                  kadar glukosa darah (hiperglikemia) akibat gangguan produksi atau kerja hormon insulin.
                  Insulin berfungsi mengatur kadar gula darah agar tetap normal. Bila tubuh tidak
                  memproduksi insulin dengan cukup (DM tipe 1) atau tidak merespons insulin dengan baik
                  (DM tipe 2), maka kadar gula darah akan meningkat dan menimbulkan berbagai komplikasi.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6" data-testid="title-diabetes-types">Jenis-Jenis Diabetes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {diabetesTypes.map((type, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover-elevate transition-all duration-300" data-testid={`card-diabetes-type-${index + 1}`}>
                    <CardHeader>
                      <type.icon className={`w-12 h-12 ${type.color} mb-2`} />
                      <CardTitle className="text-xl" data-testid={`title-diabetes-type-${index + 1}`}>{type.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed" data-testid={`text-diabetes-type-${index + 1}`}>{type.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="symptoms" className="border rounded-md px-6">
                <AccordionTrigger className="hover:no-underline" data-testid="accordion-symptoms">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-destructive" />
                    <span className="text-xl font-semibold">Gejala Umum Diabetes</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                    {symptoms.map((symptom, index) => (
                      <div key={index} className="flex items-start gap-2" data-testid={`item-symptom-${index}`}>
                        <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                        <span className="text-base">{symptom}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="risk-factors" className="border rounded-md px-6">
                <AccordionTrigger className="hover:no-underline" data-testid="accordion-risk-factors">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-accent" />
                    <span className="text-xl font-semibold">Faktor Risiko</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 gap-3 pt-4">
                    {riskFactors.map((factor, index) => (
                      <div key={index} className="flex items-start gap-2" data-testid={`item-risk-factor-${index}`}>
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        <span className="text-base">{factor}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="diagnosis" className="border rounded-md px-6">
                <AccordionTrigger className="hover:no-underline" data-testid="accordion-diagnosis">
                  <div className="flex items-center gap-3">
                    <Stethoscope className="w-6 h-6 text-secondary" />
                    <span className="text-xl font-semibold">Pemeriksaan dan Diagnosis</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4 space-y-3">
                    <p className="text-base" data-testid="text-diagnosis-intro">Pemeriksaan dilakukan melalui uji laboratorium darah:</p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2" data-testid="item-diagnosis-0">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                        <span className="text-base">
                          <strong>Gula darah puasa (GDP):</strong> ≥126 mg/dL menunjukkan kemungkinan
                          diabetes
                        </span>
                      </div>
                      <div className="flex items-start gap-2" data-testid="item-diagnosis-1">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                        <span className="text-base">
                          <strong>Gula darah 2 jam setelah makan (GD2PP):</strong> ≥200 mg/dL
                        </span>
                      </div>
                      <div className="flex items-start gap-2" data-testid="item-diagnosis-2">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                        <span className="text-base">
                          <strong>HbA1c:</strong> ≥6,5% menunjukkan kontrol gula darah jangka panjang yang
                          buruk
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="prevention" className="border rounded-md px-6">
                <AccordionTrigger className="hover:no-underline" data-testid="accordion-prevention">
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold">Pencegahan Diabetes</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4 space-y-6">
                    {preventionTips.map((tip, index) => (
                      <div key={index} data-testid={`section-prevention-${index}`}>
                        <h4 className="font-semibold text-lg mb-2" data-testid={`title-prevention-${index}`}>{tip.title}</h4>
                        <div className="space-y-2">
                          {tip.points.map((point, pointIndex) => (
                            <div key={pointIndex} className="flex items-start gap-2" data-testid={`item-prevention-${index}-${pointIndex}`}>
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-base">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="complications" className="border rounded-md px-6">
                <AccordionTrigger className="hover:no-underline" data-testid="accordion-complications">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-destructive" />
                    <span className="text-xl font-semibold">Komplikasi Diabetes</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4">
                    <p className="text-base mb-4" data-testid="text-complications-intro">
                      Jika tidak dikontrol, diabetes dapat menyebabkan komplikasi serius seperti:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {complications.map((complication, index) => (
                        <div key={index} className="flex items-start gap-2" data-testid={`item-complication-${index}`}>
                          <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                          <span className="text-base">{complication}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20" data-testid="card-conclusion">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3" data-testid="title-conclusion">Kesimpulan</h3>
                <p className="text-base leading-relaxed" data-testid="text-conclusion">
                  Diabetes Mellitus merupakan penyakit kronis yang dapat dikendalikan dengan gaya hidup
                  sehat, deteksi dini, dan pengobatan yang tepat. Edukasi dan kesadaran diri menjadi
                  langkah utama dalam pencegahan dan pengelolaan diabetes.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
