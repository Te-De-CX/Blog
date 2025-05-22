
import Link from "next/link";

const Nav = () => {

    const pages = [
        { id: 1, name: "home", link: "/"},
        { id: 2, name: "news", link: "/news"},
        { id: 3, name: "podcasts", link: "/podcasts"},
        { id: 4, name: "resources", link: "/resources"},
    ];

    return (
        <>
            <nav>
                <div>
                    subscribe to our newsletter for new & latest blogs and resources
                </div>
                <div>
                    <div>
                        logo
                    </div>
                    <p>futureTech</p>
                </div>
                <div>
                    {
                        pages.map( value => (
                            <Link href={value.link} key={value.id}>
                                {value.name}
                            </Link>
                        ) )
                    }
                </div>
                <div>
                    <Link href={"/contact"} >
                        contact us
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Nav;