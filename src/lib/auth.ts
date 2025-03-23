import { auth } from "~/server/auth"

export function getUserSession() {
  return auth();
}
