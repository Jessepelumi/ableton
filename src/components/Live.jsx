import "../sass/live.css";
import { Link } from "react-router-dom";
import { PlayCircle, CaretRight, Plus, Minus } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const Live = () => {

    const [open, setOpen] = useState(false);
    const icon = open ? (<Minus size={25} weight="bold" />) : (<Plus size={25} weight="bold" />);
    const firstButtonText = open ? ("Show less Roar sounds") : ("Discover more Roar sounds");
    const secondButtonText = open ? ("Show less Granulator III sounds") : ("Discover more Granulator III sounds");

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

            <header>
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
            </header>

            <section className="find-live">
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
            </section>

            <section className="ideas">
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
            </section>

            <section className="surprise">

                <div className="surprise-heading">
                    <h2>Surprise yourself with the sounds you create</h2>
                    <img src="https://ableton-production.imgix.net/components/text-beside-media/001882720001-web-1610.jpg?auto=compress%2Cformat&w=1920" alt="" />
                </div>

                <div className="lose">
                    <h2>Lose yourself in Meld</h2>
                    <p>
                        Live's new MPE-capable synthesizer is designed for sound variety, playfulness and character. Equipped with twin oscillators and an extensive modulation matrix, Meld excels at textural soundscapes, harmonic and atonal sounds, and rhythmic drones.
                    </p>
                    <figure>
                        <img src="https://ableton-production.imgix.net/devices/screenshots/meld-sub-city%402x.png?fm=png" alt="" />
                        <figcaption>
                            Program Meld's dual oscillators with dedicated LFOs and an extensive modulation matrix
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="https://ableton-production.imgix.net/devices/screenshots/meld-carbon-strings%402x.png?fm=png" alt="" />
                        <figcaption>
                            Each of Meld's oscillator presets comes with two Engines parameters, carefully chosen for maximum sound design versatility
                        </figcaption>
                    </figure>
                </div>

                <div className="add-color">
                    <h2>Add color with Roar</h2>
                    <p>
                        Bathe your sound in subtle warmth - or break it down with wild distortion. Live's new coloring and saturation device is made up of three saturation stages for serial, parallel or even mid/side and multiband configurations, and its built-in compressor and feedback routing give you even more ways to shape your sound.
                    </p>
                    <figure className="first">
                        <img src="https://ableton-production.imgix.net/devices/screenshots/roar-bassline%402x.png?fm=png" alt="" />
                        <figcaption>
                            Apply heavy distortion to a specific frequency range with Roar's multiband configuration
                        </figcaption>
                    </figure>
                    <figure className="second">
                        <img src="https://ableton-production.imgix.net/devices/screenshots/roar-guitar%402x.png?fm=png" alt="" />
                        <figcaption>
                            Modulate your sound with Roar's Envelope Follower
                        </figcaption>
                    </figure>

                    <button onClick={() => setOpen(!open)}>
                        {icon}
                        {firstButtonText}
                    </button>

                    {open && (
                        <div className="hidden">
                            <figure className="second">
                                <img src="https://ableton-production.imgix.net/devices/screenshots/roar-beat%402x.png?fm=png" alt="" />
                                <figcaption>
                                    Apply heavy distortion to a specific frequency range with Roar's multiband configuration
                                </figcaption>
                            </figure>
                            <figure className="second">
                                <img src="https://ableton-production.imgix.net/devices/screenshots/roar-synth%402x.png?fm=png" alt="" />
                                <figcaption>
                                    Apply heavy distortion to a specific frequency range with Roar's multiband configuration
                                </figcaption>
                            </figure>
                        </div>
                    )}
                </div>

                <div className="add-color">
                    <h2>Get expressive with granular synthesis</h2>
                    <p>
                        Granulator III, the latest version of Robert Henke's granular synthesizer, introduces expressive control that lets you bend notes and add vibrato and glissando. Plus, you can now capture audio in real time and start manipulating it immediately.
                    </p>
                    <figure className="second">
                        <img src="https://ableton-production.imgix.net/devices/screenshots/g3-piano%402x.png?fm=png" alt="" />
                        <figcaption>
                            Granulator III's Cloud playback mode excels at layered pad and drone sounds
                        </figcaption>
                    </figure>
                    <figure className="second">
                        <img src="https://ableton-production.imgix.net/devices/screenshots/g3-strings%402x.png?fm=png" alt="" />
                        <figcaption>
                            In Loop mode, grains play one after the other without overlapping
                        </figcaption>
                    </figure>

                    <button onClick={() => setOpen(!open)}>
                        {icon}
                        {secondButtonText}
                    </button>

                    {open && (
                        <div className="hidden">
                            <figure className="second">
                                <img src="https://ableton-production.imgix.net/devices/screenshots/g3-voices%402x.png?fm=png" alt="" />
                                <figcaption>
                                    In Classic mode, grains overlap and fade into each other
                                </figcaption>
                            </figure>
                            <figure className="second">
                                <img src="https://ableton-production.imgix.net/devices/screenshots/g3-abstract%402x.png?fm=png" alt="" />
                                <figcaption>
                                    Create wild and unpredictable sounds with just a handful of intuitive controls
                                </figcaption>
                            </figure>
                        </div>
                    )}
                </div>


            </section>



        </div>
    );
}
 
export default Live;