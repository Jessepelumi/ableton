import "../sass/help.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CaretRight } from "@phosphor-icons/react";

const Help = () => {

    useEffect(() => {
        document.title = "Help and support for Live & Push | Ableton";
    }, []);

    return (
        <div className="help">
            <nav className="help-nav">
                <Link>Overview</Link>
                <Link>Learn Live</Link>
                <Link>Learn Push</Link>
            </nav>

            <header className="need-help">
                <h2 className="need-help-heading">Need help?</h2>
                <div className="need-help-container">
                    <div>
                        <h2>Knowldge Base</h2>
                        <p>
                            Find help articles on all of our products plus support for your shopping and product licence questions.
                        </p>
                        <Link>
                            Go to Knowldge Base
                            <CaretRight size={12} />
                        </Link>
                        <form action="">
                            <label htmlFor="search">Search the Knowldge Base:</label>
                            <input type="text" name="search" id="search" placeholder='Keyword, e.g "installation" '/>
                            <button>Search</button>
                        </form>
                    </div>
                    <div>
                        <h2>Suggested Articles</h2>
                        <nav className="articles-nav">
                            <Link>Live 12 Pre-Order FAQ</Link>
                            <Link>Discount Campaign FAQ</Link>
                            <Link>Live Beta FAQ</Link>
                            <Link>Live 11 Technical FAQ</Link>
                            <Link>Mac Compability</Link>
                            <Link>Windows Compability</Link>
                            <Link>Installing Live</Link>
                            <Link>Authorizing Live</Link>
                            <Link>Buying Push FAQ</Link>
                            <Link>Getting started with Push 3 FAQ</Link>
                            <Link>Note FAQ</Link>
                        </nav>
                    </div>
                </div>
            </header>

            <section className="learn">
                <div className="learn-container">
                    <Link><img src="https://ableton-production.imgix.net/help/learn-live.jpg?fit=crop&auto=format&fm=jpg" alt="" /></Link>
                    <div>
                        <h2>Learn Live</h2>
                        <p>
                            Video tutorials from getting started through to mastering the latest features, plus further training options.
                        </p>
                        <Link>
                            Watch Learn Live video series
                            <CaretRight size={12} />
                        </Link>
                    </div>
                </div>
                <div className="learn-container">
                    <Link><img src="https://ableton-production.imgix.net/help/learn-push.jpg?fit=crop&auto=format&fm=jpg" alt="" /></Link>
                    <div>
                        <h2>Learn Push</h2>
                        <p>
                            From setup to sound design and beyond - our growing collection of tutorials shows how you can make music with Push.
                        </p>
                        <Link>
                            Watch Learn Push series
                            <CaretRight size={12} />
                        </Link>
                    </div>
                </div>
                <div className="learn-container">
                    <Link><img src="https://ableton-production.imgix.net/help/learning-music.jpg?fit=crop&auto=format&fm=jpg" alt="" /></Link>
                    <div>
                        <h2>Learning Music</h2>
                        <p>
                            Learn the fundamentals of music making - beats, melodies, harmonies, basslines, and song structure - and make music right in your browser.
                        </p>
                        <Link>
                            Get started making music
                            <CaretRight size={12} />
                        </Link>
                    </div>
                </div>
                <div className="learn-container">
                    <Link><img src="https://ableton-production.imgix.net/help/learning-synths.jpg?fit=crop&auto=format&fm=jpg" alt="" /></Link>
                    <div>
                        <h2>Learning Synths</h2>
                        <p>
                            Learn the fundamentals of synthesis at your own pace with a powerful but easy-to-learn synthesizer that runs in your web browser.
                        </p>
                        <Link>
                            Get started making sounds
                            <CaretRight size={12} />
                        </Link>
                    </div>
                </div>
                <div className="learn-container">
                    <Link><img src="https://ableton-production.imgix.net/help/making-music.jpg?fit=crop&auto=format&fm=jpg" alt="" /></Link>
                    <div>
                        <h2>Making Music</h2>
                        <p>
                            Some tips from 74 Creative Strategies for Electronic Producers - Dennis DeSantis' book on solving musical problems, making progress and finishing what you start.
                        </p>
                        <Link>
                            Check out chapters from the book
                            <CaretRight size={12} />
                        </Link>
                    </div>
                </div>
            </section>

            <aside>
                <h2 className="aside-heading">More learning resources</h2>
                <div className="aside-container">
                    <div>
                        <h2>Live & Push manual</h2>
                        <p>
                            Everything you need to know about Live and Push.
                        </p>
                        <Link>
                            Check out the manual
                            <CaretRight size={12} />
                        </Link>
                    </div>
                    <div>
                        <h2>Learn Note</h2>
                        <p>
                            Find out how to play beats and melodies, sample your surroundings, and experiment with song structures in Note - an iOS app for musical sketching. Then send your Note sketches to Live using Ableton Cloud.
                        </p>
                        <Link>
                            Check out the manual
                            <CaretRight size={12} />
                        </Link>
                        <Link>
                            Watch a tutorial
                            <CaretRight size={12} />
                        </Link>
                    </div>
                    <div>
                        <h2>Certified Training</h2>
                        <p>
                            All over the globe, a growing group of trainers and institutions are offering approved Ableton teaching at all skill levels, both for individuals and groups.
                        </p>
                        <div className="inner-aside">
                            <h2>Training in Ibiza:</h2>
                            <Link>
                                2 trainers and institutions offer certified training in Ibiza
                                <CaretRight size={12} />
                            </Link>
                        </div>
                        <Link>
                            Not based in Ibiza? Find training near you
                            <CaretRight size={12} />
                        </Link>
                    </div>
                    <div>
                        <h2>Learn finger drumming</h2>
                        <p>
                            Practice your finger drumming skills with Melodics, a standalone app that offers a great way to learn and refine your playing. It's free to download and comes with 20 lessons to get you started.
                        </p>
                        <Link>
                            Download Melodics for free
                            <CaretRight size={12} />
                        </Link>
                    </div>
                    <div>
                        <h2>User Groups</h2>
                        <p>
                            For beginners and seasoned users alike, Ableton User Groups are open to any Live user who wants to share their knowledge and learn from others in person.
                        </p>
                        <Link>
                            Find a User Group near you
                            <CaretRight size={12} />
                        </Link>
                    </div>
                </div>
            </aside>

            <aside>
                <h2 className="aside-heading">Contact Suport</h2>
                <div className="aside-container">
                    <div>
                        <h2>Sales support</h2>
                        <p>
                            Get in touch with us if you've got some questions before you buy a product, or if you need help with your order, license or the authorisation process.
                        </p>
                        <Link>
                            Submit your sales questions
                            <CaretRight size={12} />
                        </Link>
                        <p className="paragraph">
                            We are currently dealing with a high number of support requests; therefore, our response time might be higher than expected. We ask for your patience and that you do not send multiple requests about the same issue; will get back to you as soon as possible. In the meantime, you can find solutions to common problems in our <Link>Knowledge Base</Link>.
                        </p>
                    </div>
                    <div>
                        <h2>Technical support</h2>
                        <p>
                            Need help with setting up or other technical issues?
                        </p>
                        <Link>
                            Please log in
                            <CaretRight size={12} />
                        </Link>
                    </div>
                </div>
            </aside>
        </div>
    );
}
 
export default Help;