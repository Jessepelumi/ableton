import "../sass/home.css";
import { Link } from "react-router-dom";
import { CaretRight } from "@phosphor-icons/react";

const Home = () => {
    return (
        <div className="home">
            
            <div className="first">
                <div className="first-image1">
                    <div>
                        <img src="https://ableton-production.imgix.net/uploads/homepage-teasers/Homepage_Tile_1000x680_Mxr9Rpo.jpg" alt="" />
                        <div>
                            <h2>Update Live and Push for free</h2>
                            <Link>
                                Download Live 11.3.10
                                <CaretRight size={12} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="first-image2">
                    <div>
                        <img src="https://ableton-production.imgix.net/uploads/homepage-teasers/Push-opt2_0CUDOtu.jpg?fit=crop&amp;auto=format&amp;fm=jpg" alt="" />
                        <div>
                            <h2>Focus and feel</h2>
                            <Link>
                                Meet the new Push
                                <CaretRight size={12} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="first-image3">
                    <div>
                        <img src="https://ableton-production.imgix.net/uploads/homepage-teasers/428_Note_Homepage_Tile_black_shadow.jpg" alt="" />
                        <div>
                            <h2>See what's new in Note</h2>
                            <Link>
                                Check out the latest features
                                <CaretRight size={12} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default Home;