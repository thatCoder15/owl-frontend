import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Container } from "./Container";

type Props = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  className,
  children,
}: Props) {
  return (
    <section
      id={id}
      className={cn("py-24 md:py-32", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}