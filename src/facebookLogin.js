import React from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    PinterestShareButton,
    PinterestIcon,


} from "react-share";


function FbLogin() {

    const handleResponse = (data) => {
        console.log(data.profile);
        
    }

    const handleError = (error) => {
        this.setState({ error });
    }

    return (
        <>
            <div className="fb-login">

                <FacebookProvider appId="147781680886374">
                    <LoginButton
                        scope="email"
                        onCompleted={handleResponse}
                        onError={handleError}
                    >
                        <span className="fb-button">
                            <span className="fb-sym">
                                <box-icon type='logo' name='facebook-circle' color="#4267B2" ></box-icon><span className="fb-text">Facebook</span>
                            </span>
                        </span>
                    </LoginButton>
                </FacebookProvider>



            </div>

        </>
    );

}

function FbShare(props) {
    return (
        <>
            <div className="fb share"  >

                {/* <FacebookProvider appId="147781680886374" >
                    <ShareButton href={props.href} >
                        Share
                    </ShareButton>
                </FacebookProvider>
 */}

                <FacebookShareButton
                    url={props.href}
                // quote="hi"
                // hashtag="#programing joke"
                >
                    <FacebookIcon logoFillColor="white" />
                </FacebookShareButton>

                <LinkedinShareButton
                    url={props.href}>
                    <LinkedinIcon logoFillColor="white" />
                </LinkedinShareButton>

                <TwitterShareButton
                    url={props.href}>
                    <TwitterIcon logoFillColor="white" />
                </TwitterShareButton>

                <RedditShareButton
                    url={props.href}>
                    <RedditIcon logoFillColor="white" />
                </RedditShareButton>

                <PinterestShareButton
                    url={props.href}>
                    <PinterestIcon logoFillColor="white" />
                </PinterestShareButton>



            </div>

        </>
    );

}





export { FbLogin, FbShare };


