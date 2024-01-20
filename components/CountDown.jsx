import { default as ReactCountdown } from "react-countdown";
import { useEffect, useState } from "react";

const Countdown = ({ nextTime }) => {
    const renderer = ({ days, hours, minutes, seconds }) => {
        return (
            <>
                <p className='text-fontpink text-base 2xmd:text-xl'>{days} : {hours} : {minutes} : {seconds}</p>
            </>
        );
    };

    const update = () => {
        console.log("finished countdown");
    };

    return (
        <ReactCountdown
            key={nextTime}
            date={nextTime}
            renderer={renderer}
            onComplete={update} 
        />
    );
};

export default Countdown;
