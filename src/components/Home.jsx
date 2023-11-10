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

                {/* <div className="first-image3">
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
                </div> */}
            </div>

            <div className="second">
                <div className="latest">
                    <nav>
                        <h2>The latest form Ableton</h2>

                        <div>
                            <Link>All posts</Link>
                            <Link>Artists</Link>
                            <Link>News</Link>
                            <Link>Downloads</Link>
                            <Link>Tutorials</Link>
                            <Link>Videos</Link>
                            <Link>Loops</Link>
                        </div>
                    </nav>

                    <div>
                        <div>
                            <Link>
                                <img src="https://cdn-resources.ableton.com/resources/uploads/zinnia/thumb_SHS_20_Closing_Marathon_Season_1_RESIZE.jpg.600x340_q85_crop_upscale.jpg" alt="" />
                                <span>Artist</span>
                                <p>Together, Apart: Remote Jamming with Speedy J</p>
                            </Link>
                        </div>
                        <div>
                            <Link>
                                <img src="https://cdn-resources.ableton.com/resources/uploads/zinnia/thumb_P3-events-web-800x400_1.jpg.600x340_q85_crop_upscale.jpg" alt="" />
                                <span>News</span>
                                <p>Get Hands-on with Push 3 at an Event Near You</p>
                            </Link>
                        </div>
                        <div>
                            <Link>
                                <img src="https://cdn-resources.ableton.com/resources/uploads/zinnia/thumb_432_Loop_Session_Machina.jpg.600x340_q85_crop_upscale.jpg" alt="" />
                                <span>Loop</span>
                                <p>Loop Session: Discover machìna's Approach to Performing</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="latest">
                    <nav>
                        <h2>Expand Live with Packs</h2>

                        <div>
                            <Link>
                                Discover more
                                <CaretRight size={12} />
                            </Link>
                        </div>
                    </nav>

                    <div>
                        <div>
                            <Link>
                                <img src="https://ableton-production.imgix.net/uploads/content-clusters/NL_Spitfire_Choir.jpg?fit=crop&amp;auto=format&amp;fm=jpg" alt="" />
                                <p>Together, Apart: Remote Jamming with Speedy J</p>
                            </Link>
                        </div>
                        <div>
                            <Link>
                                <img src="https://ableton-production.imgix.net/uploads/content-clusters/TN_Building_Max_Devices.jpg" alt="" />
                                <p>Get Hands-on with Push 3 at an Event Near You</p>
                            </Link>
                        </div>
                        <div>
                            <Link>
                                <img src="https://ableton-production.imgix.net/uploads/content-clusters/BL_SPAT_Devices.jpg" alt="" />
                                <p>Loop Session: Discover machìna's Approach to Performing</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="latest">
                    <nav>
                        <h2>Develop your music-making</h2>
                    </nav>

                    <div>
                        <div>
                            <Link>
                                <img src="https://ableton-production.imgix.net/uploads/content-clusters/Screenshot_2023-04-11_at_12.20.55.png" alt="" />
                                <p>Together, Apart: Remote Jamming with Speedy J</p>
                            </Link>
                        </div>
                        <div>
                            <Link>
                                <img src="https://ableton-production.imgix.net/uploads/content-clusters/403_Product_Takeover5.jpg" alt="" />
                                <p>Get Hands-on with Push 3 at an Event Near You</p>
                            </Link>
                        </div>
                        <div>
                            <Link>
                                <img src="https://ableton-production.imgix.net/uploads/content-clusters/Screenshot_2023-04-11_at_12.22.04.png" alt="" />
                                <p>Loop Session: Discover machìna's Approach to Performing</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="latest">
                    <nav>
                        <h2>One Thing videos: monthly creative tips</h2>

                        <div>
                            <Link>
                                See all videos
                                <CaretRight size={12} />
                            </Link>
                        </div>
                    </nav>

                    <div>
                        <div>
                            <Link>
                                <img src="https://ableton-production.imgix.net/uploads/content-clusters/One_Thing_JWords_Title.jpg" alt="" />
                                <p>Together, Apart: Remote Jamming with Speedy J</p>
                            </Link>
                        </div>
                        <div>
                            <Link>
                                <img src="https://ableton-production.imgix.net/uploads/content-clusters/One_Thing_Rokeya_Title_FINAL_2.jpg" alt="" />
                                <p>Get Hands-on with Push 3 at an Event Near You</p>
                            </Link>
                        </div>
                        <div>
                            <Link>
                                <img src="https://ableton-production.imgix.net/uploads/content-clusters/One_Thing_Chuck_Sutton_Title.jpg" alt="" />
                                <p>Loop Session: Discover machìna's Approach to Performing</p>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            <div className="third">

                <div className="third-nav">
                    <span>More:</span>
                    <nav>
                        <Link>All posts</Link>
                        <Link>Artists</Link>
                        <Link>News</Link>
                        <Link>Downloads</Link>
                        <Link>Tutorials</Link>
                        <Link>Videos</Link>
                        <Link>Loops</Link>
                    </nav>
                </div>

            </div>

        </div>
    );
}
 
export default Home;