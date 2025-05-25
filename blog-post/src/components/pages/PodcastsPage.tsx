
import Nav from "../UI/NavBar/Nav";
import { PodcastHeader } from "../layout/podcasts/PodcastsHeader";
import TopPodcasts from "../layout/podcasts/TopPodcasts";
import LatestPodcasts from "../layout/podcasts/LatestPodcasts";
import Footer from "../UI/Footer/Footer";

const PodcastsPage = () => {

    return (
        <>
            <Nav />
            <PodcastHeader />
            <TopPodcasts />
            <LatestPodcasts />
            <Footer />
        </>
    )
}

export default PodcastsPage;