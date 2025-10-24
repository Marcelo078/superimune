import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ProductSummary = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Resumo do Produto
          </h2>
          
          <div className="space-y-6 text-lg">
            <div>
              <h3 className="font-bold text-primary mb-2">O que é?</h3>
              <p className="text-muted-foreground leading-relaxed">
                O Super Imune é um suplemento alimentar completo desenvolvido pela Nature's Prime para fortalecer seu sistema imunológico de forma natural e eficaz.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-primary mb-2">Composição:</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fórmula equilibrada com Vitamina C, Lisina, Própolis, Selênio, Zinco, Vitaminas D, E e B2. Cada pote contém 60 cápsulas de 400mg.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-primary mb-2">Principais benefícios:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Fortalece o sistema imunológico</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Combate radicais livres e previne o envelhecimento precoce</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Promove o fortalecimento celular</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Melhora o bem-estar e disposição geral</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-primary mb-2">Vale a pena?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sim! Com ingredientes cientificamente comprovados, garantia de 30 dias e preços promocionais, o Super Imune é uma excelente escolha para quem busca fortalecer a imunidade de forma segura e eficaz.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg shadow-glow"
              asChild
            >
              <a href="https://app.monetizze.com.br/r/AKS25517419" target="_blank" rel="noopener noreferrer">
                👉 Ver preço e ofertas atuais
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};
