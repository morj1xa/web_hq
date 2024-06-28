import styles from "./tableHeader.module.css"


const TableHeader = () => {
    return (
        <>
            <div className={`flex h-20 w-full px-5 lg:px-24 font-bold text-base md:text-sm lg:text-xl xl:text-3xl `}>
                <div style={{ width: "22%" }} className="LineBlockType2 grid place-items-center  h-full ">
                    ПОЗЫВНОЙ
                </div>
                <div style={{ width: "13%" }} className="LineBlockType2 grid place-items-center  h-full">
                    СМЕРТИ
                </div>
                <div style={{ width: "13%" }} className="LineBlockType2 grid place-items-center  h-full">
                    ЗАХВАТЫ
                </div>
                <div style={{ width: "13%" }} className="LineBlockType2 grid place-items-center  h-full">
                    ВХОД
                </div>
                <div style={{ width: "13%" }} className="LineBlockType2 grid place-items-center  h-full">
                    ВЫХОД
                </div>
                <div style={{ width: "13%" }} className="LineBlockType2 grid place-items-center  h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M14 7.33333V14L17.3333 16M26 14C26 20.6275 20.6275 26 14 26C7.37259 26 2 20.6275 2 14C2 7.37259 7.37259 2 14 2C20.6275 2 26 7.37259 26 14Z" stroke="#FF6054" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div style={{ width: "13%" }} className="LineBlockType2 grid place-items-center  h-full">   
                    CARD_ID
                </div>
            </div>
        </>
    )
}

export default TableHeader;


// style={{ borderBottom: "2px solid #942D2A" }}