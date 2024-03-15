import "./App.css";
import { signInWithGithubPopup, signInWithGooglePopup } from "./firebase";

function App() {

  // Function to handle sign-in with Google and Github using popup auth methods.
  // Replace the console.log statements with your own code to handle the sign-in.
  // For example, you can redirect the user to a different page after successful sign-in.
  // You can also handle errors and display appropriate messages to the user.
  // You can also use the response object to access the user's profile information.
  // For example, you can use the response object to display the user's name or avatar image.
  
  // Example usage:
  // const response = await signInWithGooglePopup();
  // console.log("google signin response: ", response);
  
  // Replace the console.log statements with your own code to handle the sign-in.
  const handleGoogleSignIn = async () => {
    try {
      const respose = await signInWithGooglePopup();
      console.log("google signin response: ", respose);
      // Handle successful sign-in
    } catch (error) {
      console.error(error.message);
    }
  };

  
  const handleGithubSignIn = async () => {
    try {
      const response = await signInWithGithubPopup();
      console.log("github signin response: ", response);
      // Handle successful sign-in
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <div>
        <h2>Sign In</h2>
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        <button onClick={handleGithubSignIn}>Sign in with Github</button>
        {/* Add buttons for other authentication providers */}
      </div>
    </>
  );
}

export default App;
