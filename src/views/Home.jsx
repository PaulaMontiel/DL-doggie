import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import Categorias from "../components/Categorias.jsx";
import Marcas from "../components/marcas.jsx";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Categorias></Categorias> */}
            <Hero></Hero>
            <Marcas></Marcas>
        </div>
    )
}
export default Home;