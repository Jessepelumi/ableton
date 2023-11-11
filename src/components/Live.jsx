import "../sass/live.css";
import { Link } from "react-router-dom";
import { PlayCircle, CaretRight } from "@phosphor-icons/react";

const Live = () => {
    return (
        <div className="live">
            <nav>
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
                <div className="header">
                    <h1>What's new in Live 11</h1>
                    <Link>
                        <PlayCircle size={70} weight="fill" />
                        See what's new
                    </Link>
                </div>
                <div className="header-image">
                    <img src="https://ableton-production.imgix.net/live/creation-space-front-10.jpg?auto=compress%2Cformat&w=3000" alt="" />
                </div>
            </div>

            <div className="try-live">
                <div className="try-live-header">
                    <Link>
                        Try Live 11 free for 30 days
                        <CaretRight size={20} />
                    </Link>
                    <span>The Live 11 Suite trial includes all the features of the full version, including saving and exporting. You can use it alongside your current version of Live.</span>
                </div>

                <div className="try-live-features">
                    <h2>Explore the features in Live 11:</h2>
                    <div>
                        <div>
                            <img src="https://ableton-production.imgix.net/live/jump-nav-comping.jpg" alt="" />
                        </div>
                        <div>
                            <img src="https://ableton-production.imgix.net/live/jump-nav-comping.jpg" alt="" />
                        </div>
                        <div>
                            <img src="https://ableton-production.imgix.net/live/jump-nav-comping.jpg" alt="" />
                        </div>
                        <div>
                            <img src="https://ableton-production.imgix.net/live/jump-nav-comping.jpg" alt="" />
                        </div>
                        <div>
                            <img src="https://ableton-production.imgix.net/live/jump-nav-comping.jpg" alt="" />
                        </div>
                        <div>
                            <img src="https://ableton-production.imgix.net/live/jump-nav-comping.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="perfect-take">
                <div>
                    <h2>Create your perfect take</h2>
                    <div className="perfect-take-header">
                        <a href="https://www.youtube.com/watch?v=StDHuDdDANc" target="_blank">
                            <figure>
                                <img src="https://ableton-production.imgix.net/live/poster-comping.jpg?auto=compress%2Cformat&w=1680" alt="" />
                                <figcaption>
                                    Artist records and edits multiple takes of her voice and a MIDI keyboard using comping
                                </figcaption>
                            </figure>
                        </a>
                    </div>

                    <div className="perfect-take-text">
                        <div>
                            <div>
                                <h2>Take recording and comping</h2>
                                <p>
                                    Live organizes multiple passes of an audio or MIDI performance into individual takes. Pick the best moments of each performance and combine them to create your perfect take. Or approach sound design in a new way by splicing together random samples from your library.
                                </p>
                            </div>
                            <div>
                                <h2>Linked-Track Editing</h2>
                                <p>
                                    Link two or more tracks to edit their content simultaneously. This makes editing multi-tracked instruments or performances with multiple musicians easy and fast whilst keeping everything in time across tracks. This feature also works for MIDI tracks.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default Live;