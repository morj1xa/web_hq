
import React, { useEffect, useState } from 'react';


export default function Test() {

    const [data, setData] = useState(null);

    const fetchData = async ( ) => {
        try {
            const response = await fetch('http://194.226.199.230:26108/api/getData');
            const data = await response.json();
            console.log(data); // здесь можно увидеть данные из ответа
            setData(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
        </>
    )
}