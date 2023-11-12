import "../sass/live.css";
import { Link } from "react-router-dom";
import { PlayCircle, CaretRight, Plus } from "@phosphor-icons/react";

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

            <div className="live-options">
                <div>
                    <div className="live-options-heading">
                        <h2>Create your perfect take</h2>
                    </div>

                    <div className="live-options-video">
                        <a href="https://www.youtube.com/watch?v=StDHuDdDANc" target="_blank">
                            <figure>
                                <img src="https://ableton-production.imgix.net/live/poster-comping.jpg?auto=compress%2Cformat&w=1680" alt="" />
                                <figcaption>
                                    Artist records and edits multiple takes of her voice and a MIDI keyboard using comping
                                </figcaption>
                            </figure>
                        </a>
                    </div>

                    <div className="live-options-text">
                        <div className="live-options-features">
                            <div >
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

            <div className="live-options">
                <div>
                    <div className="live-options-heading">
                        <h2>Add more feeling to your music</h2>
                    </div>

                    <div className="live-options-video">
                        <a href="https://www.youtube.com/watch?v=OP6EKAggYyE" target="_blank">
                            <figure>
                                <img src="https://ableton-production.imgix.net/live/poster-mpe.jpg?auto=compress%2Cformat&w=1680" alt="" />
                                <figcaption>
                                Artist demonstrates MPE using a Roli Seaboard, Push and Live 11's new Note Expression View
                                </figcaption>
                            </figure>
                        </a>
                    </div>

                    <div className="live-options-text">
                        <div className="live-options-features">
                            <div >
                                <h2>Use your MPE-capable controller</h2>
                                <p>
                                    Plug in your MPE-capable controller and immediately add bends, slides and pressure for each individual note in a chord. Add subtle expression variations, morph between chords and create evolving sonic textures.
                                </p>
                            </div>
                            <div>
                                <h2>What is MPE?</h2>
                                <p>
                                    MPE stands for MIDI Polyphonic Expression. This way of using MIDI allows MPE-capable devices to control multiple parameters of every note in real time for more expressive instrumental performances.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="learn-more">
                <button>
                    <Plus size={25} weight="bold" />
                    Learn more
                </button>
            </div>

            <div className="learn-more-text">
                <div>
                    <img src="https://ableton-production.imgix.net/live/screenshot-note-expression-view.jpg?auto=compress%2Cformat&w=1024" alt="" />
                    <div>
                        <h2>Note Expression View</h2>
                        <p>
                            Edit the pitch, slide and pressure envelopes of each note to refine the expression of your takes. Or take your sound design further by sequencing polyphonic sound variations.
                        </p>
                    </div>
                </div>
                <div>
                    <img src="https://ableton-production.imgix.net/live/screenshot-expressive-sounds.jpg?auto=compress%2Cformat&w=1024" alt="" />
                    <div>
                        <h2>More expressive sounds included</h2>
                        <p>
                            Wavetable, Sampler and Arpeggiator are all updated to support MPE. And Live comes with MPE presets for each device that bring new dimensions of interaction and playability to your sound. The new expressive possibilities also enable polyphonic aftertouch on Push.
                        </p>
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