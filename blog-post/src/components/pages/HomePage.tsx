
import Nav from "../UI/NavBar/Nav";
import HomeHero from "../layout/home/Hero";
import HomeFeatures from "../layout/home/Features";
import HomeBlogs from "../layout/home/Blogs";
import HomeResources from "../layout/home/Resources";
import HomeTestimonial from "../layout/home/Testimonials";
import CTA from "../common/CTA";
import Footer from "../UI/Footer/Footer";


const HomePage = () => {

    return (
        <>
            <Nav />
            <HomeHero />
            <HomeFeatures />
            <HomeBlogs />
            <HomeResources />
            <HomeTestimonial />
            <CTA />
            <Footer />
        </>
    )
}

export default HomePage;