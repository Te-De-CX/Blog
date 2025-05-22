
const Footer = () => {

    const year = new Date().getFullYear();

    const home = ["features", "blogs", "resources", "testimonials", "contact us", "newsletter"];
    const news = [ "trending stories", "featured videos", "technology", "Health", "Polities", "Environment" ];
    const blogs = [ "quantum computing", "ai ethics", "space exploration", "biotechnology", "renewable energy", "biohacking" ];
    const podcasts = [ "ai revolution", "ai revolution", "techtalk ai", "ai conversations" ]
    const resources = [ "whitepapers", "ebooks", "reports", "reserachPapers" ]

    return (
        <>
            <footer>
                <div>
                    <h6>home</h6>
                    {
                        home.map( (value, index) => (
                            <div key={index} >
                                <li>
                                    {value}
                                </li>
                            </div>
                        ) )
                    }
                </div>
                <div>
                    <h6>news</h6>
                    {
                        news.map( (value, index) => (
                            <div key={index} >
                                <li>
                                    {value}
                                </li>
                            </div>
                        ) )
                    }
                </div>
                <div>
                    <h6>blogs</h6>
                    {
                        blogs.map( (value, index) => (
                            <div key={index} >
                                <li>
                                    {value}
                                </li>
                            </div>
                        ) )
                    }
                </div>
                <div>
                    <h6>podcasts</h6>
                    {
                        podcasts.map( (value, index) => (
                            <div key={index} >
                                <li>
                                    {value}
                                </li>
                            </div>
                        ) )
                    }
                </div>
                <div>
                    <h6>resources</h6>
                    {
                        resources.map( (value, index) => (
                            <div key={index} >
                                <button>
                                    {value}
                                </button>
                            </div>
                        ) )
                    }
                </div>
                <div>
                    <hr />
                    <div>
                        <p>
                            terms & condition | privacy policy
                        </p>
                    </div>
                    <div>
                        icons
                    </div>
                    <div>
                        c { year } futureTech, all rights reserved
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;