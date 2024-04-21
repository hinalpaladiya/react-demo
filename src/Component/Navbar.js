import React from 'react'

function Navbar({ filterItem, menuList }) {
    return (
        <div>
            <nav>
                <div>
                    {menuList.map((curEle) => {
                        return (
                            <button onClick={() => { filterItem(curEle) }}>{curEle}</button>
                        )
                    })}

                    {/* <button onClick={() => { filterItem('lunch') }}>lunch</button>
                    <button onClick={() => { filterItem('dinner') }}>dinner</button> */}
                    {/* <button onClick={() => { setMenuData(Menu) }}>All</button> */}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
