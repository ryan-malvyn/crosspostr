"use client"
import { useState } from 'react'

const imageUploader = () => {
  const [file,setFile] = useState<File|null>(null)
  
  async function uploadImage(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    if(!file || file === null) return
    
    try {
      const data = new FormData()
      data.set('file',file)

      const res = await fetch('/api/upload',{
        method:'POST',
        body:data
      })

      console.log(res)

      //handle Error
      if(!res.ok) throw new Error(await res.text())
    } catch (e:any) {
      //handle Error
      console.error(e)
    }
  }

  return (
    <div>
      <form onSubmit={uploadImage}>
        <input
          type="file"
          name="file"
          onChange={(e)=>setFile(e.target.files?.[0])} />
        <button type='submit' value='upload' className='border-2 border-red-600 bg-white' >Upload Image</button>
      </form>
    </div>
  )
}

export default imageUploader;
