'use client'
import ImageUploader from "../../components/scheduler/imageUpload.tsx"

export default function homePage(){

  async function getMessage(){
    //sends a fetch request, parses the JSON, and logs it to a console
    try{
    const res = await fetch('/api/upload',{
      method:'GET'
    })

    const data = await res.json()
    console.log(data.message)

    if(!res.ok) throw new Error('Fetch unsuccessful')
    } catch(e){
      console.error(e.message)
    }
  }

  return(
  <div>
    Logged in
    <button onClick={getMessage}>Test API</button>
    <ImageUploader />
  </div>
  )
}
