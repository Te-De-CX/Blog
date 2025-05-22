
import Image from "next/image";

interface HomeTestimonialsCardProp {
    imageSrc: string,
    name: string,
    location: string,
    testimonial: string
}

type HomeTestimonialsCardTyoe = React.FC<HomeTestimonialsCardProp>

const HomeTestimonialsCard: HomeTestimonialsCardTyoe = ({
    imageSrc,
    name,
    location,
    testimonial,
}) => {

    return (
        <>
            <div>
                <Image
                    src={imageSrc}
                    alt="Testimonial images"
                />
                <div>
                    <p>
                        {name}
                    </p>
                    <p>
                        {location}
                    </p>
                </div>
                <div>
                    <p>
                        {testimonial}
                    </p>
                </div>
            </div>
        </>
    )
}

export default HomeTestimonialsCard;