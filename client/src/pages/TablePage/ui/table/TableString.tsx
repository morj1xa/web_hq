
import { Modal } from "@gravity-ui/uikit"; 
import ModalWindow from "../modal/Modal";
import { selectModalState, toggleModal } from "../../../../lib/features/modalToggleSlice" 
import { useAppSelector, useAppDispatch } from "../../../../lib/hooks";
import React from "react";
import { setName } from "../../../../lib/features/nameStateSlice"; 
import { setId } from "../../../../lib/features/idStateSlice"; 


const IdFunctionalBlock = ({ id, name, status, func }: { id:string, name:string, status: boolean; func: boolean }) => {

    const modalWindowState = useAppSelector(selectModalState);

    const dispatch = useAppDispatch();

    const handleModalData = () => {
        dispatch(setName(name));
        dispatch(setId(id))
        dispatch(toggleModal());
    }

    return (
        <>  
            {
                func ? 
                <>
                    <Modal children={ModalWindow()} open={modalWindowState.value} onClose={() => dispatch(toggleModal())}></Modal>
                    <div  style={{ width: "22%" }} className=" flex items-center pl-5  items-center justify-start text-base md:text-sm lg:text-xl xl:text-3xl h-full">
                        <div onClick={handleModalData} className="flex items-center flex-items absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M9.32084 2.17289H4.80381C3.47236 2.17289 2.80662 2.17289 2.29807 2.4294C1.85073 2.65503 1.48704 3.01505 1.25912 3.45786C1 3.96129 1 4.6203 1 5.93831V17.2346C1 18.5526 1 19.2117 1.25912 19.7151C1.48704 20.1578 1.85073 20.5179 2.29807 20.7435C2.80662 21 3.47236 21 4.80381 21H16.2152C17.5467 21 18.2125 21 18.721 20.7435C19.1683 20.5179 19.5321 20.1578 19.7599 19.7151C20.0191 19.2117 20.0191 18.5526 20.0191 17.2346V12.1748M14.67 3.93793L18.032 7.26613M9.03876 9.51229L16.9415 1.68929C17.8699 0.770236 19.3753 0.770236 20.3036 1.68929C21.2321 2.60835 21.2321 4.09843 20.3036 5.01749L12.1468 13.0919C11.2415 13.9882 10.7889 14.4363 10.2732 14.7926C9.81557 15.109 9.32191 15.3709 8.80257 15.5733C8.21738 15.8014 7.58984 15.9267 6.33476 16.1774L5.75477 16.2932L5.81117 15.9023C6.01076 14.5194 6.11056 13.8278 6.33757 13.1822C6.539 12.6092 6.81419 12.0645 7.1563 11.5613C7.54186 10.9941 8.04085 10.5001 9.03876 9.51229Z" stroke="#FF6054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <span className={`w-full flex justify-center ${status ? 'text-[#FF6054]' : 'text-[#942D2A]'}`}>{name}</span>
                    </div>
                </> :
                <> 
                    <div style={{ width: "22%" }} className="flex items-center pl-5 justify-start text-base md:text-sm lg:text-xl xl:text-3xl h-full relative">
                        <div  className="flex items-center flex-items absolute">
                            <svg className="w-4 h-4 lg:w-6 lg:h-6" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
                                <g clipPath="url(#clip0_1033_372)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.40001 18.856H10.8V9.71317H8.40001V18.856ZM13.2 18.856H15.6V9.71317H13.2V18.856ZM6 21.1417H18V7.42746H6V21.1417ZM8.40001 5.14174H15.6V2.85603H8.40001V5.14174ZM18 5.14174V0.570312H6V5.14174H0V7.42746H3.6V23.4275H20.4V7.42746H24V5.14174H18Z" fill="#FF6054"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1033_372">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <span className={`w-full flex justify-center ${status ? 'text-[#FF6054]' : 'text-[#942D2A]'}`}>{name}</span>
                    </div>
                </>
            }
        </>
    )
}



