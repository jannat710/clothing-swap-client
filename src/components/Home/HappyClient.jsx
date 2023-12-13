import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const HappyClient = () => {
    const [counter, setCounter] = useState(false);
    return (
        <div className="bg-[#D11752] w-full mx-auto my-10 text-white p-10">
                    <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                <div>
                    <p>Happy Clients</p>
                    <p>{counter &&
                        <CountUp start={0} end={1000} duration={2} delay={0}></CountUp>}
                        +
                    </p>

                </div>
        </ScrollTrigger>

            
        </div>
    );
};

export default HappyClient;