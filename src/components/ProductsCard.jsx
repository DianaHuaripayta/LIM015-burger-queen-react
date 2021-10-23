import './styleCards.css'
import React from "react"
export function ProductsCard({ product }) {
    const { id, name, price, img } = product;
    console.log(product, 'product card inside', img)
    return (
        <div className="container-cards">
            <div className="slider">
                <div className="card card-product" style={{ width: '10rem'} }>
                    <img src={img} className="card-img-top" alt='imagen' />
                    <div className="card-body">
                        <h5 className="card-title designName">{name}</h5>
                        <button className="btn btn-primary btn-block">Agregar</button>
                    </div>
                </div>
            </div>  
        </div>
    )
}
