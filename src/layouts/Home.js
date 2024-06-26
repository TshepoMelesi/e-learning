import Hero from "../components/Hero.js";
import About from "../components/About.js";
import SocialMedia from "../components/SocialMedia.js"
import Plans from "../components/Plans.js";
import Specials from "../components/Specials.js"


const Home = () => {
        return (
                <main>
                        <Hero />
                        <About />
                        <SocialMedia />
                        <Plans /> 
                        <Specials />
                </main>
        )
}

export default Home; 