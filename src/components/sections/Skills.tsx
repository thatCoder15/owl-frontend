// import { skills } from "@/constants/skills";
// import { Container } from "@/components/common/Container";
// import { SectionHeading } from "@/components/common/SectionHeading";
// import { Badge } from "@/components/ui/badge";

// export function Skills() {
//   return (
//     <section
//       id="skills"
//       className="py-28"
//     >
//       <Container>

//         <SectionHeading
//           title="Skills"
//           subtitle="Technologies I use"
//         />

//         <div className="flex flex-wrap justify-center gap-4">

//           {skills.map((skill) => (
//             <Badge
//               key={skill.name}
//               className="px-5 py-2 text-base"
//             >
//               {skill.name}
//             </Badge>
//           ))}

//         </div>

//       </Container>
//     </section>
//   );
// }



import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";

import { skills } from "@/constants/skills";

export function Skills() {
  return (
    <Section id="skills">

      <SectionHeading
        title="Skills"
        subtitle="Current Tech Stack"
      />

      <div className="flex flex-wrap justify-center gap-4">

        {skills.map((skill) => (
          <Badge
            key={skill.name}
            className="px-5 py-2 text-base"
          >
            {skill.name}
          </Badge>
        ))}

      </div>

    </Section>
  );
}