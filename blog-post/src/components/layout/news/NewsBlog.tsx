
const NewsBlog = () => {

    const categories = [ "all", "technology", "politics", "health", "environment", "sports" ]

    return (
        <>
            <section>
                <div>
                    <p>
                        welcome to our news hub
                    </p>
                    <p>
                        discover the world of headlines
                    </p>
                    <button>
                        view all news
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

export default NewsBlog;