import "../sass/note.css";
import { useEffect } from "react";

const Note = () => {

    useEffect(() => {
        document.title = "Note - an iOS app for forming musical ideas | Ableton";
    }, []);

    return (
        <div className="note">
            <div className="note-header">
                <div className="header-video">
                    <figure>
                        <div>
                            <video autoPlay controls loop>
                                <source src="https://cdn-resources.ableton.com/resources/videos/note/header-desktop.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <figcaption>
                            <h2>Note</h2>
                            <p>A playable iOS app for forming musical ideas</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    );
}
 
export default Note;