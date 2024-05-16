import { useAuth } from 'src/auth'

export default function AuthPage(){
  const { isAuthenticated, signUp, logOut, logIn, currentUser} = useAuth()

  return (
    <>
      {/* MetaTags, h1, paragraphs, etc. */}

      <p>{JSON.stringify({ isAuthenticated })}</p>
      <button onClick={() => signUp({
        email: 'linetheboss359@gmail.com',
        password: 'SuperSecretPassword123!',
      })}>sign up</button>
      &nbsp;

      {isAuthenticated && (
        <button onClick={() => logOut()}>logout</button>
      )}
    </>
  )}
