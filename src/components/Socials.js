import emailIcon from "../images/email.png";
import linkedinIcon from "../images/linkedin.png";

export default function Socials() {
    return (
        <div className="socials">
            <button className="socials--emailbutton">
                <div>
                    <img src={emailIcon} alt="Email"></img>
                    <h3>Email</h3>
                </div>
            </button>
            <button className="socials--linkedinbutton">
                <div>
                    <img src={linkedinIcon} alt="LinkedIn"></img>
                    <h3>LinkedIn</h3>
                </div>
            </button>
        </div>
    );
}