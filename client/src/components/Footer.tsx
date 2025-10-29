import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary fill-primary" />
            <span className="font-bold text-lg">EduCenter Diabetes</span>
          </div>
          
          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} EduCenter Diabetes. Semua hak dilindungi.</p>
            <p className="mt-1">Edukasi dan informasi untuk kehidupan yang lebih sehat</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
