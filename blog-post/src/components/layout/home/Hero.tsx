

const HomeHero = () => {

    const data = [
        { id: 1, name: 'resources available', amount: 300 },
        { id: 2, name: 'total downloads', amount: "12k" },
        { id: 3, name: 'active users', amount: "10k" },
    ];

    const info = [
        {
            id: 1,
            name: "latest news updates",
            text: "stay current",
            description: "over 1,000 articles published monthly",
            icon: "icon"
         },
        {
            id: 2,
            name: "Expert Contributors",
            text: "Trusted Insights",
            description: "50+ renowned AI experts on our team",
            icon: "icon"
         },
        {
            id: 3,
            name: "cloud readership",
            text: "worldwide impact",
            description: "2 million monthly readers",
            icon: "icon"
         },
    ];

    return (
        <>
            <header>
                <div>
                    <div>
                        <p>
                            your journey to tomorrow begins hers
                        </p>
                        <h3>
                            explore the frontiers of artificial intelligence
                        </h3>
                        <p>
                            Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.
                        </p>
                        <div>
                            {
                                data.map( value => (
                                    <div key={value.id} >
                                        <h4>
                                            {value.amount}<span>+</span>
                                        </h4>
                                        <p>
                                            {value.name}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div>
                            images
                        </div>
                        <div>
                            <h5>
                                explore 1000+ resources
                            </h5>
                            <p>
                                over 1,000 articles on emerging tech trends and breakthoughs
                            </p>
                            <button>
                                explore resources {}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        info.map( value => (
                            <div key={value.id} >
                                {value.icon}
                                <h4>{value.name}</h4>
                                <p>{value.text}</p>
                                <p>{value.description}</p>
                            </div>
                        ) )
                    }
                </div>
            </header>
        </>
    )
}

export default HomeHero;