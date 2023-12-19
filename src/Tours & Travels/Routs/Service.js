import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";
const Service = () => {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg="https://cdn.pixabay.com/photo/2023/03/31/14/39/ocean-7890172_640.jpg"
                title="Service"
                btnClass="hide"
            />
            <Trip />
            <Footer />
        </>
    )
}
export default Service;