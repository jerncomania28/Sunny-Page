import { Link } from "react-router-dom";

import Navigation from "../../components/Navigation"

//components
import Card from "../../components/Card";

// logo
import Logo from "../../assets/logo.svg";

//assets 
import Header from "../../assets/desktop/image-header.jpg";
import DownArrow from "../../assets/icon-arrow-down.svg";
import Egg from "../../assets/desktop/image-transform.jpg";
import StandOut from "../../assets/desktop/image-stand-out.jpg";
import Photography from "../../assets/desktop/image-photography.jpg";
import GraphicDesign from "../../assets/desktop/image-graphic-design.jpg";

//testimonial resource
import Emily from "../../assets/image-emily.jpg";
import Jennie from "../../assets/image-jennie.jpg";
import Thomas from "../../assets/image-thomas.jpg";

//gallery
import Cone from "../../assets/desktop/image-gallery-cone.jpg";
import MilkBottle from "../../assets/desktop/image-gallery-milkbottles.jpg";
import Orange from "../../assets/desktop/image-gallery-orange.jpg";
import SugarCubes from "../../assets/desktop/image-gallery-sugarcubes.jpg";

//social icons
import Facebook from "../../assets/icon-facebook.svg";
import Instagram from "../../assets/icon-instagram.svg";
import Pinterest from "../../assets/icon-pinterest.svg";
import Twitter from "../../assets/icon-twitter.svg";



const HomePage = () => {

    const TESTIMONIAL_DATA = [
        { avatar: Emily, content: "we put our trust in the sunnyside and they delivered making sure our needs were met and deadlines were always hit.", name: "Emily R.", title: "Marketing Director " },
        { avatar: Thomas, content: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience", name: "Thomas S.", title: "chief operating officer" },
        { avatar: Jennie, content: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!", name: "Jennie F.", title: "Business Owner" }
    ];

    return (
        <div className="home">



            <div className="home-hero">
                <header>
                    <Navigation />
                </header>
                <section>
                    <img src={Header} alt="header" className="home-hero__background" />
                    <div className="home-hero__text">
                        <h1 className="home-hero__text--header">we Are creatives</h1>
                        <img src={DownArrow} alt="down-arrow" className="home-hero__text--downArrow" />

                    </div>
                </section>
            </div>

            <main>

                <div className="home-transform">

                    <div className="home-transform__text">

                        <h1 className="home-transform__text--header">Transform your brand</h1>

                        <p className="home-transform__text--paragraph">
                            We are a full-service creative agency specializing in helping brands grow fast .
                            Engage your clients through compelling visuals that do most of the marjketing for you .
                        </p>

                        <Link to="/about#learnmore" className="home-transform__text--learn-more">Learn More</Link>

                    </div>
                    <div className="home-transform__image">
                        <img src={Egg} alt="home-transform-egg" className="home-transform__image--egg" />
                    </div>
                </div>

                <div className="home-stand-out">

                    <div className="home-stand-out__image">
                        <img src={StandOut} alt="home-stand-out-cup" className="home-stand-out__image--cup" />
                    </div>

                    <div className="home-stand-out__text">

                        <h1 className="home-stand-out__text--header">Stand out to the right audience</h1>

                        <p className="home-stand-out__text--paragraph">
                            Using a collaborative formula of designers ,
                            researchers , photographers , videographers ,
                            and copywriters , we'll build and extend your brand in digital places.

                        </p>

                        <Link to="/about#learnmore" className="home-stand-out__text--learn-more">Learn More</Link>

                    </div>


                </div>

                <div className="home-graphic">

                    <div className="home-graphic__design">
                        <img src={GraphicDesign} alt="home-graphic-design" className="home-graphic__design--grape" />

                        <div className="home-graphic__design__text">
                            <h3 className="home-graphic__design__text--header">
                                Graphic Design
                            </h3>

                            <p className="home-graphic__design__text--paragraph">
                                great design makes you memorable. we deliver artwork that
                                underscores your brand message and captures potential client's attention.

                            </p>

                        </div>
                    </div>

                    <div className="home-graphic__photography">
                        <img src={Photography} alt="home-graphic-photography" className="home-graphic__photography--orange" />

                        <div className="home-graphic__photography__text">
                            <h3 className="home-graphic__photography__text--header">
                                Photography
                            </h3>

                            <p className="home-graphic__photography__text--paragraph">
                                Increase your credibility by getting the most stunning.
                                high-quality photos that improve your business image.
                            </p>

                        </div>
                    </div>


                </div>
                <div className="home-client">

                    <h2 className="home-client__header">
                        Client Testimonials
                    </h2>
                    <div className="home-client__group">

                        {
                            TESTIMONIAL_DATA.map((data, index) => <Card data={data} key={index} />)
                        }

                    </div>

                </div>
                <div className="home-gallery">
                    <div className="home-gallery-first">
                        <img src={MilkBottle} alt="home-gallery-first__1" />
                        <img src={Orange} alt="home-gallery-first_2" />
                    </div>
                    <div className="home-gallery-second">
                        <img src={Cone} alt="home-gallery-second_1" />
                        <img src={SugarCubes} alt="home-gallery-second_2" />
                    </div>

                </div>

            </main>
            <footer>
                <h1 className="footer__header">

                    <img src={Logo} alt="sunny-side-logo" />

                </h1>
                <ul className="footer-menu ">
                    <l1 className="footer-menu__item">About</l1>
                    <l1 className="footer-menu__item">Services</l1>
                    <l1 className="footer-menu__item">Projects</l1>
                </ul>
                <div className="footer__social-icons">
                    <img src={Facebook} alt="facebook-icon" />
                    <img src={Instagram} alt="instagram-icon" />
                    <img src={Twitter} alt="twitter-icon" />
                    <img src={Pinterest} alt="pinterest-icon" />
                </div>
            </footer>



        </div>
    )
}



export default HomePage;