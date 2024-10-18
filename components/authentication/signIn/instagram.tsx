"use client"
import { useRouter } from 'next/navigation'
export default function SignInWithInstagram(){
  const router = useRouter();

  function handleInstagramAuthorization(){
    const clientId = '469165558845043'
    const redirectURI = 'https://localhost:3000/api/instagramAuth/callback'
    const responseType='code'
    const scope = 'business_basic,business_content_publish,business_manage_comments,business_manage_messages'
   
    const authorizationUrl = 'https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=469165558845043&redirect_uri=https://localhost:3000/api/instagramAuth/callback&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments%2Cinstagram_business_content_publish'
    router.push(authorizationUrl)
  }
  return(

  <button onClick={handleInstagramAuthorization}>
      Sign In With Instagram
  </button>
  )
}
