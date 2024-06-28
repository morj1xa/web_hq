

import styles from "../slider.module.css"
import React, { useRef }  from "react";

import FirstStringMobile from "./Strings/FirstColumnString";
import SecondStringMobile from "./Strings/SecondColumnString";
import ThirdStringMobile from "./Strings/ThirdStringMobile";
import ButtonsMobile from "../buttons/ButtonsMobile";

import { selectButtonState } from "../../../../lib/features/functionIcons"

import { useAppSelector } from "../../../../lib/hooks"
import { fetchData } from "../../../../lib/data";
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

export default function TableMobile() {

    const [data, setData] = React.useState<Person[]>([]);
    const firstSectionRef = useRef<HTMLMapElement>(null);
    const secondSectionRef = useRef<HTMLMapElement>(null);

    const toggleValue = useAppSelector(state => state.icons.value);

    const buttonState = useAppSelector(selectButtonState);

    const apiReq = async () => {
        setData(await fetchData(apiEndpoints.getDataMobile));
    }

    const handleScroll = (ref: React.RefObject<HTMLMapElement>) => {
        if (ref.current) {
          const { scrollLeft } = ref.current;
          if (firstSectionRef.current && secondSectionRef.current) {
            firstSectionRef.current.scrollLeft = scrollLeft;
            secondSectionRef.current.scrollLeft = scrollLeft;
          }
        }
    };

    

    React.useEffect(() => {
        apiReq();
    }, [])

    return (
        <>
            <main style={{ borderBottom: "2px solid #942D2A" }} className={`${styles.scrollSectionHead}`} ref={firstSectionRef}  onScroll={() => handleScroll(firstSectionRef)}>
                <div className={styles.sliderElement}>
                    <div className=" w-full flex h-full place-items-center justify-center">
                        <div style={{ border: "2px solid #942D2A" }}  className=" w-6/12 h-full flex justify-center items-center">
                            ПОЗЫВНОЙ
                        </div>
                        <div  style={{ border: "2px solid #942D2A" }} className=" w-6/12 h-full flex justify-center items-center">
                            СМЕРТИ
                        </div>
                    </div>
                </div>
                <div className={styles.sliderElement}>
                    <div className=" w-full flex h-full place-items-center justify-center">
                        <div style={{ border: "2px solid #942D2A" }}  className=" w-6/12 h-full flex justify-center items-center">
                            ЗАХВАТЫ
                        </div>
                        <div  style={{ border: "2px solid #942D2A" }} className=" w-6/12 h-full flex justify-center items-center">
                            ВХОД
                        </div>
                    </div>
                </div>
                
                <div className={styles.sliderElement}>
                    <div className=" w-full flex h-full place-items-center justify-center">
                        <div style={{ border: "2px solid #942D2A" }}  className=" w-6/12 h-full flex justify-center items-center">
                            ВЫХОД
                        </div>
                        <div  style={{ border: "2px solid #942D2A" }} className=" w-6/12 h-full flex justify-center items-center">
                            CARD_ID
                        </div>
                    </div>
                </div>
            </main>
            <main id="content" className={styles.scrollSection} ref={secondSectionRef} onScroll={() => handleScroll(secondSectionRef)} >
                <div className={styles.sliderElement}>
                    {
                       
                        data.map((person, index) => (
                            (person.Status!==null) ?
                                (
                                            
                                <div className="h-24 block" key={index}>
                                    <FirstStringMobile name={person.Alias} death={person.DeathNumber} id={person.CardId}  isAlive={person.Status} activeIcons={buttonState.value} funcActive={toggleValue}/>
                                </div>
                                )
                                : (<></>)
                            )
                                     
                        )
                    }
                </div>
                <div className={styles.sliderElement}>
                    {
                        data.map((person, index) => (
                            (person.Status!==null) ?
                                (
                                            
                                <div className="h-24 block" key={index}>
                                    <SecondStringMobile  enter={person.EntryTime} gribs={person.count} isAlive={person.Status}/>
                                </div>  
                                )
                                : (<></>)
                            )
                                     
                        )
                    }

                </div>
                <div className={styles.sliderElement}>
                    {
                        data.map((person, index) => (
                            (person.Status!==null) ?
                                (
                                    <div className="h-24 block" key={index}>
                                        <ThirdStringMobile time={person.minutes} id={person.CardId} isAlive={person.Status} activeIcons={true} func={false} exit={person.ExitTime}/>
                                    </div>  
                                )
                                : (<></>)
                                )
                                            
                        )
                    }
                </div>
            
            </main>
            <div className="w-full h-32">
                <ButtonsMobile />
            </div>
        </>
    )
}








