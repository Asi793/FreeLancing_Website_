import logo from '../../assets/logo.jpg'
import backgroundImage from '../../assets/bg_image.jpg'
import review1 from '../../assets/review1.jpg'
import review2 from '../../assets/review2.jpg'
import review3 from '../../assets/review3.jpg'
import bgimage from '../../assets/light_blue.jpg'
import './Home.css'

export default function Home() {
    return (
        <>
            <div className="hero">
                <div className="home_box">
                    <h1>The secret of getting ahead is getting started...</h1>
                    <nav>
                        <a href="">Earn</a> 
                        <a href="">Hire</a>
                    </nav>
                </div>
                <div className="home_box">
                    <img src={backgroundImage} alt="logo" />
                </div>
            </div>

            <div className="service">
                <img src={bgimage} alt="backgroundimage" />
                <h1>The best part? Everything.</h1>
                <h2>Stick to your budget</h2>
                <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
                <h2>Get quality work done quickly</h2>
                <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
                <h2>Pay when you're happy</h2>
                <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
                <h2>Count on 24/7 support</h2>
                <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
            </div>

            <div className="get_started">
                <header>
                    <h3>GET STARTED</h3>
                    <p>seeking out a freelancer?</p>
                </header>

                <div className="context">
                    <div className="box">
                        <div className="circle_step">
                            <p>1</p>
                        </div>
                        <p>Life Style</p>
                    </div>
                    <div className="box">
                        <div className="circle_step">
                            <p>2</p>
                        </div>
                        <p>Grafics and Design</p>
                    </div>
                    <div className="box">
                        <div className="circle_step">
                            <p>3</p>
                        </div>
                        <p>Digital Marketing</p>
                    </div>
                    <div className="box">
                        <div className="circle_step">
                            <p>4</p>
                        </div>
                        <p>Data</p>
                    </div>
                </div>
            </div>


            <div className="work">
                <header>
                    <h3>WORK WITH TOP - CLASS TALENTS</h3>
                </header>

                <div className="work_container">
                    <div className="work_box">
                        <img src={logo} alt="" />
                        <h2>lorem lorem</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui molestiae corporis veritatis quia quibusdam quasi minima ullam quaerat. Veniam, nostrum?</p>
                    </div>
                    <div className="work_box">
                        <img src={logo} alt="" />
                        <h2>lorem lorem</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui molestiae corporis veritatis quia quibusdam quasi minima ullam quaerat. Veniam, nostrum?</p>
                    </div>
                    <div className="work_box">
                        <img src={logo} alt="" />
                        <h2>lorem lorem</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui molestiae corporis veritatis quia quibusdam quasi minima ullam quaerat. Veniam, nostrum?</p>
                    </div>
                    <div className="work_box">
                        <img src={logo} alt="" />
                        <h2>lorem lorem</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui molestiae corporis veritatis quia quibusdam quasi minima ullam quaerat. Veniam, nostrum?</p>
                    </div>
                    <div className="work_box">
                        <img src={logo} alt="" />
                        <h2>lorem lorem</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui molestiae corporis veritatis quia quibusdam quasi minima ullam quaerat. Veniam, nostrum?</p>
                    </div>
                    <div className="work_box">
                        <img src={logo} alt="" />
                        <h2>lorem lorem</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui molestiae corporis veritatis quia quibusdam quasi minima ullam quaerat. Veniam, nostrum?</p>
                    </div>
                    <div className="work_box">
                        <img src={logo} alt="" />
                        <h2>lorem lorem</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui molestiae corporis veritatis quia quibusdam quasi minima ullam quaerat. Veniam, nostrum?</p>
                    </div>
                </div>
            </div>


            <div className="reviews">
                <header>
                    <h3>client reviews</h3>
                </header>

                <div className="reviews_container">
                <div className="review_box">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti alias eligendi velit commodi vero amet dicta tenetur quo! Excepturi perferendis tempora voluptas corrupti corporis ratione repellendus, eaque aut error doloribus!</p>
                    <div className="flex_box">
                        <img src={review1} alt="image" />
                        <div>
                            <p>name : Asritha</p>
                            <p>rating : 5</p>
                        </div>
                    </div>
                </div>
                <div className="review_box">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti alias eligendi velit commodi vero amet dicta tenetur quo! Excepturi perferendis tempora voluptas corrupti corporis ratione repellendus, eaque aut error doloribus!</p>
                    <div className="flex_box">
                        <img src={review2} alt="image" />
                        <div>
                            <p>name : Harsha </p>
                            <p>rating : 5</p>
                        </div>
                    </div>
                </div>
                <div className="review_box">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti alias eligendi velit commodi vero amet dicta tenetur quo! Excepturi perferendis tempora voluptas corrupti corporis ratione repellendus, eaque aut error doloribus!</p>
                    <div className="flex_box">
                        <img src={review3} alt="image" />
                        <div>
                            <p>name : Meghana</p>
                            <p>rating : 5</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

