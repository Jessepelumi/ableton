import "../sass/note.css";
import { useEffect, useState } from "react";
import { PlayCircle, Plus, Minus } from "@phosphor-icons/react";

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
      content: "Yes, new Note features are planned for the future. Keep an eye on this page, or subscribe to the Ableton newsletter to stay updated.",
    },
    {
      id: 3,
      title: "Do I need a version of Ableton Live to use Note?",
      content: "No, you can use Note on its own. If you want to take your Note projects further in Live you'll need an Ableton account and Live 11.2.5 or later. ",
      additional: "If you don't have Live already you can try it for free for 30 days. Learn about Ableton Live."
    },
    {
      id: 4,
      title: "How can I transfer my projects from Note to Live?",
      content: "Authorize Ableton Cloud in Note’s settings and in Live’s preferences, and your uploaded projects will automatically appear in Live’s browser. Learn about Ableton Cloud.",
    },
    {
      id: 5,
      title: "What are the system requirements for my phone?",
      content: "Note works on devices which support iOS 15 and above.",
    },
    {
      id: 6,
      title: "Will new features be added to note?",
      content: "We've already added a number of new features to Note and plan to keep improving the app as we listen to your wishes and feedback. Check out the main updates in this article.",
    },
  ];

  const [selectedFAQ, setSelectedFAQs] = useState([]);

  const toggleFAQ = (faqId) => {
    setSelectedFAQs((prevSelectedFAQs) => {
      if (prevSelectedFAQs.includes(faqId)) {
        // If FAQ is already selected, remove it
        return prevSelectedFAQs.filter((id) => id !== faqId);
      } else {
        // If FAQ is not selected, add it
        return [...prevSelectedFAQs, faqId];
      }
    });
  };

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

        <div className="section3-text">
          <div className="section3-subtext">
            <div>
              <h2>Ideas that travel</h2>
              <p>
              Connect Note to Ableton Cloud to send your five favorite Note Sets directly to Live’s browser, and pick up where you left off. Ableton Cloud is freely available for every edition of Live 11.2.5, including the free trial. 
              </p>
            </div>
            <div>
              <h2>Sounds farmiliar</h2>
              <p>
              Note uses instruments and devices from Ableton Live. Play synth lines with melodic presets, finger-drum beats using Drum Sampler kits, and create instrumental melodies with Melodic Sampler instruments. Use Reverb, Delay and Chorus-Ensemble to give your sounds space and depth, or play with color and texture using Saturator, Redux and Phaser-Flanger.
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
          <div className="faq" key={faq.id} onClick={() => toggleFAQ(faq.id)}>
            <div className="faq-title">
            <span>
                {selectedFAQ.includes(faq.id) ? (
                  // Minus icon when FAQ is expanded
                  <Minus size={25} weight="bold" />
                ) : (
                  // Plus icon when FAQ is collapsed
                  <Plus size={25} weight="bold" />
                )}
              </span>
                <h2>{faq.title}</h2>
            </div>
            {selectedFAQ.includes(faq.id) && 
            <div className="faq-content">
                <p>{faq.content}</p>
                <p>{faq.additional}</p>
            </div>
            }
          </div>
        ))}
      </aside>
    </div>
  );
};

export default Note;
