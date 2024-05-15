import "./Home.css";
import { LinkedIn, Github } from "../Icons";

export default function Home() {
    return (
        <section id="home">
            <div className="home-container">
                <div className="top-content">
                    <div className="content-heading">
                        <h1>
                            Hello I'm
                            <br />{" "}
                            <span className="heading-second-line">
                                David Xu
                            </span>
                        </h1>
                    </div>

                    <div className="content-icons">
                        <LinkedIn />
                        <Github />
                    </div>
                </div>

                <div className="bot-content">
                    <div className="content-heading">
                        <h1>
                            Software
                            <br />
                            <span className="heading-second-line">
                                Developer
                            </span>
                        </h1>
                    </div>
                </div>

                <div className="footer-content">
                    <p>Year of the Dragon</p>
                </div>
            </div>
        </section>
    );
}
