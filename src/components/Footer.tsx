const Footer = () => {
  return (
    <footer className="border-t border-primary/10 bg-background py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="font-serif italic text-xl font-medium text-foreground mb-2 tracking-tight">
          Marjut <span className="text-accent">Källi</span>
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Marjut Källi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
