import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6283152140913", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:ichazhd866@gmail.com";
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" data-testid="title-contact-section">
            Konsultasi Lebih Lanjut
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-section-subtitle">
            Punya pertanyaan lebih lanjut seputar diabetes? Hubungi kami untuk konsultasi
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden" data-testid="card-contact">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 text-center">
                <CardTitle className="text-2xl sm:text-3xl" data-testid="title-contact">Hubungi Kami</CardTitle>
                <p className="text-muted-foreground mt-2" data-testid="text-contact-subtitle">
                  Pilih metode komunikasi yang paling nyaman untuk Anda
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group"
                  >
                    <Button
                      onClick={handleWhatsAppClick}
                      size="lg"
                      className="w-full h-auto py-8 bg-primary hover:bg-primary/90 flex flex-col items-center gap-4"
                      data-testid="button-whatsapp"
                    >
                      <MessageCircle className="w-12 h-12" />
                      <div className="text-center">
                        <div className="text-lg font-semibold mb-1">WhatsApp</div>
                        <div className="text-sm opacity-90" data-testid="text-whatsapp-number">+62 831-5214-0913</div>
                      </div>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group"
                  >
                    <Button
                      onClick={handleEmailClick}
                      size="lg"
                      variant="secondary"
                      className="w-full h-auto py-8 flex flex-col items-center gap-4"
                      data-testid="button-email"
                    >
                      <Mail className="w-12 h-12" />
                      <div className="text-center">
                        <div className="text-lg font-semibold mb-1">Email</div>
                        <div className="text-sm opacity-90" data-testid="text-email-address">ichazhd866@gmail.com</div>
                      </div>
                    </Button>
                  </motion.div>
                </div>

                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-md p-6 border border-primary/10" data-testid="card-consultation-hours">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2" data-testid="title-consultation-hours">Jam Konsultasi</h4>
                      <p className="text-muted-foreground" data-testid="text-consultation-hours">
                        Kami siap membantu Anda setiap hari. Silakan hubungi melalui WhatsApp atau
                        email untuk mendapatkan informasi lebih lanjut tentang diabetes dan pengelolaannya.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8">
            <Card data-testid="card-community">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <Send className="w-12 h-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold" data-testid="title-community">Dapatkan Informasi Terbaru</h3>
                  <p className="text-muted-foreground max-w-xl mx-auto" data-testid="text-community">
                    Bergabunglah dengan komunitas kami untuk mendapatkan tips kesehatan, resep makanan
                    sehat, dan informasi terkini seputar pengelolaan diabetes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
