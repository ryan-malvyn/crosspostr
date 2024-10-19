import GoogleSignIn from "../authentication/signIn/google.tsx"
export default function heroSection(){
  return(
  <div className='flex flex-col p-4 lg:py-10 lg:px-8 lg:justify-center lg:items-center'>
    <div className='lg:max-w-screen-lg lg:flex lg:flex-col lg:justify-center items-center'>
    <h1 className='text-6xl lg:text-8xl font-extrabold lg:text-center lg:my-40'>
      Post Once, to <br />
      <span className='text-7xl lg:text-8xl text-transparent lg:text-center bg-gradient-to-l bg-clip-text from-indigo-600 via-purple-600 to-pink-600'> all your platforms. </span>
    </h1>  
    <p className='py-4 text-lg lg:max-w-screen-sm lg:text-2xl lg:p-8'>
      Juggling many different social medias at once can be hard.
      With our help, you can check your social media marketing off your list.
    </p>
    <h2 className='text-2xl font-bold py-2 lg:max-w-screen-sm lg:text-2xl text-left lg:px-8'>
      Social Media Marketing is a game of numbers 
    </h2>
    <p className="lg:max-w-screen-sm lg:text-2xl lg:px-8">
    it's like throwing things at the wall and seeing what sticks if you don't know your audience. So here's how we'll help you:
    </p>
      <ul className='px-6 pt-4 flex flex-col gap-2'>
        <li className='lg:px-8'>
          A Post Organizer
        </li>
        <li className='lg:px-8'>
          Caption Recommendations
        </li>
        <li className='lg:px-8'>
          AI Based Content Advisor
        </li>
    </ul>
    <h3 className='italic py-4 lg:text-left lg:px-8'>
      It's okay! Don't click on it just yet, learn more below if  you're not sure
    </h3>
    <div className='flex my-4 flex-col justify-center items-center'>
     <GoogleSignIn />
     <p className='text-xs mt-2'>
      Try it for free, no credit card required. Prices in USD.
     </p>
    </div>
    </div>
  </div>
  )
}
