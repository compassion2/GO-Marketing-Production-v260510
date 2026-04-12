export default function PageShell({ title, subtitle, children }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <header className="mb-12">
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-muted-foreground font-body font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </header>
      <div className="prose-container space-y-6 text-foreground/85 font-body leading-relaxed">
        {children}
      </div>
    </div>
  );
}