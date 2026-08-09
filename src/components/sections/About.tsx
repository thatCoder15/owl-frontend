// import { Container } from "@/components/common/Container";
// import { SectionHeading } from "@/components/common/SectionHeading";

// export function About() {
//   return (
//     <section
//       id="about"
//       className="py-28"
//     >
//       <Container>

//         <SectionHeading
//           title="About Me"
//           subtitle="Who I am"
//         />

//         <div className="mx-auto max-w-3xl text-center leading-8 text-muted-foreground">

//           Write your introduction here.

//         </div>

//       </Container>
//     </section>
//   );
// }


import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";

export function About() {
  return (
    <Section id="about">

      <SectionHeading
        title="About Me"
        subtitle="Who I Am"
      />

      <div className="mx-auto max-w-3xl text-center leading-8 text-muted-foreground">
        Passionate Full Stack Developer focused on building scalable,
        clean and modern web applications using TypeScript ecosystem.
      </div>

    </Section>
  );
}