import abletonBlack from "../assets/image/abletonBlack.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navigation">

            <div>

                <div className="navigation-logo">
                    <Link to="/">
                        <img src={abletonBlack} alt="ableton logo" />
                    </Link>
                </div>

                <div className="navigation-links">
                    <Link to="/live">Live</Link>
                    <Link to="/push">Push</Link>
                    <Link to="/note">Note</Link>
                    <Link to="/link">Link</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/packs">Packs</Link>
                    <Link to="/help">Help</Link>
                    <Link to="/more">
                        More
                    </Link>
                </div>

            </div>

            <div>
                <Link to="/trial">Try live for free</Link>
                <Link to="/login">Login or register</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;