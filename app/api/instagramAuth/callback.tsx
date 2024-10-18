import { NextApiRequest,NextApiResponse } from 'next';

export default async function handler(req:NextApiRequest,res:NextApiResponse){
  const { code } = req.query
  
  if(!code){
    return res.status(400).send('Authorization code missing');
  }

  try {
    const clientId = process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID
    const clientSecret = process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_SECRET
    const redirectURI = ''
    const grant_type='authorization_code'
    const body = new URLSearchParams({
      client_id:clientId,
      client_secret:clientSecret,
      redirect_uri:redirectURI,
      grant_type:grant_type,
      code:code
    })
    const tokenResponse = await fetch(`https://api.instagram.com/oauth/access_token`,{
      method:'POST',
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      },
      body:body
    ).then(response=>response.json())
    .then(data => {
        console.log(data)
      })
  } catch(error) {
    console.error(error)
  }
}
