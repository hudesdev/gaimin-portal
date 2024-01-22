// Client-side code

import { useState, useEffect } from 'react';
const TweetButton = (props: any) => {
    const [remainingTime, setRemainingTime] = useState(0);

    useEffect(() => {
        // Calculate the remaining time until the user can tweet again
        const lastTweetTime = props.user.lastTweetTime;
        const currentTime = Date.now();
        const timeDifference = currentTime - lastTweetTime;
        const remainingTime = Math.max(0, (24 * 60 * 60 * 1000) - timeDifference);

        // Update the remaining time every second
        const intervalId = setInterval(() => {
            setRemainingTime(Math.max(0, remainingTime - 1000));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [props.user]);

    function handleTweet() {
        // Send tweet request to server
        // ...
    }

    return (
        <div>
            <button disabled={remainingTime > 0} onClick={handleTweet}>Tweet</button>
            {remainingTime > 0 && <p>You can tweet again in {remainingTime} milliseconds.</p>},
        </div>
    );
}

export default TweetButton;