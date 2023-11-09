import "../sass/footer.css";
import { Link } from "react-router-dom";
import abletonBlack from "../assets/image/abletonBlack.png"

const Footer = () => {
    return (
        <div className="footer">
            
            <div className="footer-text">Ableton</div>

            <div className="footer-first">
                <div className="cell">
                    <Link>Register Live or Push</Link>
                    <Link>About Ableton</Link>
                    <Link>Jobs</Link>

                    <div className="socials"></div>
                </div>
                
                <div className="cell">
                    <h2>Education</h2>
                    <Link>Offer for students and teachers</Link>
                    <Link>Ableton for the Classroom</Link>
                    <Link>Ableton for Colleges and Universities</Link>
                </div>

                <div>
                    <h2>Sign up for our newsletter</h2>
                    <p>
                        Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.
                    </p>
                    <form>
                        <input type="email" name="" id="" />
                    </form>
                </div>
            </div>

            <div className="footer-second">
                <div className="cell">
                    <h2>Community</h2>
                    <Link>Find Ableton User Groups</Link>
                    <Link>Find Certified Training</Link>
                    <Link>Become a Certified Trainer</Link>
                </div>

                <div>
                    <h2>Language and Location</h2>
                    <div></div>
                </div>
            </div>

            <div className="footer-nav">

                <div className="links">
                    <Link>Contact Us</Link>
                    <Link>Press Resources</Link>
                    <Link>Legal Info</Link>
                    <Link>Privacy Policy</Link>
                    <Link>Cookie Settings</Link>
                    <Link>Imprint</Link>
                </div>

                <div className="footer-img">
                    <span>Made in Berlin</span>
                    <img src={abletonBlack} alt="ableton logo" />
                </div>
            </div>
        </div>
    );
}
 
export default Footer;