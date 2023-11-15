import "../sass/push.css";
import { Link } from "react-router-dom";
import { PlayCircle } from "@phosphor-icons/react";
import { useEffect } from "react";

const Push = () => {

    useEffect(() => {
        document.title = "Push - a standalone expressive instrument | Ableton";
    }, []);

    return (
        <div className="push">
            <nav className="push-nav">
                <Link>Overview</Link>
                <Link>Tech specs</Link>
                <Link>Learn Push</Link>
                <Link>Buy now</Link>
            </nav>

            <div>
                <div className="header-video">
                    <figure>
                        <div>
                            <video autoPlay controls loop>
                                <source src="https://cdn-resources.ableton.com/resources/videos/push/push-3/tour_header_desktop.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <figcaption>
                            <h2>Push</h2>
                            <p>An expressive standalone instrument</p>
                            <button>Buy now</button>
                        </figcaption>
                    </figure>
                </div>
            </div>

            <div className="focus">
                <div className="focus-header">
                    <h2>Focus and feel</h2>
                    <p>
                        Push gives you independence from your computer so you can be fully in the moment with your music. Connect your gear. Sculpt your sound. Play in a style that's recognizably yours. An upgradeable instrument and an ever-evolving bond with Ableton Live, Push is designed to sit at the heart of your setup for years to come.
                    </p>
                </div>

                <div className="focus2">
                    <div>
                        <div className="focus2-image">
                            <video src="https://cdn-resources.ableton.com/resources/videos/push/push-3/p3_faag_mpe_iy.mp4" autoPlay controls loop></video>
                        </div>
                        <div className="focus2-text">
                            <h2>MPE-enabled pads</h2>
                            <p>
                                Shape your sound with pads that respond to the slightest movement of your fingers. Bend, slide and shift between different notes, sounds and articulations.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="focus2">
                    <div>
                        <div className="focus2-image">
                            <video src="https://cdn-resources.ableton.com/resources/videos/push/push-3/p3_faag_standalone_cofo.mp4" autoPlay controls loop></video>
                        </div>
                        <div className="focus2-text">
                            <h2>Standalone playability</h2>
                            <p>
                                Push invites you to disconnect and be fully in the moment with your music. Send your Live sets to Push to work without a computer, then back again.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="focus2">
                    <div>
                        <div className="focus2-image">
                            <video src="https://cdn-resources.ableton.com/resources/videos/push/push-3/p3_faag_audio_interface_th.mp4" autoPlay controls loop></video>
                        </div>
                        <div className="focus2-text">
                            <h2>Built-in audio interface</h2>
                            <p>
                                Plug your instruments into Push's own audio interface to record straight into your set. Plus, send CV and gate signals to your modular setup.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="focus3">
                    <div>
                        <a href="https://www.youtube.com/watch?v=qcGUgp6yo_k" target="_blank">
                            <img src="https://ableton-production.imgix.net/components/text-beside-media/Hero-001a_Thumbnail_4000x2250.jpg?auto=compress%2Cformat&w=1462" alt="" />
                            <span><PlayCircle size={150} weight="fill" /></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Push;