import { Button } from "@/components/ui/button";
import productDuo from "@/assets/super-imune-duo.webp";

export const Guarantee = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1 flex justify-center">
            <img 
              src={productDuo} 
              alt="Kit com 2 potes de Super Imune" 
              className="w-full max-w-md drop-shadow-2xl"
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold text-xl">
              GARANTIA DE RESULTADOS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              ou seu <span className="text-primary">dinheiro de volta!</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experimente o Super Imune por 30 dias sem compromisso. Se você não sentir que sua imunidade melhorou ou se o produto não atender às suas expectativas, devolvemos 100% do seu investimento.
            </p>
            <p className="text-base text-muted-foreground">
              Essa garantia mostra nossa confiança total na qualidade e eficácia do Super Imune. Você não tem nada a perder!
            </p>
            <div className="pt-4">
              <Button 
                size="lg" 
                className="w-full md:w-auto text-base px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-glow"
                asChild
              >
                <a href="https://app.monetizze.com.br/r/AKS25517419" target="_blank" rel="noopener noreferrer">
                  👉 SIM! EU QUERO FORTALECER MINHA IMUNIDADE
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
