import React from "react";
import styles from "./Tableau.module.css"
import { apiEndpoints } from "../../../lib/urls";
import { flagStart, flagStop } from "../../../lib/data";



const Tableau = () => {

  
    const [fTeamName, setFTeamName] = React.useState("")
    const [sTeamName, setSTeamName] = React.useState("")

    const [fTeamScore, setFTeamScore] = React.useState(0)
    const [sTeamScore, setSTeamScore] = React.useState(0)

    const [crownStatus, setCrownStatus] = React.useState(false)

    const [data, setData] = React.useState([])
    
    const [draw, setDraw] = React.useState(false)

    const [buttonHandler, setButtonHandler] = React.useState(false)

    const fetchData = async () => {
        try {
          const response = await fetch(apiEndpoints.flagGetData);
          const data = await response.json();
      
          setData(data)
      
          const firstTeam = data.find((item: { IdSide: number; }) => item.IdSide === 1);
          const secondTeam = data.find((item: { IdSide: number; }) => item.IdSide === 2);
      
          setFTeamName(firstTeam.SideName)
          setSTeamName(secondTeam.SideName)
      
          setFTeamScore(firstTeam.SideScore)
          setSTeamScore(secondTeam.SideScore)

          if (firstTeam.SideScore == secondTeam.SideScore) {
                setDraw(true)
          } else {
            if (firstTeam.SideScore > secondTeam.SideScore) setCrownStatus(true);
            else if (firstTeam.SideScore < secondTeam.SideScore) setCrownStatus(false);
          }
          
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };

      const startGame = async () => {
        setButtonHandler(true)
        await flagStart(apiEndpoints.flagStart)
      }
  
      const stopGame = async () => {
        setButtonHandler(false)
        await flagStop(apiEndpoints.flagStop)
        
    };

  

    React.useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.line} viewBox="0 0 1362 35" fill="none">
                        <path d="M1 34L188 1H1174L1361 34" stroke="#8A2C30"/>
                    </svg>
                    <div className={styles.content}>
                        <div className={styles.content__block}>
                            {
                                draw ? 
                                (
                                    <div className={styles.header}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="18" viewBox="0 0 27 18" fill="none">
                                            <path d="M26.1 0L19.8 5.72725L13.5 0L7.19998 5.72725L0.900018 0H0V18H27V0H26.1Z" fill="#FF504E"/>
                                        </svg>
                                        <h1 style={{ color: "rgba(84, 214, 255, 1)" }} className={styles.header__title}>{fTeamName}</h1>
                                    </div>
                                ) 
                                :
                                (
                                    <div className={styles.header}>
                                        {
                                            crownStatus ?
                                            (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="18" viewBox="0 0 27 18" fill="none">
                                                    <path d="M26.1 0L19.8 5.72725L13.5 0L7.19998 5.72725L0.900018 0H0V18H27V0H26.1Z" fill="#FF504E"/>
                                                </svg>
                                            )
                                            : 
                                            (
        
                                                <svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M26.1 0L19.8 5.72725L13.5 0L7.19998 5.72725L0.900018 0H0V18H27V0H26.1Z" fill="#341113"/>
                                                </svg>
        
                                            )
                                        }
                                        <h1 style={{ color: "rgba(84, 214, 255, 1)" }} className={styles.header__title}>{fTeamName}</h1>
                                    </div>
                                )
                            }
                           

                            <div className={styles.digits__block}>
                                <h1 style={{ color: "rgba(84, 214, 255, 1)" }} className={styles.digits}>{fTeamScore}</h1>
                            </div>
                        </div>
{/* 
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.dot_line} width="2" height="753" viewBox="0 0 2 753" fill="none">
                            <path d="M1 0V753" stroke="#8A2C30" stroke-dasharray="21 21"/>
                        </svg>
                       */}

                       <div className={styles.l}></div>

                        <div className={styles.content__block}>
                            {
                                draw ? 
                                (
                                    <div className={styles.header}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="18" viewBox="0 0 27 18" fill="none">
                                            <path d="M26.1 0L19.8 5.72725L13.5 0L7.19998 5.72725L0.900018 0H0V18H27V0H26.1Z" fill="#FF504E"/>
                                        </svg>
                                        <h1 style={{ color: "rgba(84, 255, 111, 1)" }} className={styles.header__title}>{sTeamName}</h1>
                                    </div>
                                ) 
                                :
                                (
                                    <div className={styles.header}>
                                        {
                                            !crownStatus ?
                                            (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="18" viewBox="0 0 27 18" fill="none">
                                                    <path d="M26.1 0L19.8 5.72725L13.5 0L7.19998 5.72725L0.900018 0H0V18H27V0H26.1Z" fill="#FF504E"/>
                                                </svg>
                                            )
                                            : 
                                            (
        
                                                <svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M26.1 0L19.8 5.72725L13.5 0L7.19998 5.72725L0.900018 0H0V18H27V0H26.1Z" fill="#341113"/>
                                                </svg>
        
                                            )
                                        }
                                        <h1 style={{ color: "rgba(84, 255, 111, 1)" }} className={styles.header__title}>{sTeamName}</h1>
                                    </div>
                                )
                            }

                            <div className={styles.digits__block}>
                                <h1 style={{ color: "rgba(84, 255, 111, 1)" }} className={styles.digits}>{sTeamScore}</h1>
                            </div>
                        </div>
                    </div>

                    <svg style={{ transform: "rotate(180deg)" }} xmlns="http://www.w3.org/2000/svg" className={styles.line} viewBox="0 0 1362 35" fill="none">
                        <path d="M1 34L188 1H1174L1361 34" stroke="#8A2C30"/>
                    </svg>
                    
                    <div className={styles.btns_block} style={{ width: "100%", display: "grid", placeItems: "center" }}>
                        <div className={styles.shapeStart } >
                                    {
                                        !buttonHandler ?
                                        (
                                            <button onClick={startGame}   className={`${styles.buttonSliceStart} flex justify-center gap-3  items-center`} >
                                                <span  style={{ fontWeight: '300' }} className="text-3xl">СТАРТ</span>
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 19.8035C0 20.5938 0.337517 21.2213 1.01255 21.6862C1.38499 21.8954 1.7807 22 2.19968 22C2.52556 22 2.85144 21.9186 3.17732 21.7559L20.8097 12.9699C21.1589 12.7839 21.4498 12.5166 21.6826 12.168C21.9154 11.8193 22.0201 11.4242 21.9968 10.9826C21.9735 10.5409 21.8688 10.1574 21.6826 9.83201C21.4964 9.5066 21.2054 9.2393 20.8097 9.03011L3.17732 0.244057C2.85144 0.0813523 2.52556 0 2.19968 0C1.80397 0 1.40826 0.104596 1.01255 0.313788C0.337517 0.755415 0 1.38299 0 2.19651V19.8035Z" fill="#FF6054"/>
                                                </svg>
                                            </button>
                                        ) :
                                        (
                                            <button onClick={stopGame}  className={`${styles.buttonSliceStart} flex justify-center gap-3  items-center`} >
                                                <span  style={{ fontWeight: '300' }} className="text-3xl">СТОП</span>
                                               
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.00174576 19.8037C0.00174576 20.4079 0.211236 20.9193 0.630217 21.3376C1.0492 21.756 1.57292 21.9768 2.2014 22H19.7986C20.4038 22 20.9275 21.7792 21.3698 21.3376C21.812 20.896 22.0215 20.3847 21.9983 19.8037V2.19808C21.9983 1.5938 21.7888 1.07086 21.3698 0.629268C20.9508 0.187676 20.4271 -0.0214986 19.7986 0.00174313H2.2014C1.5962 0.00174313 1.07247 0.210918 0.630217 0.629268C0.187959 1.04762 -0.021531 1.57056 0.00174576 2.19808V19.8037Z" fill="#FF6054"/>
                                                </svg>

                                            </button>
                                        )
                                    }
                                    
                             
                        </div>

                    </div>

                    <div className={styles.text_block}>
                        <span className={styles.footer_text}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="18" viewBox="0 0 27 18" fill="none">
                                        <path d="M26.1 0L19.8 5.72725L13.5 0L7.19998 5.72725L0.900018 0H0V18H27V0H26.1Z" fill="#FF504E"/>
                            </svg> - корона лидера. Показывает кто на данный момент ближе к победе
                        </span>
                    </div>
                    

                </div>

                
            </div>
           
        </>
    )
}

export default Tableau;
