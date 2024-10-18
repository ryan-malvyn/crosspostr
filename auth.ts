import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Instagram from "next-auth/providers/instagram";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers:[Google,Instagram],
})
