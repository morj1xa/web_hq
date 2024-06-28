
export default function SecondStringMobile({enter, gribs, isAlive} : {enter:string, gribs:number, isAlive:boolean}) {
    return(
        <>
            <div className="w-full flex h-24">
                <div style={{ width: "50%", borderBottom: "2px solid #942D2A", borderRight: "2px solid #942D2A" }} className={`text-xl grid place-items-center  h-full ${isAlive ? 'text-[#FF6054]' : 'text-[#942D2A]'}`}>
                    {gribs}
                </div>
                <div style={{ width: "50%", borderBottom: "2px solid #942D2A", borderRight: "2px solid #942D2A" }} className={`text-xl grid place-items-center  h-full ${isAlive ? 'text-[#FF6054]' : 'text-[#942D2A]'}`}>
                    {enter}
                </div>
            </div>          
        </>
    )
}