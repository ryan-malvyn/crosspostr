import { signIn } from "@/auth";

export default function GoogleSignIn(){
  return(
    <form action={async ()=> {
      "use server"
      await signIn("google",{ redirectTo:"/home"})
    }}>
      <button type="submit">Sign In With Google</button>
    </form>
  )
}
