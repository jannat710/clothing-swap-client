import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const HappyClient = () => {
    const [counter, setCounter] = useState(false);
    return (
        <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
            <div style={{
                width: '100%',
                background: 'black',
                marginTop: '40px',
                color: 'white',
                padding: '40px',
            }}>
                <div>
                    <p>Happy Clients</p>
                    <p>{counter &&
                        <CountUp start={0} end={100} duration={2} delay={0}></CountUp>}
                        +
                    </p>

                </div>

            </div>
        </ScrollTrigger>

    );
};

export default HappyClient;