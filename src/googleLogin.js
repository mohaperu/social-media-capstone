import { GoogleLogin } from "react-google-login";

export function GoogleLog() {

    const clientid = "716215014746-tul333i8v34nq693irguk4urjki9grmf.apps.googleusercontent.com";

    const onLoginSuccess = (res) => {
        console.log("Login Successfull", res);
    }

    const onFailureSuccess = (res) => {
        console.log("Login Failure", res);
    }

    return (
        <>
            <GoogleLogin
                clientId={clientid}
                buttonText="Google"
                onSuccess={onLoginSuccess}
                onFailure={onFailureSuccess}
                cookiePolicy={'single_host_origin'}

            />
        </>
    );
}