const TableString = ({ id, nick, death, grips, EntryTime, ExitTime, time, status, func, activeIcons }: { id:string, nick:string, death:number, grips:number, EntryTime:string, ExitTime:string, time:string, status: boolean; func: boolean, activeIcons: boolean } ) => {

    return (
        <>
            <div  className='h-20 flex w-full font-bold text-base md:text-sm lg:text-xl xl:text-3xl LineBlockType1'>
                    {
                        activeIcons ? (<IdFunctionalBlock id={id} name={nick} status={status} func={func}/>) : (
                            <>
                               <div style={{ width: "22%" }} className="flex items-center justify-start text-base md:text-sm lg:text-xl xl:text-3xl h-full relative LineBlockType2">
                                    <div className="flex items-center flex-items absolute pl-5 ">
                                        {
                                        status ? "" :
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 28 32" fill="none">
                                                <g clipPath="url(#clip0_1033_184)">
                                                <path d="M14.0264 0C5.46439 0 -1.79458 8.34592 0.393942 16.535C0.9266 18.5299 1.48804 20.3606 2.14101 21.9981C1.10739 23.1347 1.55402 25.3296 2.53751 26.3891C3.14068 27.0384 4.48833 28.1549 5.61898 28.6093C6.53359 28.4768 9.20917 28.3277 9.04358 31.1286C9.35373 31.2534 9.67844 31.3616 10.0132 31.4595V30.352H10.4165V31.5686C10.9585 31.7053 11.5254 31.8112 12.1163 31.8819V30.352H12.5183V31.921C13.0659 31.9722 13.6273 32 14.2039 32C14.2088 32 14.214 32 14.2188 32V30.3514H14.6215V31.9923C15.1952 31.9802 15.7579 31.9456 16.2993 31.8806V30.3514H16.7029V31.8234C17.2653 31.7411 17.8054 31.6288 18.3197 31.4835V30.352H18.7223V31.3603C18.9536 31.2848 19.1787 31.2051 19.397 31.1155C18.9471 27.6154 22.5218 28.2016 23.0295 28.3018C24.1986 27.9136 25.6815 26.6915 26.3228 26.0016C27.3458 24.9014 27.7927 22.568 26.5929 21.4778C26.5524 21.441 26.5055 21.4154 26.4632 21.3795C26.9088 20.0963 27.3024 18.6909 27.6682 17.16C29.6342 8.91584 22.5881 0 14.0264 0ZM10.7441 20.9946C9.27288 22.0493 7.67458 24.0816 5.71309 22.9024C3.75095 21.7232 3.70568 17.3952 4.85702 15.6778C5.84569 14.2016 11.5135 14.5587 12.2434 15.7974C12.9737 17.0358 12.215 19.9398 10.7441 20.9946ZM15.9743 26.1946C15.7938 26.7318 14.6716 26.025 14.169 25.6755C13.6671 26.025 12.5442 26.7322 12.3634 26.1946C12.1293 25.4986 13.593 21.1597 13.7693 20.8093C13.8217 20.705 13.9003 20.6157 13.984 20.5507C14.0261 20.4822 14.0862 20.455 14.1561 20.4618C14.1609 20.4608 14.1645 20.4624 14.1693 20.4618C14.1739 20.4624 14.1777 20.4608 14.1826 20.4618C14.2524 20.455 14.3126 20.4826 14.355 20.551C14.4391 20.6154 14.5173 20.7046 14.5687 20.8093C14.744 21.1594 16.2088 25.4989 15.9743 26.1946ZM22.9538 22.5571C21.0755 23.8624 19.3439 21.9392 17.8054 20.985C16.266 20.0307 15.3145 17.1818 15.9607 15.8976C16.6056 14.6141 22.2372 13.8842 23.3228 15.2912C24.5858 16.9296 24.8309 21.2506 22.9538 22.5571Z" fill="#942D2A"/>
                                                </g>
                                                    <defs>
                                                    <clipPath id="clip0_1033_184">
                                                        <rect width="28" height="32" fill="white"/>
                                                    </clipPath>
                                                    </defs>
                                            </svg>
                                        }
                                    </div>
                                    <span className={`w-full flex justify-center ${status ? 'text-[#FF6054]' : 'text-[#942D2A]'}`}>{nick}</span>
                                </div>
                            </>
                        )
                    }
                    
                    <div style={{ width: "13%" }} className={`LineBlockType2 grid place-items-center  h-full ${status ? 'text-[#FF6054]' : 'text-[#942D2A]'}`}>
                        {death}
                    </div>
                    <div style={{ width: "13%" }} className={`LineBlockType2 grid place-items-center  h-full ${status ? 'text-[#FF6054]' : 'text-[#942D2A]'}`}>
                        {grips}
                    </div>
                    <div style={{ width: "13%" }} className={`LineBlockType2 grid place-items-center  h-full ${status ? 'text-[#FF6054]' : 'text-[#942D2A]'}`}>
                        {EntryTime}
                    </div>
                    <div style={{ width: "13%" }} className={`LineBlockType2 grid place-items-center  h-full ${status ? 'text-[#FF6054]' : 'text-[#942D2A]'}`}>
                        {ExitTime}
                    </div>
                    <div style={{ width: "13%" }} className={`LineBlockType2 grid place-items-center  h-full ${status ? 'text-[#FF6054]' : 'text-[#942D2A]'}`}>
                        {time}
                    </div>
                    
                    <div style={{ width: "13%"}} className={`LineBlockType2 grid place-items-center  h-full ${status ? 'text-[#FF6054]' : 'text-[#942D2A]'}`}>
                        {id}
                    </div>
            </div>
        </>
    )
}


export default TableString;