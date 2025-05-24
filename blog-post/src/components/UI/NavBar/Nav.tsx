
import Link from "next/link";
import Image from "next/image";
import WebsiteLogo from "../../../../public/images/logo/logo.jpg"

const Nav = () => {

    const pages = [
        { id: 1, name: "home", link: "/"},
        { id: 2, name: "news", link: "/news"},
        { id: 3, name: "podcasts", link: "/podcasts"},
        { id: 4, name: "resources", link: "/resources"},
    ];

    return (
        <>
            <nav className="flex flex-col" >
                <div className="text-sm text-center py-5 bg-gray-900" >
                    subscribe to our newsletter for new & latest blogs and resources
                </div>
                <div className="flex px-10 py-5 justify-between bg-amber-900 items-center" >
                    <div className="flex" >
                        <div>
                            <Image
                            src={WebsiteLogo}
                            alt="websites logo"
                            className="w-10"
                            />
                        </div>
                        <p>futureTech</p>
                    </div>
                    <div className="flex gap-10" >
                        {
                            pages.map( value => (
                                <Link href={value.link} key={value.id} className="capitalize bg-gray-600 border-2 border-white py-3 px-5 rounded-xl" >
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
                </div>
            </nav>
        </>
    )
}

export default Nav;