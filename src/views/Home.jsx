import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import Categorias from "../components/Categorias.jsx";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Categorias></Categorias>
            <Hero></Hero>
        </div>
    )
}
export default Home;