import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { EducationHub } from "@/components/EducationHub";
import { Quiz } from "@/components/Quiz";
import { MealPlanning } from "@/components/MealPlanning";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="hero">
        <Hero />
        <EducationHub />
        <Quiz />
        <MealPlanning />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
