import React, { useEffect, useState } from "react";
import confetti from "https://esm.run/canvas-confetti@1";
import styles from "css/ClickPage.module.css";
import { dbService } from "fbase";
import { useParams, Link } from "react-router-dom";

const ClickPage = () => {
    let [count, setCount] = useState(0);
    const id = useParams();

    const [names, setNames] = useState([]);
    const getNames = async () => {
        const dbNames = await dbService.collection("names").get();
        dbNames.forEach((document) => {
            const nameObject = {
                ...document.data(),
                id: document.id,
            };
            setNames((prev) => [nameObject, ...prev]);
        });
    };
    useEffect(() => {
        getNames();
    }, []);

    function onClick() {
        setCount(count + 1);
        confetti({
            particleCount: 150,
            spread: 90,
        });
    }

    // const { id } = useParams();
    // const [loading, setLoading] = useState(true);
    // const [detail, setDetail] = useState([]);
    // const getMovie = async () => {
    //     const json = await (
    //         await fetch(
    //             `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`,
    //         )
    //     ).json();
    //     setDetail(json.data.movie);
    //     setLoading(false);
    // };
    // useEffect(() => {
    //     getMovie();
    // }, []);

    return (
        <div>
            <div>
                {names.map((name) => (
                    <div key={name.id}>
                        <h4>{name.name}</h4>
                    </div>
                ))}
            </div>
            <button className={styles.button} onClick={onClick}>
                <span>🎉</span>
                <span>Like</span>
            </button>
            <div>{count}번의 축하를 받았습니다!</div>
        </div>
    );
};

export default ClickPage;
