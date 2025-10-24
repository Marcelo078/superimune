import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é Super Imune?",
    answer: "Super Imune é um suplemento alimentar desenvolvido pela Nature's Prime, composto por uma fórmula equilibrada com Vitamina C, Lisina, Própolis, Selênio, Zinco, Vitaminas D, E e B2. Cada cápsula contém 400mg de ingredientes ativos que trabalham em sinergia para fortalecer o sistema imunológico e melhorar a saúde geral."
  },
  {
    question: "Como devo tomar o Super Imune?",
    answer: "Recomenda-se tomar 2 cápsulas por dia, preferencialmente junto às refeições. O pote contém 60 cápsulas, o suficiente para 1 mês de uso contínuo. Para melhores resultados, mantenha o uso regular e combine com uma alimentação equilibrada."
  },
  {
    question: "Quem pode usar o Super Imune? Existe contraindicação?",
    answer: "O Super Imune é indicado para adultos que desejam fortalecer a imunidade. Gestantes, lactantes, crianças e pessoas com condições médicas específicas devem consultar um médico antes de usar. Se você tem alergias a algum dos componentes, não utilize o produto."
  },
  {
    question: "O que é selênio?",
    answer: "O selênio é um mineral essencial que atua como antioxidante no organismo, protegendo as células contra danos oxidativos. Ele é fundamental para o bom funcionamento do sistema imunológico, da tireoide e contribui para a saúde cardiovascular."
  },
  {
    question: "Os benefícios do Super Imune são comprovados cientificamente?",
    answer: "Sim! Todos os ingredientes presentes no Super Imune têm respaldo científico. Vitamina C, Zinco, Selênio e Vitamina D são reconhecidos pela comunidade científica como nutrientes essenciais para o sistema imunológico. A fórmula foi desenvolvida com base em estudos que comprovam a eficácia desses componentes."
  },
  {
    question: "O Super Imune é vegano ou possui ingredientes de origem animal?",
    answer: "As cápsulas do Super Imune são feitas de gelatina, que pode ser de origem animal. Se você segue uma dieta vegana estrita, recomendamos consultar as informações completas do produto ou entrar em contato com o fabricante para mais detalhes sobre a composição."
  },
  {
    question: "Em quanto tempo vou sentir os efeitos?",
    answer: "Os resultados variam de pessoa para pessoa, mas muitos usuários relatam sentir melhora na disposição e resistência nas primeiras semanas de uso. Para resultados mais expressivos na imunidade, recomenda-se o uso contínuo por pelo menos 30 dias."
  },
  {
    question: "Qual o prazo de entrega do Super Imune?",
    answer: "O prazo de entrega varia conforme sua região, mas geralmente leva de 7 a 15 dias úteis após a confirmação do pagamento. Você receberá um código de rastreamento para acompanhar seu pedido."
  }
];

export const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire todas as suas dúvidas sobre o Super Imune
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
