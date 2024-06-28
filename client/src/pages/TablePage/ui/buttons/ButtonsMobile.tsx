

import React from "react"



import { useAppDispatch, useAppSelector } from "../../../../lib/hooks"
import { toggle } from "../../../../lib/features/iconsSlice"
import { setTrue, setFalse, selectButtonState } from "../../../../lib/features/functionIcons"
import { selectModalState, toggleModal } from "../../../../lib/features/modalToggleSlice" 
import styles from "./buttons.module.css"
import { fetchStat, startRaid } from "../../../../lib/data";
import { apiEndpoints } from "../../../../lib/urls";


const ButtonsMobile = () => {

    const dispatch = useAppDispatch();
    const [confirmState, setConfirmState] = React.useState(false);

    const handleToggle = () => {
        dispatch(toggle());
    };
    
    const buttonState = useAppSelector(selectButtonState);

    const handleSetTrue = () => {
        dispatch(setTrue());
        handleToggle();
    };
  
    const handleSetFalse = () => {
        dispatch(setFalse());
        handleToggle();
    };


    const modalWindowState = useAppSelector(selectModalState);

    const buttonRef = React.useRef(null);
    const [open, setOpen] = React.useState(false);


    const [aliveState, setAliveState] = React.useState(false);
    const [playersState, setPlayersState] = React.useState(false);
    const [allPlayers, setAllPlayers] = React.useState(0);
    const [alive, setAlive] = React.useState(0);


    const apiReq = async () => {
        const stat = await fetchStat(apiEndpoints.playersStat);
        setAllPlayers(stat.playerCount)
        setAlive(stat.alivePlayers)
    }


  
    const [enabled, setEnabled] = React.useState(false);
    const [timer, setTimer] = React.useState(0);
    const [countDown, setCountDown] = React.useState(10);

    const toggleTimer = () => {
        setEnabled((e) => !e)
        setConfirmState(!confirmState)
        setTimer(0)
        setCountDown(5)
        setOpen(!open)
    }

    React.useEffect(() => {
        if (!enabled) return;
        const i = setInterval(() => {
            setTimer((t) => t + 1);
            setCountDown((c) => Math.max(c-1, 0));
        }, 1000)

        return () => {
            clearInterval(i)
        }
    }, [enabled])

    const start =  async () => {await startRaid(apiEndpoints.startRaid);}


    React.useEffect(() => {
        if (countDown===0) {
            start();
            setConfirmState(!confirmState)
            setOpen((prevOpen) => !prevOpen);
        }
    }, [countDown])

    React.useEffect(() => {
        apiReq();
    }, [])
    return (
        <>   

            <div className="fixed bottom-0 left-0 w-full h-36 grid place-items-center ">
                {open && (
                    <div className="absolute h-8 w-32 gap-3 mb-44 flex justify-center text-4xl">
                        <span className={styles.confirmNumber}>5</span>
                        <span className={styles.confirmNumber}>4</span>
                        <span className={styles.confirmNumber}>3</span>
                        <span className={styles.confirmNumber}>2</span>
                        <span className={styles.confirmNumber}>1</span>
                    </div>
                )}
                <div ref={buttonRef} style={{ border:"2px solid #942D2A", boxShadow: "0px 0px 14px 5px #E0554C" }} className="w-4/6 h-16 bg-[#21070B] rounded-xl flex justify-around place-items-center">
                    <div className="h-14 w-14 grid place-items-center" onClick={() => setAliveState(!aliveState)}>
                        {
                            (!aliveState) ?
                            (
                                <>
                                    <svg width="24" height="24" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.6525 0C23.1489 0 25.1915 1.85625 25.1915 4.125C25.1915 5.98125 23.8298 7.63125 21.7872 8.04375V8.25C22.695 8.25 23.3759 8.6625 24.0567 9.28125L27.0071 11.9625C27.234 12.1688 27.6879 12.375 28.1418 12.375H32V0H20.6525Z" fill="#FF6054"/>
                                        <path d="M24.7376 29.9063L16.1135 20.625V25.7813C16.1135 27.4313 14.5248 28.875 12.7092 28.875H4.76596C3.40425 28.875 2.49645 28.05 2.49645 26.8125C2.49645 25.575 3.40425 24.75 4.76596 24.75H10.4397C11.1206 24.75 11.5745 24.3375 11.5745 23.7188V19.5938C11.5745 18.15 11.8014 16.9125 12.4823 15.4688L14.0709 12.375H12.2553C11.1206 12.375 10.2128 12.7875 9.53191 13.6125L8.39716 15.0563C7.94326 15.8813 6.80851 16.0875 5.67376 15.675C4.76596 15.0563 4.31206 13.8188 5.21986 12.9938L6.58156 11.3438C8.17021 9.28125 10.8936 8.25 13.617 8.25H18.156L18.383 7.63125C17.0213 7.0125 16.1135 5.56875 16.1135 4.125C16.1135 1.85625 18.156 0 20.6525 0H4.76596V10.1063L3.40426 11.7563C2.7234 12.5813 2.2695 13.6125 2.49645 14.85C2.7234 15.8813 3.40426 16.9125 4.53901 17.5313V22.6875C2.04255 22.6875 0 24.5438 0 26.8125C0 29.0813 2.04255 30.9375 4.53901 30.9375V33H30.8652C28.3688 33 26.0993 31.7625 24.7376 29.9063Z" fill="#FF6054"/>
                                        <path d="M23.8298 15.0563L22.2411 13.4063L20.8794 16.5C20.4255 17.5313 20.1986 18.3563 20.8794 19.1813L32 31.7625V16.5H27.234C25.8723 16.5 24.7376 16.0875 23.8298 15.0563Z" fill="#FF6054"/>
                                    </svg>
                                </>
                            ) :
                            (
                                <>
                                    <span className="font-bold text-s">{allPlayers}</span>
                                </>
                            )
                        }
                    </div>
                    
                   
                    <div className="h-14 w-14 grid place-items-center " onClick={() => setPlayersState(!playersState)}>
                        {
                            (!playersState) ?
                            (
                                <>
                                    <svg width="24" height="24" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_94_49)">
                                    <path d="M14.0264 0C5.46439 0 -1.79458 8.60673 0.393942 17.0518C0.9266 19.109 1.48804 20.9969 2.14101 22.6855C1.10739 23.8577 1.55402 26.1212 2.53751 27.2138C3.14068 27.8834 4.48833 29.0347 5.61898 29.5033C6.53359 29.3667 9.20917 29.2129 9.04358 32.1014C9.35373 32.2301 9.67844 32.3417 10.0132 32.4426V31.3005H10.4165V32.5552C10.9585 32.6961 11.5254 32.8053 12.1163 32.8782V31.3005H12.5183V32.9185C13.0659 32.9713 13.6273 33 14.2039 33C14.2088 33 14.214 33 14.2188 33V31.2998H14.6215V32.9921C15.1952 32.9795 15.7579 32.9439 16.2993 32.8769V31.2998H16.7029V32.8178C17.2653 32.733 17.8054 32.6172 18.3197 32.4674V31.3005H18.7223V32.3403C18.9536 32.2625 19.1787 32.1803 19.397 32.0879C18.9471 28.4783 22.5218 29.0829 23.0295 29.1862C24.1986 28.7859 25.6815 27.5256 26.3228 26.8142C27.3458 25.6796 27.7927 23.2732 26.5929 22.1489C26.5524 22.111 26.5055 22.0846 26.4632 22.0476C26.9088 20.7243 27.3024 19.275 27.6682 17.6963C29.6342 9.19446 22.5881 0 14.0264 0ZM10.7441 21.6506C9.27288 22.7383 7.67458 24.8342 5.71309 23.6181C3.75095 22.4021 3.70568 17.9388 4.85702 16.1677C5.84569 14.6454 11.5135 15.0137 12.2434 16.2911C12.9737 17.5682 12.215 20.563 10.7441 21.6506ZM15.9743 27.0131C15.7938 27.5672 14.6716 26.8382 14.169 26.4779C13.6671 26.8382 12.5442 27.5675 12.3634 27.0131C12.1293 26.2954 13.593 21.8209 13.7693 21.4596C13.8217 21.352 13.9003 21.2599 13.984 21.1929C14.0261 21.1223 14.0862 21.0943 14.1561 21.1012C14.1609 21.1002 14.1645 21.1019 14.1693 21.1012C14.1739 21.1019 14.1777 21.1002 14.1826 21.1012C14.2524 21.0943 14.3126 21.1226 14.355 21.1933C14.4391 21.2596 14.5173 21.3517 14.5687 21.4596C14.744 21.8206 16.2088 26.2957 15.9743 27.0131ZM22.9538 23.262C21.0755 24.6081 19.3439 22.6248 17.8054 21.6407C16.266 20.6567 15.3145 17.7187 15.9607 16.3944C16.6056 15.0708 22.2372 14.318 23.3228 15.7691C24.5858 17.4587 24.8309 21.9146 22.9538 23.262Z" fill="#FF6054"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_94_49">
                                    <rect width="28" height="33" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                </>
                            ) :
                            (
                                <>
                                    <span className="font-bold text-s">{alive}</span>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ButtonsMobile;