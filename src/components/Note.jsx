import "../sass/note.css";
import { useEffect } from "react";
import { PlayCircle, Plus } from "@phosphor-icons/react";

const Note = () => {
  useEffect(() => {
    document.title = "Note - an iOS app for forming musical ideas | Ableton";
  }, []);

  const faqs = [
    {
      id: 1,
      title: "Is Note available for Android?",
      content: "No, Note is only available for iPhone and iPad.",
    },
    {
      id: 2,
      title: "Will new features be added to Note?",
      content: "No, Note is only available for iPhone and iPad.",
    },
    {
      id: 3,
      title: "Do I need a version of Ableton Live to use Note?",
      content: "No, Note is only available for iPhone and iPad.",
    },
    {
      id: 4,
      title: "How can I transfer my projects from Note to Live?",
      content: "No, Note is only available for iPhone and iPad.",
    },
    {
      id: 5,
      title: "What are the system requirements for my phone?",
      content: "No, Note is only available for iPhone and iPad.",
    },
    {
      id: 6,
      title: "Will new features be added to note?",
      content: "No, Note is only available for iPhone and iPad.",
    },
  ];

  return (
    <div className="note">
      <header className="note-header">
        <div className="header-video">
          <figure>
            <div>
              <video autoPlay controls loop>
                <source
                  src="https://cdn-resources.ableton.com/resources/videos/note/header-desktop.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <figcaption>
              <h2>Note</h2>
              <p>A playable iOS app for forming musical ideas</p>
            </figcaption>
          </figure>
        </div>
      </header>

      <section className="section1">
        <div className="section1-text">
          <h2>Make new ideas a habit</h2>
          <p>
            Note is a place to start ideas, experiment with sounds and find
            direction. As part of your regular music-making routine, it can help
            you hone the skill of starting or ease into a creative headspace at
            the start of a session.
          </p>
        </div>
        <div className="section1-video">
          <div className="ideas3-video">
            <a href="https://youtu.be/smJZcWwJsOw" target="_blank">
              <figure>
                <div>
                  <img
                    src="https://ableton-production.imgix.net/tours/note/poster-intro-hero.jpg?auto=compress%2Cformat&w=1680"
                    alt=""
                  />
                  <span>
                    <PlayCircle size={200} weight="fill" />
                  </span>
                </div>
                <figcaption>
                  Generate ideas, play with sound, and find direction.
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
      </section>

      <section className="section2">
        <div className="ideas2">
          <div>
            <div className="ideas2-image">
              <img
                src="https://ableton-production.imgix.net/components/text-beside-media/web-mfl-modulation.png?auto=compress%2Cformat&w=1600"
                alt=""
              />
            </div>
            <div className="ideas2-text">
              <p>
                Get your idea out or play until you find one using Note’s drum
                kits, melodic instruments and synth sounds. Or create your own
                sound palette by recording the sounds around you into Note’s
                sampler instruments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section3">
        <div className="section3-image">
          <figure>
            <div>
              <img
                src="https://ableton-production.imgix.net/components/text-beside-media/Note_and_Ableton_Cloud.jpg?auto=compress%2Cformat&w=1920"
                alt=""
              />
            </div>
            <figcaption>Turn your sketches into songs</figcaption>
          </figure>
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
      </section>

      <aside>
        <div className="help">
          <h2>Help & Support</h2>
          <p>
            For help setting up Note and Cloud, to learn more about features and
            functions, or to find troubleshooting tips visit the Knowledge Base
            or read the Note manual.
          </p>
        </div>

        <div className="watch">
          <a href="https://youtu.be/smJZcWwJsOw" target="_blank">
            <figure>
              <div>
                <img
                  src="https://ableton-production.imgix.net/tours/note/poster-learn-note.jpg?auto=compress%2Cformat&w=340"
                  alt=""
                />
                <span>
                  <PlayCircle size={50} weight="fill" />
                </span>
              </div>
              <figcaption>
                Watch: Learn how to start your musical ideas in Note
              </figcaption>
            </figure>
          </a>
        </div>

        {faqs.map((faq) => (
          <div>
            <div>
                <span><Plus size={25} weight="bold" /></span>
                <h2>{faq.title}</h2>
            </div>
            <div>{faq.content}</div>
          </div>
        ))}
      </aside>
    </div>
  );
};

export default Note;
