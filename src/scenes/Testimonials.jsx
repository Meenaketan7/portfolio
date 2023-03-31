import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
    // const testimonialStyle = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
    // before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 `
    return (
        <section id="testimonials" className="pt-32 pb-16">
            {/* HEADING */}
            <motion.div
                className="md:w-1/3 text-center md:text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <p className="font-playfair font-semibold text-4xl mb-5 text-red">
                    TESTIMONIALS
                </p>
                <LineGradient width="mx-auto w-3/8" />
                <p className="mt-10">
                    Hi! I am Meenaketa Padhy.Here's What People are Saying About<span className="text-blue">MY WORK</span>.
                </p>
            </motion.div>

            {/* TESTIMONIALS */}
            <div className="md:flex md:justify-between gap-8">
                <motion.div
                    className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
                    before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    <p className="font-playfair text-6xl">“</p>
                    <p className="text-center text-xl">
                    <span className="font-semibold">RE-Born Club</span><br/> I can’t say enough about how professional he is and the quality of work that he provides. I was so pleased with my sessions and final edits. 
                    </p>
                </motion.div>

                <motion.div
                    className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
                    before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    <p className="font-playfair text-6xl">“</p>
                    <p className="text-center text-xl">
                    <span className="font-semibold">Sabya</span><br/>
                    On a personal level, knowing him for nearly 4 years, I can say his work has developed and the way he has brushed up his skills over years is incredible. 
                    </p>
                </motion.div>

                <motion.div
                    className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
                    before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    <p className="font-playfair text-6xl">“</p>
                    <p className="text-center text-xl">
                        Fames odio in at. At magna ornare dictum lectus.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
export default Testimonials;