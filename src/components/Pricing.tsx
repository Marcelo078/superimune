import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import productSolo from "@/assets/super-imune-solo.webp";
import productDuo from "@/assets/super-imune-duo.webp";

const pricingOptions = [
  {
    title: "LEVE 1 POTE",
    image: productSolo,
    oldPrice: "R$ 73,90",
    price: "R$ 13,54",
    installment: "ou R$ 13,54 à vista",
    highlight: false,
  },
  {
    title: "LEVE 2 POTES",
    image: productDuo,
    oldPrice: "R$ 147,80",
    price: "R$ 20,07",
    installment: "ou R$ 110,85 à vista",
    highlight: true,
  },
];

export const Pricing = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ESCOLHA A MELHOR <span className="text-primary">OFERTA PARA VOCÊ</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Aproveite valores exclusivos de lançamento!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          {pricingOptions.map((option, index) => (
            <Card 
              key={index} 
              className={`p-8 text-center space-y-6 ${
                option.highlight 
                  ? 'border-2 border-primary shadow-[0_0_30px_rgba(255,140,0,0.2)]' 
                  : ''
              }`}
            >
              <h3 className="text-2xl font-bold text-primary">{option.title}</h3>
              
              <div className="flex justify-center">
                <img 
                  src={option.image} 
                  alt={option.title}
                  className="w-48 h-48 object-contain"
                />
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground line-through">
                  De {option.oldPrice}
                </p>
                <p className="text-sm text-foreground">Por apenas:</p>
                <p className="text-5xl font-bold text-primary">
                  {option.price}
                </p>
                <p className="text-sm text-muted-foreground">
                  {option.installment}
                </p>
              </div>

              <Button 
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6"
                asChild
              >
                <a href="https://app.monetizze.com.br/r/AKS25517419" target="_blank" rel="noopener noreferrer">
                  COMPRAR AGORA
                </a>
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl font-bold text-primary animate-pulse">
            ⏰ Aproveite! Promoção por tempo limitado!
          </p>
        </div>
      </div>
    </section>
  );
};
