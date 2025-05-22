
interface NewsVideoCardProp {
    videoSrc: string,
    videoHeading: string,
    videoDescription: string
}

const NewsVideoCard: React.FC<NewsVideoCardProp> = ({
    videoSrc,
    videoDescription,
    videoHeading
}) => {

    return (
        <>
            <div>
                <video src={videoSrc}>

                </video>
                <div>
                    <h5>
                        {videoHeading}
                    </h5>
                    <p>
                        {videoDescription}
                    </p>
                </div>
            </div>
        </>
    )
}

export default NewsVideoCard;