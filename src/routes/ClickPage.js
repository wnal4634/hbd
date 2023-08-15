import React, { useState } from "react";
import confetti from "https://esm.run/canvas-confetti@1";
import styles from "css/ClickPage.module.css";

const ClickPage = () => {
    let [count, setCount] = useState(0);
    function onClick() {
        setCount(count + 1);
        confetti({
            particleCount: 150,
            spread: 90,
        });
    }

    return (
        <div>
            <button className={styles.button} onClick={onClick}>
                <span>🎉</span>
                <span>Like</span>
            </button>
            <div>{count}번의 축하를 받았습니다!</div>
        </div>
    );
};

export default ClickPage;
