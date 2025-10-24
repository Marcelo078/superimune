import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import productBox from "@/assets/super-imune-box.webp";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-background/95" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
              Nature's Prime
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Você está pronto para <span className="text-primary">fortalecer sua imunidade</span>?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              O Super Imune traz uma fórmula exclusiva com Vitamina C, Lisina, Própolis, Selênio, Zinco e Vitaminas D, E e B2 para blindar suas defesas naturais.
            </p>
            <ul className="space-y-3 text-left max-w-md mx-auto md:mx-0">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <span>Fortalece o sistema imunológico</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <span>Combate radicais livres e o envelhecimento</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <span>Promova o fortalecimento celular</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <span>Melhora do bem-estar geral</span>
              </li>
            </ul>
            <div className="pt-4">
              <Button 
                size="lg" 
                className="w-full md:w-auto text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.5)] hover:shadow-[0_15px_50px_-10px_hsl(var(--primary)/0.6)] transition-all"
                asChild
              >
                <a href="https://app.monetizze.com.br/r/AKS25517419" target="_blank" rel="noopener noreferrer">
                  👉 SIM! EU QUERO FORTALECER MINHA IMUNIDADE
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src={productBox} 
              alt="Super Imune - Suplemento imunológico com 60 cápsulas da Nature's Prime"
              className="w-full max-w-md md:max-w-lg drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
