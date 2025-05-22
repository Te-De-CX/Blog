
import Image from "next/image";

interface NewsCardProp {
    imageSrc: string,
    section: string,
    title: string,
}

const NewsCard: React.FC<NewsCardProp> = ({
    imageSrc,
    section,
    title
}) => {

    return (
        <>
            <Image 
                src={imageSrc}
                alt={section}
            />
            <div>
                <h5>{title}</h5>
                <p>{section}</p>
                <button>read more</button>
            </div>
        </>
    )
}

export default NewsCard;