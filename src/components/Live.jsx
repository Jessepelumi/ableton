import "../sass/live.css";
import { Link } from "react-router-dom";
import { PlayCircle, CaretRight, Plus } from "@phosphor-icons/react";
import { useEffect } from "react";

const Live = () => {

    useEffect(() => {
        document.title = "What's new in Live 11 | Ableton";
    }, []);

    return (
        <div className="live">
            <nav className="live-nav">
                <Link>Live 11</Link>
                <Link>Add new features</Link>
                <Link>What is Live?</Link>
                <Link>Max for Live</Link>
                <Link>Learn Live</Link>
                <Link>Integrated hardware</Link>
                <Link>Compare editions</Link>
                <Link>Buy now</Link>
            </nav>

            <div>
                <div className="header-video">
                    <figure>
                        <div>
                            <video autoPlay controls loop>
                                <source src="https://cdn-resources.ableton.com/resources/videos/live/l12_tour_header_desktop.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <figcaption>
                            Find <span>yourself</span> again and again in Ableton Live
                        </figcaption>
                    </figure>
                </div>
            </div>

            <div className="find-live">
                <div>
                    <div className="find-live-heading">
                        <h2>Whatever music you make, and whoever you are as a music maker, there's always more to explore in Live. See how you can go further with Live 12.</h2>
                    </div>

                    <div className="find-live-video">
                        <a href="https://www.youtube.com/watch?v=QFCV6EkqRQs" target="_blank">
                            <figure>
                                <div>
                                    <img src="https://ableton-production.imgix.net/components/text-beside-media/001882750010-web-sRGB.jpg?auto=compress%2Cformat&w=1680" alt="" />
                                    <span><PlayCircle size={200} weight="fill" /></span>
                                </div>
                                <figcaption>
                                    A look at some of the highlights of Live 12
                                </figcaption>
                            </figure>
                        </a>
                    </div>

                    <div className="find-live-link">
                        <div className="find-live-text">
                            <h2>Find out what's possible in Live 12</h2>
                        </div>
                        <div className="find-live-nav">
                            <span>Jump to:</span>
                            <nav>
                                <Link>Play freely with ideas</Link>
                                <Link>Surprise yourself with sounds</Link>
                                <Link>Work more intuitively</Link>
                                <Link>See all new features</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ideas">
                <div>
                    <div className="ideas-heading">
                        <h2>Pray freely with ideas</h2>
                    </div>

                    <div className="ideas-video">
                        <a href="https://www.youtube.com/watch?v=z7kjcMvMr3M" target="_blank">
                            <figure>
                                <div>
                                    <img src="https://ableton-production.imgix.net/components/text-beside-media/web-play-freely-header-sRGB.jpg?auto=compress%2Cformat&w=1680" alt="" />
                                    <span><PlayCircle size={200} weight="fill" /></span>
                                </div>
                                <figcaption>
                                    A demonstration of the new MIDI Tools
                                </figcaption>
                            </figure>
                        </a>
                    </div>

                    <div className="ideas-text">
                        <div className="live-options-features">
                            <div >
                                <h2>Reshape MIDI patterns</h2>
                                <p>
                                    Apply a variety of simple or complex variations to your MIDI clips with new MIDI Transformations. Add ornaments and articulations, draw acceleration and deceleration curves, connect successive notes and chords, simulate the strum of a guitar, and more.
                                </p>
                            </div>
                            <div>
                                <h2>Generate inspiration</h2>
                                <p>
                                    Conjure up melodies, chords and rhythms with the help of new MIDI Generators. Set constraints and let your chosen Generator create playful and original ideas for you to develop and turn into your own.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="experiment">

                <div className="experiment-heading">
                    <h2>Experiment with new devices</h2>
                </div>

            </div>

            <div className="stage">

                <div className="stage-heading">
                    <h2>Do more on stage</h2>
                </div>

                <div className="stage-tempo">
                    <div className="tempo-video">
                        <a href="https://www.youtube.com/watch?v=OP6EKAggYyE" target="_blank">
                            <figure>
                                <img src="https://ableton-production.imgix.net/live/poster-mpe.jpg?auto=compress%2Cformat&w=1680" alt="" />
                                <figcaption>
                                Artist demonstrates MPE using a Roli Seaboard, Push and Live 11's new Note Expression View
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                    <div className="tempo-text">
                        <h2>Tempo following</h2>
                        <p>
                            Live listens to and adjusts its tempo based on incoming audio in real time, making it a dynamic part of the band instead of the tempo source that everyone has to follow. When you DJ, you can even turn Live into a tempo-synced FX box.
                        </p>
                    </div>
                    <div></div>
                </div>

            </div>

            <div className="stage">

                <div className="stage-heading">
                    <h2>Do more on stage</h2>
                </div>

                <div className="stage-tempo">
                    <div className="tempo-video">
                        <a href="https://www.youtube.com/watch?v=OP6EKAggYyE" target="_blank">
                            <figure>
                                <img src="https://ableton-production.imgix.net/live/poster-mpe.jpg?auto=compress%2Cformat&w=1680" alt="" />
                                <figcaption>
                                Artist demonstrates MPE using a Roli Seaboard, Push and Live 11's new Note Expression View
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                    <div className="tempo-text">
                        <h2>Tempo following</h2>
                        <p>
                            Live listens to and adjusts its tempo based on incoming audio in real time, making it a dynamic part of the band instead of the tempo source that everyone has to follow. When you DJ, you can even turn Live into a tempo-synced FX box.
                        </p>
                    </div>
                    <div></div>
                </div>

            </div>



        </div>
    );
}
 
export default Live;