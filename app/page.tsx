import GoogleSignIn from "../components/authentication/signIn/google.tsx"
import Instagram from "../components/authentication/signIn/instagram.tsx"
import NavBar from "../components/landing/navbar.tsx"
import Hero from "../components/landing/hero.tsx"
export default function Welcome() {

  return (
    <div>
      
        <div>
          <NavBar />
        </div>
        <main className='p-4'>
        <Hero />
        <div>
        </div>
      </main>
    </div>
  );
}
