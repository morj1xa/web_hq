

export default function ThirdStringMobile({id, time, isAlive, activeIcons, func, exit} : {id:string, time:string, isAlive:boolean,  activeIcons:boolean, func:boolean, exit: string}) {
    return(
        <>
            <div className="w-full flex h-24">
                 <div  style={{ width: "50%", borderBottom: "2px solid #942D2A", borderRight: "2px solid #942D2A" }}className={`grid place-items-center   h-full ${isAlive ? 'text-[#FF6054]' : 'text-[#942D2A]'}`}>
                    {exit}
                </div>
                <div  style={{ width: "50%", borderBottom: "2px solid #942D2A", borderRight: "2px solid #942D2A" }}className={`grid place-items-center   h-full ${isAlive ? 'text-[#FF6054]' : 'text-[#942D2A]'}`}>
                    {id}
                </div>
            </div>          
        </>
    )
}