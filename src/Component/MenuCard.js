import React from 'react'

function MenuCard({ menuData }) {
    return (
        <>
            {menuData.map((curEle) => {
                const { id, name, category, image, description } = curEle
                return (
                    <div className="card-container" key={id}>
                        <div className="card">
                            <div className="card-body">
                                <span className="card-number card-subtitle subtitle">
                                    {id}
                                </span>
                                <span style={{ color: 'red' }}>{name}</span>
                                <h2 className="card-title">{category}</h2>
                                <span className="card-description">
                                    {description}
                                </span>
                                <div className="card-read">
                                    Read
                                </div>
                                <img src={image} alt="image" className="card-media" width='10%' height='10%' />
                                <span className="card-tag">Order Now</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default MenuCard
