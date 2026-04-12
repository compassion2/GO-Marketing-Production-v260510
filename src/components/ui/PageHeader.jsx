export function PageHeader({ title, subtitle }) {
  return (
    <header className="mb-12">
      <h1 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-3">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-muted-foreground font-display italic">
          {subtitle}
        </p>
      )}
    </header>
  );
}
