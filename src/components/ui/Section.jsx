export function Section({ title, children, className = "", borderTop = false }) {
  return (
    <section className={`mb-12 ${borderTop ? "pt-10 border-t border-border" : ""} ${className}`}>
      {title && (
        <h2 className="font-display text-xl md:text-2xl font-medium text-foreground mb-5">
          {title}
        </h2>
      )}
      <div className="text-foreground/90 leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}
