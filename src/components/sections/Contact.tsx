// import { Container } from "@/components/common/Container";
// import { SectionHeading } from "@/components/common/SectionHeading";

// export function Contact() {
//   return (
//     <section
//       id="contact"
//       className="py-28"
//     >
//       <Container>

//         <SectionHeading
//           title="Contact"
//           subtitle="Let's work together"
//         />

//       </Container>
//     </section>
//   );
// }

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  contactSchema,
  type ContactSchema,
} from "@/validators/contact.schema";

import { sendContact } from "@/services/contact.service";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(
    values: ContactSchema,
  ) {
    try {
      await sendContact(values);

      toast.success("Message sent.");

      reset();
    } catch {
      toast.error("Something went wrong.");
    }
  }

  return (
    <Section id="contact">
      <SectionHeading
        title="Contact"
        subtitle="Let's work together"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex max-w-xl flex-col gap-5"
      >
        <div>
          <Input
            placeholder="Name"
            {...register("name")}
          />
          <p className="mt-1 text-sm text-red-500">
            {errors.name?.message}
          </p>
        </div>

        <div>
          <Input
            placeholder="Email"
            {...register("email")}
          />
          <p className="mt-1 text-sm text-red-500">
            {errors.email?.message}
          </p>
        </div>

        <div>
          <Textarea
            rows={6}
            placeholder="Message"
            {...register("message")}
          />
          <p className="mt-1 text-sm text-red-500">
            {errors.message?.message}
          </p>
        </div>

        <Button
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting
            ? "Sending..."
            : "Send Message"}
        </Button>
      </form>
    </Section>
  );
}