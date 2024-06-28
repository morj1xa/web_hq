import ButtonsComponent from "./ui/buttons/ButtonsComponent";
import Navbar from "./ui/navbar/Navbar";
import Table from "./ui/table/Table";
import TableHeader from "./ui/tableHeader/TableHeader";
import TableMobile from "./ui/tableMobile/tableMobile";
import useDeviceDetect from "../../lib/DeviceDetect";

const TablePageComponent = () => {

    const { isMobile } = useDeviceDetect();

    return (
        <>
          
           
            {
                isMobile ? 
                <>
                    <Navbar />
                    <TableMobile />
                </>
                : 
                <>
                    <main className='hero'>
                        <div className='container-new'>
                            <Navbar />
                            <TableHeader />
                        </div>
                    </main>
                    <main className='hero'>
                        <div className='container-new'>
                            <Table />
                            <ButtonsComponent />
                        </div>
                    </main>

                    
                </>
            } 
    </>

    )
}


export default TablePageComponent;