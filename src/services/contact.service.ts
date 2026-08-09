// import { api } from "@/lib/api";
// import type { ContactSchema } from "@/validators/contact.schema";

// export async function sendContact(
//   data: ContactSchema,
// ) {
//   const response = await api.post(
//     "/contact",
//     data,
//   );

//   return response.data;
// }

import { api } from "@/lib/api";
import type { ContactSchema } from "@/validators/contact.schema";

export async function sendContact(
  data: ContactSchema,
) {
  return api<void, ContactSchema>("/contact", {
    method: "POST",
    body: data,
  });
}