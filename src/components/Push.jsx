import "../sass/push.css";
import { Link } from "react-router-dom";
import { PlayCircle, CaretRight } from "@phosphor-icons/react";
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

            <header>
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
            </header>

            <section className="focus">
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
            </section>

            <section className="expressive">
                <div className="expressive-first">
                    <h2>Expressive touch</h2>
                    <p>
                        Responsive MPE-enabled pads make Push an individually expressive instrument. Design multi-faceted sounds and perform them in your own style with the movement of your fingertips within each pad.
                    </p>
                </div>
                <div className="expressive-second">
                    <div className="first">
                        <Link></Link>
                        <Link></Link>
                        <Link></Link>
                        <Link></Link>
                        <Link></Link>
                    </div>
                    <div className="second"></div>
                </div>
            </section>

            <section className="setup">
                <div className="setup-first">
                    <h2>The heart of your setup</h2>
                    <p>
                        From sampling records to controlling modular jams, to making multi-track recordings of your band's rehearsal, Push works as a flexible creative hub. Built robustly for frequent travel between sessions and stages, and made to work with your trusty old gear and your newest toys, it'll see you through many changes in setup, sound and scene.
                    </p>
                </div>
                <div className="setup-video">
                    <video controls autoPlay loop>
                        <source src="https://cdn-resources.ableton.com/resources/videos/push/push-3/push_the_heart_of_your_setup.mp4" />
                    </video>
                </div>
            </section>

            <section className="intuitive">
                <div className="intuitive-first">
                    <h2>Intuitive design</h2>
                    <p>
                        Push's navigation is designed to get out of your way so you can stay focused on creating. Smoothly source sounds and devices from your library, and edit MIDI quickly using the jog wheel. See your session at a glance and your devices in detail on the large LCD display.
                    </p>
                    <Link>
                        See full specs
                        <CaretRight size={12} />
                    </Link>
                </div>
            </section>

            <section className="configurations">
                <div className="configurations-first">
                    <h2>One Push, two configurations</h2>
                    <p>
                        Set your Push up in a configuration that works for your budget and music-making needs. With a processor, battery and hard drive, Push functions as a standalone instrument. Without those components you need to connect Push to your computer to make music. You can add the standalone components later using the Upgrade Kit.
                    </p>
                    <Link>
                        See full comparison
                        <CaretRight size={12} />
                    </Link>
                </div>
                <div className="configurations-shop">
                    <div>
                        <img src="https://ableton-production.imgix.net/tours/push/push-3/One_Push_2_configurations_Square_Standalone_2046x2046.jpg?auto=compress%2Cformat&w=1200" alt="" />
                        <h2>Push (standalone)</h2>
                        <div className="shop-first">
                            <h3>Use Push as a standalone instrument</h3>
                            <p>64 expressive pads</p>
                            <p>Built-in audio interface</p>
                        </div>
                        <div className="shop-second">
                            <p>Intel 11th Gen Core™ i3-1115G4 processor with 8GB of RAM</p>
                            <p>Built-in lithium battery with up to 2.5 hours play time</p>
                            <p>Built-in 256GB SSD hard drive</p>
                        </div>

                        <div className="buy-now">
                            <h2>USD 1599</h2>
                            <button>Buy now</button>
                        </div>
                    </div>
                    <div>
                        <img src="https://ableton-production.imgix.net/tours/push/push-3/One_Push_2_configurations_Square_Tethered_2046x2046.jpg?auto=compress%2Cformat&w=1200" alt="" />
                        <h2>Push</h2>
                        <div className="shop-first">
                            <h3>Connect Push to your computer</h3>
                            <p>64 expressive pads</p>
                            <p>Built-in audio interface</p>
                        </div>
                        <div className="shop-second">
                            <p>Add a processor, battery and hard drive later using the <Link>Upgrade Kit <CaretRight size={12} /></Link></p>
                        </div>

                        <div className="buy-now">
                            <h2>USD 1599</h2>
                            <button>Buy now</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default Push;