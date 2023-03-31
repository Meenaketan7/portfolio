import SocialMediaIcons from "../components/socialMediaIcon"
const Footer = () => {
    return (
        <footer className="h-64 bg-red pt-10">
            <div className="w-5/6  max-auto">
                <SocialMediaIcons />
                <div className="md:flex justify-center md:justify-between text-center">
                    <p className="font-playfair font-semibold
                    text-yellow ">
                        MEENAKETAN PADHY
                    </p>
                    <p className="font-playfair text-md
                    text-yellow ">©2023 MEENAKETAN, All Right Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer