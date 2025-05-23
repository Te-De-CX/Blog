

interface PodcastCardProp {
    topic: string,
    name: string,
    videoSrc: string,
    title: string,
    text: string,
    numberOfEpisodes: string,
    duration: number,
    timeSpan: number
}

const PodcastCard: React.FC<PodcastCardProp> = (
    {
        topic,
        name,
        videoSrc,
        title,
        text,
        numberOfEpisodes,
        duration,
        timeSpan
    }
) => {

    return (
        <>
            <section>
                <div>
                    {topic}
                    <div>
                        host {name}
                        <button>
                            listen podcast
                        </button>
                    </div>
                </div>
                <div>
                    <video src={videoSrc}>

                    </video>
                    <div>
                        <h6>
                            {title}
                        </h6>
                        <p>
                            {text}
                        </p>
                    </div>
                    <div>
                        <div>
                            <p>total episodes</p>
                            <p>{numberOfEpisodes}</p>
                        </div>
                        <div>
                            <p>
                                average episode length
                            </p>
                            <p>
                                {duration} min
                            </p>
                        </div>
                        <div>
                            <p>release frequency</p>
                            <p>{timeSpan}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PodcastCard;