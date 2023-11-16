import abletonBlack from "../assets/image/abletonBlack.png";
import { Link } from "react-router-dom";
import "../sass/navbar.css"
import { Plus, Minus } from "@phosphor-icons/react";
import { useState } from "react";

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const icon = open ? (<Minus size={16} weight="bold" />) : (<Plus size={16} weight="bold" />);

    return (
        <div>
            <nav className="navigation">

                <div className="nav-first">

                    <div className="navigation-logo">
                        <Link to="/" onClick={() => setOpen(false)}>
                            <img src={abletonBlack} alt="ableton logo" />
                        </Link>
                    </div>

                    <div className="navigation-links">
                        <div onClick={() => setOpen(false)}>
                            <Link to="/live"  >Live</Link>
                            <Link to="/push">Push</Link>
                            <Link to="/note">Note</Link>
                            <Link to="/link">Link</Link>
                            <Link to="/shop">Shop</Link>
                            <Link to="/packs">Packs</Link>
                            <Link to="/help">Help</Link>
                        </div>
                        <span onClick={() => setOpen(!open)}>
                            More
                            {icon}
                        </span>
                    </div>

                </div>

                <div className="nav-second" onClick={() => setOpen(false)}>
                    <Link to="/trial">Try Live for free</Link>
                    <Link to="/login">Log in or register</Link>
                </div>
            </nav>

            {open && (
                <div className="more">
                    <div className="first">
                        <h2>More on Ableton.com:</h2>
                        <div className="first-links" onClick={() => setOpen(false)}>
                            <Link to="/live">Blog</Link>
                            <Link to="/push">Ableton for the Classroom</Link>
                            <Link to="/note">Ableton for Colleges and Universities</Link>
                            <Link to="/link">Certified Training</Link>
                            <Link to="/shop">About Ableton</Link>
                            <Link to="/packs">Jobs</Link>
                            <Link to="/help">Apprenticeship</Link>
                        </div>
                    </div>

                    <div className="second">
                        <h2>More from Ableton:</h2>
                        <div className="second-links" onClick={() => setOpen(false)}>
                            <Link>
                                <h3>Loop</h3>
                                <p>
                                    Watch Talks, Performances and Features from Ableton's Summit for Music Makers.
                                </p>
                            </Link>
                            <Link>
                                <h3>Learning Music</h3>
                                <p>
                                    Learn the fundamentals of music making right in your browser.
                                </p>
                            </Link>
                            <Link>
                                <h3>Learning Synths</h3>
                                <p>
                                    Get started with synthesis using a web-based synth and accompanying lessons.
                                </p>
                            </Link>
                            <Link>
                                <h3>Making Music</h3>
                                <p>
                                    Some tips from 74 Creative Strategies for Eletronic Producers.
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default Navbar;