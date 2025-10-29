import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sunrise, Sun, Coffee, Moon, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function MealPlanning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const meals = [
    {
      icon: Sunrise,
      title: "Sarapan",
      color: "text-accent",
      bgColor: "from-accent/20 to-accent/5",
      items: [
        "Oatmeal dengan potongan apel dan sedikit madu",
        "Telur rebus dan roti gandum panggang",
        "Segelas susu rendah lemak tanpa gula",
      ],
    },
    {
      icon: Sun,
      title: "Makan Siang",
      color: "text-primary",
      bgColor: "from-primary/20 to-primary/5",
      items: [
        "Nasi merah",
        "Ikan panggang atau ayam tanpa kulit",
        "Tumis sayur (buncis, wortel, brokoli)",
        "Air putih",
      ],
    },
    {
      icon: Coffee,
      title: "Camilan Sore",
      color: "text-secondary",
      bgColor: "from-secondary/20 to-secondary/5",
      items: [
        "Buah segar rendah gula (apel, pir, pepaya)",
        "Kacang almond",
      ],
    },
    {
      icon: Moon,
      title: "Makan Malam",
      color: "text-primary",
      bgColor: "from-primary/20 to-primary/5",
      items: [
        "Sup sayur bening dengan tahu atau tempe",
        "Ubi rebus",
        "Air putih",
      ],
    },
  ];

  return (
    <section id="meals" className="py-16 sm:py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" data-testid="title-meals">
            Pilihan Menu Sehat
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-meals-subtitle">
            Contoh menu sederhana yang baik untuk penderita atau pencegahan diabetes
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12"
        >
          {meals.map((meal, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden hover-elevate transition-all duration-300" data-testid={`card-meal-${index}`}>
                <CardHeader className={`bg-gradient-to-br ${meal.bgColor}`}>
                  <div className="flex items-center gap-3">
                    <meal.icon className={`w-8 h-8 ${meal.color}`} />
                    <CardTitle className="text-2xl" data-testid={`title-meal-${index}`}>{meal.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center overflow-hidden" data-testid={`img-meal-${index}`}>
                    <div className="text-center p-4">
                      <meal.icon className={`w-16 h-16 ${meal.color} mx-auto mb-2 opacity-20`} />
                      <p className="text-sm text-muted-foreground">Gambar menu {meal.title.toLowerCase()}</p>
                    </div>
                  </div>
                  <ul className="space-y-2" data-testid={`list-meal-items-${index}`}>
                    {meal.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2" data-testid={`item-meal-${index}-${itemIndex}`}>
                        <CheckCircle className={`w-5 h-5 ${meal.color} mt-0.5 flex-shrink-0`} />
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-destructive/10 via-accent/10 to-primary/10 border-primary/20" data-testid="card-meal-notes">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3" data-testid="title-meal-notes">Catatan Penting</h3>
                  <div className="space-y-2" data-testid="list-meal-notes">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                      <p className="text-base" data-testid="text-note-1">
                        Hindari makanan tinggi gula, lemak jenuh, dan karbohidrat olahan
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                      <p className="text-base" data-testid="text-note-2">
                        Perhatikan porsi makan dan waktu makan teratur
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                      <p className="text-base" data-testid="text-note-3">
                        Konsultasikan dengan ahli gizi untuk menu yang disesuaikan dengan kondisi Anda
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8"
        >
          <Card data-testid="card-meal-tips">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl font-semibold mb-4" data-testid="title-meal-tips">Tips Menu Sehat</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-md bg-muted" data-testid="card-tip-carbs">
                  <Badge className="mb-2" data-testid="badge-carbs">Karbohidrat</Badge>
                  <p className="text-sm" data-testid="text-tip-carbs">Pilih karbohidrat kompleks seperti nasi merah dan oatmeal</p>
                </div>
                <div className="text-center p-4 rounded-md bg-muted" data-testid="card-tip-protein">
                  <Badge className="mb-2" data-testid="badge-protein">Protein</Badge>
                  <p className="text-sm" data-testid="text-tip-protein">Konsumsi protein rendah lemak seperti ikan dan ayam tanpa kulit</p>
                </div>
                <div className="text-center p-4 rounded-md bg-muted" data-testid="card-tip-fiber">
                  <Badge className="mb-2" data-testid="badge-fiber">Serat</Badge>
                  <p className="text-sm" data-testid="text-tip-fiber">Perbanyak sayur dan buah untuk asupan serat yang cukup</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
