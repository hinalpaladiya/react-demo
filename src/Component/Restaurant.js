// import React from 'react'
import { useState } from "react"
import Menu from "./MenuApi"
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
const uniqueList = [...new Set(Menu.map((curEle) => {
    return (curEle.category)
})), 'all']
console.log(uniqueList);
function Restaurant() {
    const [menuData, setMenuData] = useState(Menu)
    const [menuList, SetMenuList] = useState(uniqueList)
    const filterItem = (category) => {
        if(category == 'all'){
            setMenuData(Menu)
        }
        else{
            const updatatedList = Menu.filter((curEle) => {
                return curEle.category == category;
            })
            setMenuData(updatatedList)
        }
    }
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurant
