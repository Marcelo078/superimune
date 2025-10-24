import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { Guarantee } from "@/components/Guarantee";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { ProductSummary } from "@/components/ProductSummary";
import { TrustBadges } from "@/components/TrustBadges";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add JSON-LD structured data for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Super Imune - Nature's Prime",
      "image": "https://lovable.dev/opengraph-image-p98pqg.png",
      "description": "Suplemento alimentar com Vitamina C, Lisina, Própolis, Selênio, Zinco, Vitaminas D, E e B2 para fortalecer o sistema imunológico",
      "brand": {
        "@type": "Brand",
        "name": "Nature's Prime"
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "13.54",
        "highPrice": "20.07",
        "priceCurrency": "BRL",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127"
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Testimonials />
      <Guarantee />
      <Pricing />
      <ProductSummary />
      <FAQ />
      <TrustBadges />
      
      <footer className="py-8 bg-muted/30 text-center text-sm text-muted-foreground border-t border-border">
        <div className="container mx-auto px-4">
          <p className="mb-2">
            Este site contém links de afiliado. Podemos receber comissão por compras realizadas através destes links.
          </p>
          <p>
            © {new Date().getFullYear()} - Todos os direitos reservados. Este site não faz parte do Google, Facebook ou Nature's Prime.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
