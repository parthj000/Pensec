import React from "react";
import "./login.scss";

export default function Login() {
  const handleGoogleOAuth = () => {
    const clientId =
      "496325417776-ppn31cl8bjog94fi16oodu33cp9t08tt.apps.googleusercontent.com";

    const redirectUri = "http://localhost:3000/google/callback";
    const scope =
      "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email";
    const responseType = "code";
    const prompt = "consent";

    const googleOAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}&prompt=${prompt}`;
    window.location.href = googleOAuthUrl;
  };

  return (
    <>
      <div className="body">
        <div className="login-page">
          <img src="../image.png" alt="Logo" />
          <h1>Welcome Back!</h1>
          <button onClick={handleGoogleOAuth}>Login with Google</button>
          <p>Click the button above to sign in with your Google account.</p>
        </div>
      </div>
    </>
  );
}
