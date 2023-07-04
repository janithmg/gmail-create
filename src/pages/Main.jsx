import { useState } from 'react'
import Header from '../components/Header'
import SiderBar from '../components/SiderBar'


const Main = () => {
    const [openDrawer, setOpenDrawer] = useState(true);
    const toggleDrawer=()=>{
        setOpenDrawer(prevState=>!prevState);
    }
    return (
        <div>
            <Header toggleDrawer={toggleDrawer} />
            <SiderBar openDrawer={openDrawer}/>
        </div>
    )
}

export default Main
