import GoogleSignIn from "../components/authentication/signIn/google.tsx"

export default function Welcome() {

  return (
    <div>
      Welcome to crosspostr
      <GoogleSignIn />
    </div>
  );
}
