import "./style.css"
import about from "./assets/about.jpg"
function Hero() {
    return (

        <div className="About">
           <div className="left_2">
            <h2>About Me</h2>
            <p className="description">My name is Davi Cruz, I'm 14 years old, and I'm currently designing a game engine like bevy in rust, I'm using libraries like raylib for rendering, I'm currently making the core of the game engine, but I've already worked on big projects like my own operating system (OS) and a linux distro without being based on another, but I'm open to working on projects and helping with open source projects, just call me on my discord davic1k</p>
           </div>
           <div className="right_2">
            <img className="img_about" src={about}></img>
           </div>
        </div>
    );
}

export default Hero;
