import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter"
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import InstagramProvider from "next-auth/providers/instagram";

const handler = NextAuth({
  providers:[
    InstagramProvider({
      clientId:process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID,
      clientSecret:process.env.NEXT_PUBLIC_CLIENT_SECRET
    }),
    GoogleProvider({
      clientId:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
    }),
    FacebookProvider({
      clientId:process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
      clientSecret:process.env.NEXT_PUBLIC_FACEBOOKO_CLIENT_SECRET
    }),
    TwitterProvider({
      clientId:process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID,
      clientSecret:process.env.NEXT_PUBLIC_TWITTER_CLIENT_SECRET
    })
  ],
  callback:{
    async jwt({token,user,account}){
      if(account){
        token.accessToken = account.access_token
      }
      return token
    },
    async session({token,session,user}){
      session.accessToken = token.accessToken;
      session.user.id = token.id
    return session
    },
  }

  
})

export { handler as GET, handler as POST }
