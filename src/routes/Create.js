import User from "components/User";
import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Create = () => {
    const [name, setName] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("names").add({
            name,
            createdAt: Date.now(),
            count: 0,
        });
        setName("");
    };
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setName(value);
    };

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

    return (
        <div>
            <h1>create</h1>
            <form onSubmit={onSubmit}>
                <input
                    value={name}
                    onChange={onChange}
                    type="text"
                    placeholder="이름"
                    maxLength={30}
                />
                <input type="submit" value="Name" />
            </form>
            <User key={name.id} nameObj={name} />
        </div>
    );
};

export default Create;
