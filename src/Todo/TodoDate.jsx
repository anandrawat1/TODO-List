import {useEffect, useState} from 'react';


export const TodoDate = () => {
const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        setInterval(() =>{
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();
        setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
    return () => clearInterval(setInterval)
    }, [])
    return <h2 className="date-time">{dateTime}</h2>
}