import "../sass/live.css";
import { Link } from "react-router-dom";
import {
  PlayCircle,
  CaretRight,
  Plus,
  Minus,
  Play,
  Pause,
} from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

const Live = () => {
  const [elementOneVisible, setElementOneVisible] = useState(false);
  const toggleElementOne = () => {
    setElementOneVisible(!elementOneVisible);
  };

  const [elementTwoVisible, setElementTwoVisible] = useState(false);
  const toggleElementTwo = () => {
    setElementTwoVisible(!elementTwoVisible);
  };

  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isPlaying3, setIsPlaying3] = useState(false);
  const [isPlaying4, setIsPlaying4] = useState(false);
  const [isPlaying5, setIsPlaying5] = useState(false);
  const [isPlaying6, setIsPlaying6] = useState(false);
  const [isPlaying7, setIsPlaying7] = useState(false);
  const [isPlaying8, setIsPlaying8] = useState(false);
  const [isPlaying9, setIsPlaying9] = useState(false);

  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  const audioRef3 = useRef(null);
  const audioRef4 = useRef(null);
  const audioRef5 = useRef(null);
  const audioRef6 = useRef(null);
  const audioRef7 = useRef(null);
  const audioRef8 = useRef(null);
  const audioRef9 = useRef(null);

  function handlePlay1() {
    const nextIsPlaying = !isPlaying1;
    setIsPlaying1(nextIsPlaying);

    if (nextIsPlaying) {
      audioRef1.current.play();
    } else {
      audioRef1.current.pause();
    }
  }

  function handlePlay2() {
    const nextIsPlaying = !isPlaying2;
    setIsPlaying2(nextIsPlaying);

    if (nextIsPlaying) {
      audioRef2.current.play();
    } else {
      audioRef2.current.pause();
    }
  }

  function handlePlay3() {
    const nextIsPlaying = !isPlaying3;
    setIsPlaying3(nextIsPlaying);

    if (nextIsPlaying) {
      audioRef3.current.play();
    } else {
      audioRef3.current.pause();
    }
  }

  function handlePlay4() {
    const nextIsPlaying = !isPlaying4;
    setIsPlaying4(nextIsPlaying);

    if (nextIsPlaying) {
      audioRef4.current.play();
    } else {
      audioRef4.current.pause();
    }
  }

  function handlePlay5() {
    const nextIsPlaying = !isPlaying5;
    setIsPlaying5(nextIsPlaying);

    if (nextIsPlaying) {
      audioRef5.current.play();
    } else {
      audioRef5.current.pause();
    }
  }

  function handlePlay6() {
    const nextIsPlaying = !isPlaying6;
    setIsPlaying6(nextIsPlaying);

    if (nextIsPlaying) {
      audioRef6.current.play();
    } else {
      audioRef6.current.pause();
    }
  }

  function handlePlay7() {
    const nextIsPlaying = !isPlaying7;
    setIsPlaying7(nextIsPlaying);

    if (nextIsPlaying) {
      audioRef7.current.play();
    } else {
      audioRef7.current.pause();
    }
  }

  function handlePlay8() {
    const nextIsPlaying = !isPlaying8;
    setIsPlaying8(nextIsPlaying);

    if (nextIsPlaying) {
      audioRef8.current.play();
    } else {
      audioRef8.current.pause();
    }
  }

  function handlePlay9() {
    const nextIsPlaying = !isPlaying9;
    setIsPlaying9(nextIsPlaying);

    if (nextIsPlaying) {
      audioRef9.current.play();
    } else {
      audioRef9.current.pause();
    }
  }

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
                <source
                  src="https://cdn-resources.ableton.com/resources/videos/live/l12_tour_header_desktop.mp4"
                  type="video/mp4"
                />
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
            <h2>
              Whatever music you make, and whoever you are as a music maker,
              there's always more to explore in Live. See how you can go further
              with Live 12.
            </h2>
          </div>

          <div className="find-live-video">
            <a
              href="https://www.youtube.com/watch?v=QFCV6EkqRQs"
              target="_blank"
            >
              <figure>
                <div>
                  <img
                    src="https://ableton-production.imgix.net/components/text-beside-media/001882750010-web-sRGB.jpg?auto=compress%2Cformat&w=1680"
                    alt=""
                  />
                  <span>
                    <PlayCircle size={200} weight="fill" />
                  </span>
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
            <a
              href="https://www.youtube.com/watch?v=z7kjcMvMr3M"
              target="_blank"
            >
              <figure>
                <div>
                  <img
                    src="https://ableton-production.imgix.net/components/text-beside-media/web-play-freely-header-sRGB.jpg?auto=compress%2Cformat&w=1680"
                    alt=""
                  />
                  <span>
                    <PlayCircle size={200} weight="fill" />
                  </span>
                </div>
                <figcaption>A demonstration of the new MIDI Tools</figcaption>
              </figure>
            </a>
          </div>

          <div className="ideas-text">
            <div className="live-options-features">
              <div>
                <h2>Reshape MIDI patterns</h2>
                <p>
                  Apply a variety of simple or complex variations to your MIDI
                  clips with new MIDI Transformations. Add ornaments and
                  articulations, draw acceleration and deceleration curves,
                  connect successive notes and chords, simulate the strum of a
                  guitar, and more.
                </p>
              </div>
              <div>
                <h2>Generate inspiration</h2>
                <p>
                  Conjure up melodies, chords and rhythms with the help of new
                  MIDI Generators. Set constraints and let your chosen Generator
                  create playful and original ideas for you to develop and turn
                  into your own.
                </p>
              </div>
            </div>
          </div>

          <div className="ideas2">
            <div>
              <div className="ideas2-image">
                <img
                  src="https://ableton-production.imgix.net/components/text-beside-media/web-mfl-midi-tools.png?auto=compress%2Cformat&w=1600"
                  alt=""
                />
              </div>
              <div className="ideas2-text">
                <h2>Do more with Max for Live</h2>
                <p>
                  Try out additional Max for Live Transformations and Generators
                  that give you deeper ways of working with MIDI, or go even
                  further by building new ones.
                </p>
              </div>
            </div>
          </div>

          <div className="ideas3">
            <div className="ideas3-text">
              <div>
                <h2>Embrace and explore tunings</h2>
                <p>
                  Follow your preferred tuning systems or try different ones
                  more easily. Work outside the 12-tone equal temperament
                  system, and access tunings with Live's devices as well as any
                  MPE-capable plugin.
                </p>
              </div>
            </div>
            <div className="ideas3-video">
              <a
                href="https://www.youtube.com/watch?v=5AcHM_FtkiM"
                target="_blank"
              >
                <figure>
                  <div>
                    <img
                      src="https://ableton-production.imgix.net/components/text-beside-media/web-tunings-img-sRGB.jpg?auto=compress%2Cformat&w=1680"
                      alt=""
                    />
                    <span>
                      <PlayCircle size={200} weight="fill" />
                    </span>
                  </div>
                  <figcaption>A demonstration of the new MIDI Tools</figcaption>
                </figure>
              </a>
            </div>
          </div>

          <div className="ideas3">
            <div className="ideas3-video">
              <a
                href="https://www.youtube.com/watch?v=u6IpJYpN48A"
                target="_blank"
              >
                <figure>
                  <div>
                    <img
                      src="https://ableton-production.imgix.net/components/text-beside-media/web-midi-tools-img-sRGB-2.jpg?auto=compress%2Cformat&w=1680"
                      alt=""
                    />
                    <span>
                      <PlayCircle size={200} weight="fill" />
                    </span>
                  </div>
                  <figcaption>A demonstration of the new MIDI Tools</figcaption>
                </figure>
              </a>
            </div>
            <div className="ideas3-text">
              <div>
                <h2>Stay in key</h2>
                <p>
                  Choose a scale in Live's Control Bar to see its notes in any
                  MIDI clip you create. Then transform or generate ideas within
                  the confines of the selected scale, or sync the scale of MIDI
                  devices and instruments to the clip being played.
                </p>
              </div>
            </div>
          </div>

          <div className="ideas2">
            <div>
              <div className="ideas2-image">
                <img
                  src="https://ableton-production.imgix.net/components/text-beside-media/web-midi-editing.png?auto=compress%2Cformat&w=1600"
                  alt=""
                />
              </div>
              <div className="ideas2-text">
                <h2>Edit MIDI more easily</h2>
                <p>
                  Use keyboard and mouse operations to edit MIDI in new ways.
                  Split a note in two, or chop it into several parts. Select a
                  set of notes and join them together, or make them fill a
                  selected time range. And access more tools from the Note
                  Utilities panel on the left.
                </p>
              </div>
            </div>
          </div>
          <div className="ideas2">
            <div>
              <div className="ideas2-image">
                <img
                  src="https://ableton-production.imgix.net/components/text-beside-media/web-mfl-modulation.png?auto=compress%2Cformat&w=1600"
                  alt=""
                />
              </div>
              <div className="ideas2-text">
                <h2>Modulate more flexibly</h2>
                <p>
                  Stay in control of a parameter, even after it's been mapped to
                  a modulation source; Max for Live devices like LFO, Shaper and
                  Envelope Follower now let you freely adjust a destination
                  that's being modulated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="surprise">
        <div className="surprise-heading">
          <h2>Surprise yourself with the sounds you create</h2>
          <img
            src="https://ableton-production.imgix.net/components/text-beside-media/001882720001-web-1610.jpg?auto=compress%2Cformat&w=1920"
            alt=""
          />
        </div>

        <div className="lose">
          <h2>Lose yourself in Meld</h2>
          <p>
            Live's new MPE-capable synthesizer is designed for sound variety,
            playfulness and character. Equipped with twin oscillators and an
            extensive modulation matrix, Meld excels at textural soundscapes,
            harmonic and atonal sounds, and rhythmic drones.
          </p>
          <figure>
            <img
              src="https://ableton-production.imgix.net/devices/screenshots/meld-sub-city%402x.png?fm=png"
              alt=""
            />
            <figcaption>
              Program Meld's dual oscillators with dedicated LFOs and an
              extensive modulation matrix
            </figcaption>
          </figure>
          <figure>
            <img
              src="https://ableton-production.imgix.net/devices/screenshots/meld-carbon-strings%402x.png?fm=png"
              alt=""
            />
            <figcaption>
              Each of Meld's oscillator presets comes with two Engines
              parameters, carefully chosen for maximum sound design versatility
            </figcaption>
          </figure>
        </div>

        <div className="add-get">
          <h2>Add color with Roar</h2>
          <p>
            Bathe your sound in subtle warmth - or break it down with wild
            distortion. Live's new coloring and saturation device is made up of
            three saturation stages for serial, parallel or even mid/side and
            multiband configurations, and its built-in compressor and feedback
            routing give you even more ways to shape your sound.
          </p>
          <figure className="first">
            <span>
              <audio
                ref={audioRef1}
                onPlay={() => setIsPlaying1(true)}
                onPause={() => setIsPlaying1(false)}
              >
                <source
                  src="https://cdn-resources.ableton.com/resources/sounds/devices/bassline.mp4"
                  type="audio/mp4 "
                />
              </audio>
            </span>
            <div onClick={handlePlay1}>
              {isPlaying1 ? (
                <Pause size={15} weight="fill" />
              ) : (
                <Play size={15} weight="fill" />
              )}
            </div>
            <img
              src="https://ableton-production.imgix.net/devices/screenshots/roar-bassline%402x.png?fm=png"
              alt=""
            />
            <figcaption>
              Apply heavy distortion to a specific frequency range with Roar's
              multiband configuration
            </figcaption>
          </figure>
          <figure className="second">
            <span>
              <audio
                ref={audioRef2}
                onPlay={() => setIsPlaying2(true)}
                onPause={() => setIsPlaying2(false)}
              >
                <source
                  src="https://cdn-resources.ableton.com/resources/sounds/devices/guitar.mp4"
                  type="audio/mp4 "
                />
              </audio>
            </span>
            <div onClick={handlePlay2}>
              {isPlaying2 ? (
                <Pause size={15} weight="fill" />
              ) : (
                <Play size={15} weight="fill" />
              )}
            </div>
            <img
              src="https://ableton-production.imgix.net/devices/screenshots/roar-guitar%402x.png?fm=png"
              alt=""
            />
            <figcaption>
              Modulate your sound with Roar's Envelope Follower
            </figcaption>
          </figure>

          <button onClick={toggleElementOne}>
            {elementOneVisible ? (
              <Minus size={25} weight="bold" />
            ) : (
              <Plus size={25} weight="bold" />
            )}
            {elementOneVisible
              ? "Show less Roar sounds"
              : "Discover more Roar sounds"}
          </button>

          {elementOneVisible && (
            <div className="hidden">
              <figure className="second">
                <span>
                  <audio
                    ref={audioRef3}
                    onPlay={() => setIsPlaying3(true)}
                    onPause={() => setIsPlaying3(false)}
                  >
                    <source
                      src="https://cdn-resources.ableton.com/resources/sounds/devices/beat.mp4"
                      type="audio/mp4 "
                    />
                  </audio>
                </span>
                <div onClick={handlePlay3}>
                  {isPlaying3 ? (
                    <Pause size={15} weight="fill" />
                  ) : (
                    <Play size={15} weight="fill" />
                  )}
                </div>
                <img
                  src="https://ableton-production.imgix.net/devices/screenshots/roar-beat%402x.png?fm=png"
                  alt=""
                />
                <figcaption>
                  Process a beat in Serial mode to add two separate layers of
                  saturation, one after the other
                </figcaption>
              </figure>
              <figure className="second">
                <span>
                  <audio
                    ref={audioRef4}
                    onPlay={() => setIsPlaying4(true)}
                    onPause={() => setIsPlaying4(false)}
                  >
                    <source
                      src="https://cdn-resources.ableton.com/resources/sounds/devices/synth.mp4"
                      type="audio/mp4 "
                    />
                  </audio>
                </span>
                <div onClick={handlePlay4}>
                  {isPlaying4 ? (
                    <Pause size={15} weight="fill" />
                  ) : (
                    <Play size={15} weight="fill" />
                  )}
                </div>
                <img
                  src="https://ableton-production.imgix.net/devices/screenshots/roar-synth%402x.png?fm=png"
                  alt=""
                />
                <figcaption>
                  See what happens when you use Roar's Feedback panel to distort
                  your signal further
                </figcaption>
              </figure>
            </div>
          )}
        </div>

        <div className="add-get">
          <h2>Get expressive with granular synthesis</h2>
          <p>
            Granulator III, the latest version of Robert Henke's granular
            synthesizer, introduces expressive control that lets you bend notes
            and add vibrato and glissando. Plus, you can now capture audio in
            real time and start manipulating it immediately.
          </p>
          <figure className="second">
            <span>
              <audio
                ref={audioRef5}
                onPlay={() => setIsPlaying5(true)}
                onPause={() => setIsPlaying5(false)}
              >
                <source
                  src="https://cdn-resources.ableton.com/resources/sounds/devices/dream-stuff.mp4"
                  type="audio/mp4 "
                />
              </audio>
            </span>
            <div onClick={handlePlay5}>
              {isPlaying5 ? (
                <Pause size={15} weight="fill" />
              ) : (
                <Play size={15} weight="fill" />
              )}
            </div>
            <img
              src="https://ableton-production.imgix.net/devices/screenshots/g3-piano%402x.png?fm=png"
              alt=""
            />
            <figcaption>
              Granulator III's Cloud playback mode excels at layered pad and
              drone sounds
            </figcaption>
          </figure>
          <figure className="second">
            <span>
              <audio
                ref={audioRef6}
                onPlay={() => setIsPlaying6(true)}
                onPause={() => setIsPlaying6(false)}
              >
                <source
                  src="https://cdn-resources.ableton.com/resources/sounds/devices/buzz-string.mp4"
                  type="audio/mp4 "
                />
              </audio>
            </span>
            <div onClick={handlePlay6}>
              {isPlaying6 ? (
                <Pause size={15} weight="fill" />
              ) : (
                <Play size={15} weight="fill" />
              )}
            </div>
            <img
              src="https://ableton-production.imgix.net/devices/screenshots/g3-strings%402x.png?fm=png"
              alt=""
            />
            <figcaption>
              In Loop mode, grains play one after the other without overlapping
            </figcaption>
          </figure>

          <button onClick={toggleElementTwo}>
            {elementTwoVisible ? (
              <Minus size={25} weight="bold" />
            ) : (
              <Plus size={25} weight="bold" />
            )}
            {elementTwoVisible
              ? "Show less Granulator III sounds"
              : "Discover more Granulator III sounds"}
          </button>

          {elementTwoVisible && (
            <div className="hidden">
              <figure className="second">
                <span>
                  <audio
                    ref={audioRef7}
                    onPlay={() => setIsPlaying7(true)}
                    onPause={() => setIsPlaying7(false)}
                  >
                    <source
                      src="https://cdn-resources.ableton.com/resources/sounds/devices/voices.mp4"
                      type="audio/mp4 "
                    />
                  </audio>
                </span>
                <div onClick={handlePlay7}>
                  {isPlaying7 ? (
                    <Pause size={15} weight="fill" />
                  ) : (
                    <Play size={15} weight="fill" />
                  )}
                </div>
                <img
                  src="https://ableton-production.imgix.net/devices/screenshots/g3-voices%402x.png?fm=png"
                  alt=""
                />
                <figcaption>
                  In Classic mode, grains overlap and fade into each other
                </figcaption>
              </figure>
              <figure className="second">
                <span>
                  <audio
                    ref={audioRef8}
                    onPlay={() => setIsPlaying8(true)}
                    onPause={() => setIsPlaying8(false)}
                  >
                    <source
                      src="https://cdn-resources.ableton.com/resources/sounds/devices/abstract.mp4"
                      type="audio/mp4 "
                    />
                  </audio>
                </span>
                <div onClick={handlePlay8}>
                  {isPlaying8 ? (
                    <Pause size={15} weight="fill" />
                  ) : (
                    <Play size={15} weight="fill" />
                  )}
                </div>
                <img
                  src="https://ableton-production.imgix.net/devices/screenshots/g3-abstract%402x.png?fm=png"
                  alt=""
                />
                <figcaption>
                  Create wild and unpredictable sounds with just a handful of
                  intuitive controls
                </figcaption>
              </figure>
            </div>
          )}
        </div>

        <div className="final">
          <div className="final-container">
            <h2>Lost and Found</h2>
            <div className="final-image">
              <img
                src="https://ableton-production.imgix.net/packs/covers/lost-and-found.jpg?auto=compress%2Cformat&w=+1800"
                alt=""
              />
              <span>
                <audio
                  ref={audioRef9}
                  onPlay={() => setIsPlaying9(true)}
                  onPause={() => setIsPlaying9(false)}
                >
                  <source
                    src="https://cdn-resources.ableton.com/resources/sounds/packs/l-f-medley.mp4"
                    type="audio/mp4 "
                  />
                </audio>
              </span>
              <div className="final-button" onClick={handlePlay9}>
                {isPlaying9 ? (
                  <Pause size={15} weight="fill" />
                ) : (
                  <Play size={15} weight="fill" />
                )}
              </div>
            </div>
            <p>
              A collection of sounds fashioned from unusual materials,
              percussive trinkets, unique foley recordings and expressive
              objects to infuse your productions with character and
              authenticity.
            </p>
          </div>
          <div className="final-container">
            <h2>Performance Pack</h2>
            <div className="final-image">
              <img
                src="https://ableton-production.imgix.net/packs/covers/performance-pack.jpg?auto=compress%2Cformat&w=+1800"
                alt=""
              />
            </div>
            <p>
              A set of innovative devices from Iftah that enrich the experience
              of performing with Live. Capture snapshots of your sets and
              redeploy them later, create microperformances with multilayered
              automation, play loops in Arrangement View or prearrange the
              structure of a performance in real time.
            </p>
          </div>
        </div>
      </section>

      <article>
        <h2>Work more intuitively</h2>

        <div className="article-first">
          <div>
            <img
              src="https://ableton-production.imgix.net/components/text-beside-media/web-mixer-improvements.png?auto=compress%2Cformat&w=1600"
              alt=""
            />
            <div>
              <h3>Set up to stay focused</h3>
              <p>
                Use Live's Mixer in Arrangement View to get more information and
                control without moving to Session View and breaking the flow.
                Toggle the visibility of each Mixer section to fit your needs,
                and benefit from improved readability and feedback.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h3>See everything you need</h3>
              <p>
                Take advantage of Live's new Stacked Detail Views to see more of
                what your track's doing at a glance. Display the Clip Editor or
                automation and device parameters at the same time as the Device
                View, so you can work without repeatedly switching between
                views.
              </p>
            </div>
            <img
              src="https://ableton-production.imgix.net/components/text-beside-media/web-stacked-views.png?auto=compress%2Cformat&w=1600"
              alt=""
            />
          </div>
        </div>

        <div className="article-second">
          <img
            src="https://ableton-production.imgix.net/components/text-beside-media/web-browser-lavender-light.png?auto=compress%2Cformat&w=1920"
            alt=""
          />
          <div className="inner-second">
            <div>
              <h3>Search with tags</h3>
              <p>
                Make sound selection easier with the help of Live's new tagging
                system. Sound content now comes labeled in the Browser with
                instrument categories and helpful musical descriptors - and if
                you want more tags, you can create your own.
              </p>
            </div>
            <div>
              <h3>Browse better</h3>
              <p>
                Get search results that cover the whole library, rather than
                being confined to the Browser's built-in categories. And explore
                your search history to see sounds or categories you've
                previously looked for.
              </p>
            </div>
          </div>
        </div>

        <h2>Sound Similarity Search</h2>

        <div className="article-third">
          <a href="https://www.youtube.com/watch?v=XYJhDWJvEms" target="_blank">
            <figure>
              <div>
                <img
                  src="https://ableton-production.imgix.net/components/text-beside-media/web-similar-sounds-lavender-light.png?auto=compress%2Cformat&w=1680"
                  alt=""
                />
                <span>
                  <PlayCircle size={200} weight="fill" />
                </span>
              </div>
              <figcaption>
                See how Sound Similarity helps find matching sounds
              </figcaption>
            </figure>
          </a>
          <div className="inner-second">
            <div>
              <h3>Find sounds that fit</h3>
              <p>
                Try Live's new Sound Similarity Search to find sounds with
                similar characteristics to the one you're working on. Start with
                a sample and tell Live's browser to find comparable sounds and
                instrument presets, with the help of a neural network.
              </p>
            </div>
            <div>
              <h3>Instantly replace drums</h3>
              <p>
                Swap all the samples in your Drum Rack for similar ones to
                quickly try out new percussive textures - like a drum machine
                with seemingly-infinite kits.
              </p>
            </div>
          </div>
        </div>
      </article>

      <div className="all-features">
        <div className="features-first">
          <Link>
            See all features in Live 12
            <CaretRight size={25} />
          </Link>
        </div>
        <div className="features-second">
          <h3>Save 20% on Live 11 now and upgrade to Live 12 for free</h3>
          <Link>
            Visit the Shop
            <CaretRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Live;
