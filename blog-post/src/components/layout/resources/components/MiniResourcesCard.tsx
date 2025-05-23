
import Image from "next/image";

interface MiniResourcesCardProp {
    imageSrc: string,
    topic: string,
    text: string
}

const MiniResourcesCard: React.FC<MiniResourcesCardProp> = ({
    imageSrc,
    topic,
    text
}) => {

    return (
        <>
            <div>
                <Image
                    src={imageSrc}
                    alt={topic}
                />
                <div>
                    <h6>
                        {topic}
                    </h6>
                    <p>
                        {text}
                    </p>
                    <div>
                        <button>
                            view details 
                        </button>
                        <button>
                            download pdf now
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MiniResourcesCard;