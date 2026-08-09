// import axios from "axios";

// export const api = axios.create({
//   baseURL:
//     process.env.NEXT_PUBLIC_API_URL ??
//     "http://localhost:5000/api",

//   headers: {
//     "Content-Type": "application/json",
//   },
// });

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

type ApiOptions<TBody> = Omit<RequestInit, "body"> & {
  body?: TBody;
};

export async function api<TResponse, TBody = unknown>(
  endpoint: string,
  options?: ApiOptions<TBody>,
): Promise<TResponse> {
  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    body: options?.body
      ? JSON.stringify(options.body)
      : undefined,
    cache: "no-store",
  });

  const data: ApiResponse<TResponse> = await res.json();

  if (!data.success) {
    throw new Error(data.message);
  }

  return data.data;
}