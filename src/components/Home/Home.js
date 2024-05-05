import logo from '../../assets/logo.jpg'
import './Home.css'

export default function Home() {
    return (
        <>
            <div className="hero">
                <div className="home_box">
                    <h1>Connect</h1>
                    <p>with top freelancers online</p>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident tenetur suscipit asperiores assumenda laborum atque praesentium nemo, totam voluptatum dolore!</p>

                    <nav>
                        <a href="">Earn</a> 
                        <a href="">Hire</a>
                    </nav>
                </div>
                <div className="home_box">
                    <img src={logo} alt="logo" />
                </div>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, quidem!</p>
                    </div>
                    <div className="box">
                        <div className="circle_step">
                            <p>2</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, quidem!</p>
                    </div>
                    <div className="box">
                        <div className="circle_step">
                            <p>3</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, quidem!</p>
                    </div>
                    <div className="box">
                        <div className="circle_step">
                            <p>4</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, quidem!</p>
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
                        <img src="" alt="image" />
                        <div>
                            <p>name</p>
                            <p>rating</p>
                        </div>
                    </div>
                </div>
                <div className="review_box">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti alias eligendi velit commodi vero amet dicta tenetur quo! Excepturi perferendis tempora voluptas corrupti corporis ratione repellendus, eaque aut error doloribus!</p>
                    <div className="flex_box">
                        <img src="" alt="image" />
                        <div>
                            <p>name</p>
                            <p>rating</p>
                        </div>
                    </div>
                </div>
                <div className="review_box">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti alias eligendi velit commodi vero amet dicta tenetur quo! Excepturi perferendis tempora voluptas corrupti corporis ratione repellendus, eaque aut error doloribus!</p>
                    <div className="flex_box">
                        <img src="" alt="image" />
                        <div>
                            <p>name</p>
                            <p>rating</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}