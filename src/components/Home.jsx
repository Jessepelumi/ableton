import "../sass/home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            
            <div className="first">
                <div className="first-image1">
                    <img src="https://ableton-production.imgix.net/uploads/homepage-teasers/Homepage_Tile_1000x680_Mxr9Rpo.jpg" alt="" />
                    <div>
                        <h2>Update Live and Push for free</h2>
                        <Link>Download Live 11.3.10</Link>
                    </div>
                </div>
                <div className="first-image2">
                    <img src="https://ableton-production.imgix.net/uploads/homepage-teasers/Push-opt2_0CUDOtu.jpg?fit=crop&amp;auto=format&amp;fm=jpg" alt="" />
                    <div>
                        <h2>Focus and feel</h2>
                        <Link>Meet the new Push</Link>
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default Home;