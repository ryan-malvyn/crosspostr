import { SessionProvider } from "next-auth/react";
import Welcome from "./welcome.tsx"

export default function AuthenticatedUser({ children }:{ children:React.ReactNode }){
  return(
  <SessionProvider>
      {children}
  </SessionProvider>
  )
}
