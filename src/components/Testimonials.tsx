import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Ana Paula",
    initials: "AP",
    text: "O Super Imune da Nature's Prime é incrível! Desde que comecei a tomar, sinto que meu corpo está bem mais resistente e significativamente. Me sinto mais protegida e menos propensa a gripes e resfriados. Recomendo!",
  },
  {
    name: "Carlos Henrique",
    initials: "CH",
    text: "Com o Super Imune, não estou mais tão suscetível a problemas de saúde. Minha imunidade aumentou e me sinto muito melhor. Excelente produto da Nature's Prime!",
  },
  {
    name: "Renata Santos",
    initials: "RS",
    text: "Tomar o Super Imune foi uma das melhores decisões que já tomei para minha saúde. Não tenho mais recorrências e me sinto muito mais saudável. Adorei o resultado. Produto da Nature's Prime!",
  },
  {
    name: "João Almeida",
    initials: "JA",
    text: "O Super Imune da Nature's Prime foi uma descoberta incrível para mim. Minha imunidade melhorou sensivelmente, e não fico mais tão vulnerável. Produto de qualidade da Nature's Prime!",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quem já experimentou, <span className="text-primary">recomenda!</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Veja a mudança na vida de quem já usa:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Avatar className="bg-primary text-primary-foreground">
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-semibold mb-2">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
