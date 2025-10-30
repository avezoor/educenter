import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const footerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const logoVariants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const textVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3
    }
  }
};

export function Footer() {
  return (
    <motion.footer
      className="bg-card border-t"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div variants={logoVariants}>
              <Heart className="w-6 h-6 text-primary fill-primary" />
            </motion.div>
            <motion.span 
              className="font-bold text-lg"
              variants={textVariants}
            >
              EduCenter Diabetes
            </motion.span>
          </motion.div>
          
          <motion.div 
            className="text-center md:text-right text-sm text-muted-foreground"
            variants={textVariants}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              © {new Date().getFullYear()} EduCenter Diabetes. Semua hak dilindungi.
            </motion.p>
            <motion.p 
              className="mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Edukasi dan informasi untuk kehidupan yang lebih sehat
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
