import "../sass/live.css";
import { Link } from "react-router-dom";
import { PlayCircle, CaretRight, Plus } from "@phosphor-icons/react";
import { useEffect } from "react";

const Live = () => {

    useEffect(() => {
        document.title = "What's new in Live 12 | Ableton";
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

                    <div className="ideas2">
                        <div>
                            <div className="ideas2-image">
                                <img src="https://ableton-production.imgix.net/components/text-beside-media/web-mfl-midi-tools.png?auto=compress%2Cformat&w=1600" alt="" />
                            </div>
                            <div className="ideas2-text">
                                <h2>Do more with Max for Live</h2>
                                <p>
                                    Try out additional Max for Live Transformations and Generators that give you deeper ways of working with MIDI, or go even further by building new ones.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="ideas3">
                        <div className="ideas3-text">
                            <div>
                                <h2>Embrace and explore tunings</h2>
                                <p>
                                    Follow your preferred tuning systems or try different ones more easily. Work outside the 12-tone equal temperament system, and access tunings with Live's devices as well as any MPE-capable plugin.
                                </p>
                            </div>
                        </div>
                        <div className="ideas3-video">
                            <a href="https://www.youtube.com/watch?v=5AcHM_FtkiM" target="_blank">
                                <figure>
                                    <div>
                                        <img src="https://ableton-production.imgix.net/components/text-beside-media/web-tunings-img-sRGB.jpg?auto=compress%2Cformat&w=1680" alt="" />
                                        <span><PlayCircle size={200} weight="fill" /></span>
                                    </div>
                                    <figcaption>
                                        A demonstration of the new MIDI Tools
                                    </figcaption>
                                </figure>
                            </a>
                        </div>
                    </div>

                    <div className="ideas3">
                        <div className="ideas3-video">
                            <a href="https://www.youtube.com/watch?v=u6IpJYpN48A" target="_blank">
                                <figure>
                                    <div>
                                        <img src="https://ableton-production.imgix.net/components/text-beside-media/web-midi-tools-img-sRGB-2.jpg?auto=compress%2Cformat&w=1680" alt="" />
                                        <span><PlayCircle size={200} weight="fill" /></span>
                                    </div>
                                    <figcaption>
                                        A demonstration of the new MIDI Tools
                                    </figcaption>
                                </figure>
                            </a>
                        </div>
                        <div className="ideas3-text">
                            <div>
                                <h2>Stay in key</h2>
                                <p>
                                    Choose a scale in Live's Control Bar to see its notes in any MIDI clip you create. Then transform or generate ideas within the confines of the selected scale, or sync the scale of MIDI devices and instruments to the clip being played.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="ideas2">
                        <div>
                            <div className="ideas2-image">
                                <img src="https://ableton-production.imgix.net/components/text-beside-media/web-midi-editing.png?auto=compress%2Cformat&w=1600" alt="" />
                            </div>
                            <div className="ideas2-text">
                                <h2>Edit MIDI more easily</h2>
                                <p>
                                    Use keyboard and mouse operations to edit MIDI in new ways. Split a note in two, or chop it into several parts. Select a set of notes and join them together, or make them fill a selected time range. And access more tools from the Note Utilities panel on the left.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="ideas2">
                        <div>
                            <div className="ideas2-image">
                                <img src="https://ableton-production.imgix.net/components/text-beside-media/web-mfl-modulation.png?auto=compress%2Cformat&w=1600" alt="" />
                            </div>
                            <div className="ideas2-text">
                                <h2>Modulate more flexibly</h2>
                                <p>
                                    Stay in control of a parameter, even after it's been mapped to a modulation source; Max for Live devices like LFO, Shaper and Envelope Follower now let you freely adjust a destination that's being modulated.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="surprise">

                <div className="surprise-heading">
                    <h2>Surprise yourself with the sounds you create</h2>
                    <img src="https://ableton-production.imgix.net/components/text-beside-media/001882720001-web-1610.jpg?auto=compress%2Cformat&w=1920" alt="" />
                    <div className="surprise-heading-image">
                        
                    </div>
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