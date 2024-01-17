import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../sass/about.css";
import { PlayCircle, CaretRight } from "@phosphor-icons/react";

const About = () => {
  useEffect(() => {
    document.title =
      "Learn more about Ableton - maker of Live and Push | Ableton";
  }, []);

  return (
    <div className="about">
      <nav>
        <Link>About</Link>
        <Link>Jobs</Link>
        <Link>Apprenticeships</Link>
      </nav>

      <div className="header">
        <div className="header-image">
          <img
            src="https://ableton-production.imgix.net/about/header.jpg"
            alt=""
          />
          <h2>Ableton</h2>
        </div>
        <div className="header-text">
          <h2>
            We make <Link to="/live">Live</Link>, <Link to="/push">Push</Link>{" "}
            and <Link to="/link">Link</Link> ---- unique software and hardware
            for music creation and performance. With these products, our
            community of users creates amazing things.
          </h2>
          <p>
            Ableton was founded in 1999 and released the first version of Live
            in 2001. Our products are used by a community of dedicated
            musicians, sound designers, and artists from across the world.
          </p>
        </div>
        <div className="header-image2">
          <div className="image2-first">
            <img
              src="https://ableton-production.imgix.net/about/photo-1.jpg"
              alt=""
            />
          </div>
          <div className="image2-second">
            <img
              src="https://ableton-production.imgix.net/about/photo-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="header-text">
          <h2>
            Making music isn't easy. It takes time, effort, and learning. But
            when you're in the flow, it's incredibly rewarding.
          </h2>
          <p>
            We feel the same way about making Ableton products. The driving
            force behind Ableton is our passion for what we make, and the people
            we make it for.
          </p>
        </div>
        <div className="header-video">
          <a href="https://www.youtube.com/watch?v=9SbnhgjeyXA" target="_blank">
            <figure>
              <div>
                <img
                  src="https://ableton-production.imgix.net/about/poster-juanpe.jpg?auto=compress%2Cformat&dpr=2&ixjsv=1.1.3&q=50&w=720"
                  alt=""
                />
                <span>
                  <PlayCircle size={120} weight="fill" />
                </span>
              </div>
              <figcaption>Why Ableton - Juanpe Bolivar</figcaption>
            </figure>
          </a>
        </div>
        <div className="header-text">
          <h2>
            We are more than 350 people from 30 different countries divided
            between our headquarters in Berlin and our offices in Los Angeles
            and Tokyo.
          </h2>
          <p>
            Most of us are active musicians, producers, and DJs, and many of us
            use Live and Push every day. We come from a wide range of cultural
            and professional backgrounds. Some of us have PhDs, some are
            self-taught, and most of us are somewhere in between. What connects
            us is the shared belief that each of us has the skills and knowledge
            to contribute to something big: helping to shape the future of music
            culture.
          </p>
        </div>
        <div className="header-image3">
          <div className="image3-first">
            <div>
              <img
                src="https://ableton-production.imgix.net/about/photo-3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://ableton-production.imgix.net/about/photo-4.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="image3-second">
            <img
              src="https://ableton-production.imgix.net/about/photo-5.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="header-text">
          <h2>
            We believe it takes focus to create truly outstanding instruments.
            We only work on a few products and we strive to make them great.
          </h2>
          <p>
            Rather than having a one-size-fits-all process, we try to give our
            people what they need to work their magic and grow. We've learned
            that achieving the best results comes from building teams that are
            richly diverse, and thus able to explore problems from a wider set
            of perspectives. We don't always agree with each other, but opinion
            and debate are valued and openly encouraged.
          </p>
        </div>
        <div className="header-image4">
          <img
            src="https://ableton-production.imgix.net/about/poster-meet-the-makers.jpg?auto=format&dpr=2&fit=crop&fm=jpg&ixjsv=1.1.3&q=50&w=1200"
            alt=""
          />
        </div>
        <div className="header-text">
          <h2>
            We're passionate about what we do, but we're equally passionate
            about improving who we are.
          </h2>
          <p>
            We work hard to foster an environment where people can grow both
            personally and professionally, and we strive to create a wealth of
            opportunities to learn from and with each other. <br />
            Alongside an internal training program, employees are actively
            supported in acquiring new knowledge and skills, and coached on
            applying these in their daily work. In addition, staff-organized
            development and music salons are a chance to discuss new
            technologies, production techniques and best practices.
          </p>
        </div>
        <div className="header-image5">
          <div className="image5-container">
            <div className="image5-first">
              <img
                src="https://ableton-production.imgix.net/about/photo-6-a.jpg"
                alt=""
              />
            </div>
            <div className="image5-second">
              <img
                src="https://ableton-production.imgix.net/about/photo-7.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="header-text">
          <h2>
            We want our employees to love it here. Since we’re looking for
            exceptional talent from around the world, we will do everything we
            can to make your transition as easy as possible.
          </h2>
          <p>
            If you're joining us in Berlin, we'll help with relocation and
            paperwork. We'll even provide you with free German or English
            lessons. Plus, working in Germany means you can expect comprehensive
            health insurance for you and your family, as well as generous
            maternity and paternity leave. Office hours are flexible, but it's
            not all work; we have several company and team outings throughout
            the year as well as a variety of fun, informal small-group
            activities.
          </p>
        </div>
        <div className="header-image6">
          <div>
            <div className="image6">
              <img
                src="https://ableton-production.imgix.net/about/photo-8.jpg"
                alt=""
              />
            </div>
            <div className="image6-text">
              <div>
                <h2>
                  We're really proud of the work we've done so far. But there's
                  so much more to come. If you'd like to be a part of it, please
                  join us.
                </h2>
                <Link>
                  See latest jobs
                  <CaretRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default About;
