import { signIn } from "@/auth";
import {FcGoogle } from "react-icons/fc"

export default function GoogleSignIn(){
  return(
    <form action={async ()=> {
      "use server"
      await signIn("google",{ redirectTo:"/home"})
    }}>
      <button type="submit" className='hover:pointer border-2 border-indigo-600 bg-indigo-600 font-semibold flex justify-center rounded-full mt-4 px-8 py-2 items-center'>
        <div className="flex items-center justify-center p-2">
        <FcGoogle />
        </div>
        Sign In With Google
      </button>
    </form>
  )
}
