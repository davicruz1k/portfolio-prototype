import "./style.css"
import hero from "./assets/hero.jpg"
function Hero() {
    return (

        <div className="Hero">
            <div className="Right">
                <div className="typewriter">
                    <h2 className="type">Davic1k</h2>
                </div>
                <h2 className="mobile_h2">Davic1k</h2>
                <p className="description">I am Davi Cruz and I made games and love to create low level things, as built my own Operating System, but now I am making a new game engine, like bevy.</p>
                <div className="sidebyside">
                    <a className="t_border" target="_blank" href="https://github.com/davicruz1k">Github</a>
                    <a className="t_border" >Dowload CV</a>
                </div>
            </div>
            <div className="Left">
                <img src={hero}></img>
                <h2>I love penguins</h2>
            </div>
        </div>
    );
}

export default Hero;
