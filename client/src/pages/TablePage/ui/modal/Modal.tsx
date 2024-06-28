

import React from "react";
import styles from "./Modal.module.css"

import { useAppSelector } from "../../../../lib/hooks"
import { selectNameState } from "../../../../lib/features/nameStateSlice"; 
import { selectIdState } from "../../../../lib/features/idStateSlice"; 

const ModalWindow = () => {

    const nameValue = useAppSelector(selectNameState);
    const idValue = useAppSelector(selectIdState)

    return (
        <>
            <div className={styles.modal}>
                <div className="flex flex-col justify-around h-full px-8">
                    <div className="w-full flex justify-center">
                        <span className="text-3xl font-bold">
                            Редактировать
                        </span>
                    </div>
                    <div className={styles.textAcive__block}>
                        <div className="flex gap-3">
                            <span>ПОЗЫВНОЙ:</span>
                            <span>{nameValue}</span>
                        </div>
                        <div className="flex gap-3">
                            <span>ID:</span>
                            <span>{idValue}</span>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <span className={styles.newName__text}>ВВЕДИТЕ НОВЫЙ ПОЗЫВНОЙ</span>
                    </div>
                    <div className="w-full h-12 border-[#FF504E] border-2 flex justify-center border-solid">
                        <input type="text" className="px-4 w-full h-full bg-[#371111] font-bold text-[#FF504E]" />
                    </div>
                    <div className="w-full flex justify-center">
                        <div className={styles.shapeAdd}>
                            <button  className={`${styles.buttonSliceAdd}`}>
                                <span style={{ fontSize: "20px" }} className="font-bold">+ ДОБАВИТЬ</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalWindow;