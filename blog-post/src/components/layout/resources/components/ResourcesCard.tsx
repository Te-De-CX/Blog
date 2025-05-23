
import Image from "next/image";

interface ResourcesCardProp {
    section: string,
    sectionText: string,
    imageSrc: string,
    topic: string,
    date: string,
    author: string,
    text: string,
    category: string,
}

const ResourcesCard: React.FC<ResourcesCardProp> = ({
    section,
    sectionText,
    imageSrc,
    topic,
    date,
    author,
    text,
    category
}) => {

    return (
        <>
            <div>
                <div>
                    <h4>
                        {section}
                    </h4>
                    <p>
                        {sectionText}
                    </p>
                </div>
                <div>
                    <Image
                        src={imageSrc}
                        alt={topic}
                    />
                    <div>
                        <h5>
                            {topic}
                        </h5>
                        <p>
                            {text}
                        </p>
                        <button>
                            download pdf now
                        </button>
                    </div>
                    <div>
                        <div>
                            production date 
                            {date}
                        </div>
                        <div>
                            category {category}
                        </div>
                        <div>
                            author {author}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResourcesCard;