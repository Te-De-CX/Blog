

const HomeBlogs = () => {

    const categories = [ "all", "quantum computing", "all ethics", "space exploration", "biotechnology", "renewable energy" ]

    return (
        <>
            <section>
                <div>
                    <p>
                        a knowledge treasure trove
                    </p>
                    <h4>
                        explore futureTech&apos;s in-Depth blog posts
                    </h4>
                    <button>
                        view all blogs
                    </button>
                </div>
                <div>
                    {
                        categories.map(( value, index ) => (
                            <li key={index} >
                                {value}
                            </li>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default HomeBlogs;