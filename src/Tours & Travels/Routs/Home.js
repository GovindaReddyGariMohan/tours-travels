import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";
const Home = () => {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://cdn.pixabay.com/photo/2023/03/22/11/56/way-7869311_640.jpg"
                title="Your Journy Your Story"
                text="Chose Your Favorate Destination."
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <Destination />
            <Trip />
            <Footer />
        </>
    )
}
export default Home;