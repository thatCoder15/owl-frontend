type Props = {
  title: string;
  subtitle?: string;
};

export function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-12 space-y-3 text-center">
      <h2 className="text-4xl font-bold tracking-tight">
        {title}
      </h2>

      {subtitle ? (
        <p className="mx-auto max-w-2xl text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}