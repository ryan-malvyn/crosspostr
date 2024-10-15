'use client'
import { useSession } from "next-auth/react";
import ImageUploader from "../../components/scheduler/imageUpload.tsx"

export default function homePage(){

  const { data:session } = useSession()
  console.log(session)

  return(
  <div>
    Logged in
  </div>
  )
}
