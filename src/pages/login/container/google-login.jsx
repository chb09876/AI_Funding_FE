import styled from "styled-components";
import React from 'react';
import GoogleLogin from 'react-google-login';
const clientId = "553483572727-gd4ld8e84b825dk38eqjspbiqut6fjrg.apps.googleusercontent.com";

export default function GoogleLoginBtn({ onGoogleLogin }){
    const onSuccess = async(response) => {
        const { googleId, profileObj : { email, name } } = response;
        console.log(response);
        /*
        await onGoogleLogin (
            console.log("test")
        );*/
    }

    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
          <meta name ="google-signin-client_id" content="553483572727-gd4ld8e84b825dk38eqjspbiqut6fjrg.apps.googleusercontent.com"></meta>
            <GoogleLogin
                rander={renderProps => (
                    <Testbutton></Testbutton>
                )
                }
                //buttonText="TESbT"
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}/>
        </div>
    )
}

const Testbutton = styled.div`
  background-size: contain;

  width: 216px;
  height: 53px;
  border-radius: 12px;

  // reset user agent
  padding: 0;
  border: none;
`;

styled.div`
  background-size: contain;

  width: 216px;
  height: 53px;
  border-radius: 12px;

  // reset user agent
  padding: 0;
  border: none;
  outline: 0;
  box-shadow: none;
`;
