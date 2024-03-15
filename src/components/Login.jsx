import { GitHub, Google } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
} from "@mui/material";

import styled from "@emotion/styled";
import { signInWithGithubPopup, signInWithGooglePopup } from "../firebase";


const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;



const LoginComponent = () => {
  
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
    <LoginFormContainer>
      <Grid spacing={2} container>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <Card>
            <CardHeader subheader="Social Login" />
            <CardContent>
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" fullWidth startIcon={<Google />} onClick={handleGoogleSignIn}>
                  Google
                </Button>
                <Button variant="outlined" fullWidth startIcon={<GitHub />} onClick={handleGithubSignIn}>
                  Gihub
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </LoginFormContainer>
  );
};

export default LoginComponent;
