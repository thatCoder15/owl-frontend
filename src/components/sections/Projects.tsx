import { projects } from "@/constants/projects";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-28"
    >
      <Container>

        <SectionHeading
          title="Projects"
          subtitle="Some of my work"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <Card key={project.id}>

              <CardHeader>

                <CardTitle>
                  {project.title}
                </CardTitle>

              </CardHeader>

              <CardContent>

                <p className="text-muted-foreground">
                  {project.description}
                </p>

              </CardContent>

            </Card>
          ))}

        </div>

      </Container>
    </section>
  );
}