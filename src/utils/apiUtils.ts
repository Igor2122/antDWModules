import { HttpMethods } from "../types/glogalTypes";
import config from "../config";
import { ErrorRes } from "../types/apiTypes";

interface RequestConfig {
  endpoint: string;
  method: HttpMethods;
  auth?: string;
  body?: object;
  headers?: HeadersInit;
}

export async function performRealRequest<T>({
  endpoint,
  method,
  auth,
  body,
  headers,
}: RequestConfig): Promise<T> {
  const baseUrl = auth ? config.privateEndpoint : config.publicEndpoint;
  const response = await fetch(`${baseUrl}/${endpoint}`, {
    method,
    headers: {
      ...(!(body instanceof FormData) && {
        "Content-Type": "application/json",
      }),
      Authorization: auth || "",
      ...headers,
    },
    ...(body !== undefined && {
      body: body instanceof FormData ? body : JSON.stringify(body),
    }),
  });
  const json = await response.json();
  if (response.status >= 300) {
    const error = json as ErrorRes;
    throw Error(error?.reason || response.statusText);
  }
  return json;
}
