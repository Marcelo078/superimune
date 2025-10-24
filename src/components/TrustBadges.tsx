export const TrustBadges = () => {
  return (
    <section className="py-12 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <div className="text-4xl mb-2">🔒</div>
            <h3 className="font-semibold text-sm">Compra 100% Segura</h3>
            <p className="text-xs text-muted-foreground">Ambiente protegido</p>
          </div>
          
          <div className="text-center space-y-2">
            <div className="text-4xl mb-2">✅</div>
            <h3 className="font-semibold text-sm">Produto Original</h3>
            <p className="text-xs text-muted-foreground">Direto do fabricante</p>
          </div>
          
          <div className="text-center space-y-2">
            <div className="text-4xl mb-2">📦</div>
            <h3 className="font-semibold text-sm">Entrega Garantida</h3>
            <p className="text-xs text-muted-foreground">Em todo Brasil</p>
          </div>
          
          <div className="text-center space-y-2">
            <div className="text-4xl mb-2">💯</div>
            <h3 className="font-semibold text-sm">Garantia 30 dias</h3>
            <p className="text-xs text-muted-foreground">Satisfação garantida</p>
          </div>
        </div>
      </div>
    </section>
  );
};
