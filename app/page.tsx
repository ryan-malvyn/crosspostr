"use client"
import { useState } from 'react';

import { signIn } from "next-auth/react";
export default function Home() {
  const [signedIn,setIsSignedIn] = useState(false)


  function handleSignIn(){
    signIn("facebook")
  }

  if(status === "authenticated"){
    setIsSignedIn(true)
  }

  
  

  return (
    <div>
      {signedIn ? <div>You are signed in</div> : <div>You are not signed in</div> }
      <button onClick={handleSignIn}>Sign in 
      </button>
    </div>


  );
}
