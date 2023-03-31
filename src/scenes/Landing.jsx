import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/socialMediaIcon";

const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

    return (
        // form bigger then a medium screen
        <section
            id="home"
            className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
        >
            {/* IMAGE SECTION */}
            <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
                {isAboveMediumScreen ? (
                    <div
                        className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
                    >
                        <img
                            alt="profile"
                            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[250px] md:max-w-[400px]"
                            src="assets/profile-image1.png"
                        />
                    </div>
                ) : (<div>
                    <img
                        alt="profile"
                        className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[250px] md:max-w-[400px]"
                        src="assets/profile-image1.png"
                    />
                </div>)}
            </div>
            {/* Text Selection */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
                {/* Heading section */}
                <motion.div
                    initial="hidden"//for initial stage
                    whileInView="visible"//final condition while we visit the page
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 }, //the position of text and condition initially
                        visible: { opacity: 1, x: 0 }//the final position  and condition
                    }}
                >
                    <p className="text-5xl font-playfair z-10 text-center md:text-start">
                        Meenaketan {""}
                        <span
                            className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
                        >
                            Padhy
                        </span>
                    </p>

                    <p className="mt-10 before mb-7 text-sm text-center md:text-start">
                        Adipiscing arcu, in aliquam fringilla cursus. Elit arcu elementum
                        viverra malesuada sem ac faucibus dolor. Sagittis scelerisque.
                    </p>
                </motion.div>

                {/* Call to action */}
                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"//for initial stage
                    whileInView="visible"//final condition while we visit the page
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: .2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 }, //the position of text and condition initially
                        visible: { opacity: 1, x: 0 }//the final position  and condition
                    }}>
                    <AnchorLink
                        className="bg-gradient-rainblue text-deep-blue py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                    >
                        Contact me
                    </AnchorLink>
                    <AnchorLink
                        className="bg-gradient-rainblue rounded-r-sm py-0.5 pr-0.5"
                    >
                        <div
                            className="bg-deep-blue hover:text-red transition: duratin-500 w-full h-full 
                        flex items-center justify-center font-playfair px-10">
                            Let's talk

                        </div>
                    </AnchorLink>
                </motion.div>
                {/* Social media */}
                <motion.div
                    initial="hidden"//for initial stage
                    whileInView="visible"//final condition while we visit the page
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 }, //the position of text and condition initially
                        visible: { opacity: 1, x: 0 }//the final position  and condition
                    }}
                >
                <SocialMediaIcons/>
                </motion.div>
            </div>

        </section>
    )
}
export default Landing;