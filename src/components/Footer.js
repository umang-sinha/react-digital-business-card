import twitterIcon from "../images/twitter.png";
import facebookIcon from "../images/facebook.png";
import githubIcon from "../images/github.png";
import instagramIcon from "../images/instagram.png";

export default function Footer() {
    return (
        <footer className="footer">
            <img src={twitterIcon} alt="Twitter"/>
            <img src={facebookIcon} alt="Facebook"/>
            <img src={instagramIcon} alt="Instagram"/>
            <img src={githubIcon} alt="Github"/>
        </footer>
    );
}