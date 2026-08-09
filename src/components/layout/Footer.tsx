import { Container } from "@/components/common/Container";

export function Footer() {
  return (
    <footer className="border-t py-8">
      <Container>
        <p className="text-center text-sm text-muted-foreground">
          © 2026 Portfolio. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}