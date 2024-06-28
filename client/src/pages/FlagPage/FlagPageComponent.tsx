import Navbar from "../TablePage/ui/navbar/Navbar";

import styles from "./FlagPage.module.css"
import Tableau from "./ui/Tableau";

const FlagPageComponent = () => {
    return (
        <>
            <Navbar />
            <div className={styles.titleBlock} >
                <h1 className={styles.title}>
                    ЗАХВАТ ФЛАГА
                </h1>
            </div>
            <Tableau />
        
        </>
    )
}

export default FlagPageComponent;