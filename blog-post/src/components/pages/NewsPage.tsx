
import Nav from "../UI/NavBar/Nav";
import NewsHeader from "../layout/news/NewsHeader";
import NewsBlog from "../layout/news/NewsBlog";
import NewsVideos from "../layout/news/NewsVideos";
import Footer from "../UI/Footer/Footer";

const NewsPage = () => {

    return (
        <>
            <Nav />
            <NewsHeader />
            <NewsBlog />
            <NewsVideos />
            <Footer />
        </>
    )
}

export default NewsPage;