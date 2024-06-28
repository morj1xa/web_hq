
import React from "react";
import TableString from "./TableString";
import { selectButtonState } from "../../../../lib/features/functionIcons"
import { fetchData } from "../../../../lib/data";
import { useAppSelector } from "../../../../lib/hooks"
import { apiEndpoints } from "../../../../lib/urls";

interface Person {
    CardId: string;
    Alias: string;
    DeathNumber: number;
    count: number;
    EntryTime: string;
    ExitTime: string;
    minutes: string;
    Status: boolean;
}

const Table = () => {

    const [data, setData] = React.useState<Person[]>([]);

    const toggleValue = useAppSelector(state => state.icons.value);

    const buttonState = useAppSelector(selectButtonState);

    const apiReq = async () => {
        setData(await fetchData(apiEndpoints.getDataDesktop));
    }

    

    React.useEffect(() => {
        apiReq();
        setInterval(() => apiReq(), 5000); 
        console.log(data)
    }, [])

    return (
        <>  
            <div style={{ height: "60vh", overflowY: "scroll" }} className="w-full flex flex-col px-5 lg:px-24 tab">
                {
                    data.map((person, index) => (
                 
                                (person.Status!==null) ?
                                (
                                    <div className="h-20  w-full">
                                        <TableString
                                            id={person.CardId}
                                            nick={person.Alias}
                                            death={person.DeathNumber}
                                            grips={person.count}
                                            EntryTime={person.EntryTime}
                                            ExitTime={person.ExitTime}
                                            time={person.minutes}
                                            status={person.Status}
                                            func={buttonState.value}
                                            activeIcons={toggleValue}
                                        />
                                    </div>
                                )
                                : (<></>)
                                )
                            
                            
                    )
                }
            </div>
        </>
    )
}

export default Table;