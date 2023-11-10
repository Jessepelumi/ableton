import "../sass/footer.css";
import { Link } from "react-router-dom";
import abletonBlack from "../assets/image/abletonBlack.png"
import { CaretRight, FacebookLogo, TwitterLogo, YoutubeLogo, InstagramLogo } from "@phosphor-icons/react";

const Footer = () => {
    return (
        <div className="footer">
            
            <div className="footer-text">Ableton</div>

            <div className="footer-first">
                <div className="cell">

                    <Link>
                        Register Live or Push
                        <CaretRight size={12} />
                    </Link>
                    <Link>
                        About Ableton
                        <CaretRight size={12} />
                    </Link>
                    <Link>
                        Jobs
                        <CaretRight size={12} />
                    </Link>

                    <div className="socials">

                        <a href="http://facebook.com/ableton" target="_blank" className="facebook">
                            <FacebookLogo size={32} weight="fill" />
                        </a>
                        <a href="http://twitter.com/ableton" target="_blank" className="twitter">
                            <TwitterLogo size={32} weight="fill" />
                        </a>
                        <a href="http://youtube.com/ableton" target="_blank" className="youtube">
                            <YoutubeLogo size={32} weight="fill" />
                        </a>
                        <a href="http://instagram.com/ableton" target="_blank" className="instagram">
                            <InstagramLogo size={32} weight="fill" />
                        </a>

                    </div>
                </div>
                
                <div className="cell">
                    <h2>Education</h2>
                    <Link>
                        Offer for students and teachers
                        <CaretRight size={12} />
                    </Link>
                    <Link>
                        Ableton for the Classroom
                        <CaretRight size={12} />
                    </Link>
                    <Link>
                        Ableton for Colleges and Universities
                        <CaretRight size={12} />
                    </Link>
                </div>

                <div className="cell">
                    <h2>Sign up for our newsletter</h2>
                    <p>
                        Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.
                    </p>
                    <form>
                        <input type="email" name="" id="" placeholder="Email Address" />
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>

            <div className="footer-second">
                <div className="cell">
                    <h2>Community</h2>
                    <Link>
                        Find Ableton User Groups
                        <CaretRight size={12} />
                    </Link>
                    <Link>
                        Find Certified Training
                        <CaretRight size={12} />
                    </Link>
                    <Link>
                        Become a Certified Trainer
                        <CaretRight size={12} />
                    </Link>
                </div>

                <div className="cell">
                    <h2>Language and Location</h2>
                    <div></div>
                </div>

                <div className="cell"></div>
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