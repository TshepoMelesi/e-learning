import "../styles/hero.css"
import heroImage from "../assets/images/image.jpg"

const Hero = () => {
        return (
                <section className="hero-section">
                        <img src={heroImage} alt="just an image" />
                </section>
        )
}

export default Hero