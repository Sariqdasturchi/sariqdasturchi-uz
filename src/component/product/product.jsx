import React, { Component } from 'react';
import './product.css';
import image from './psychology.png'


class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {title: "Frontend", price:"100 000", image:`<img src='./psychology.png' />`},
                {title: "Backend", price:"100 000", image:`<img src={image} />`},
                {title: "Kompyuter-Savodxonligi", price:"100 000", image:`<img src={image} />`},
                {title: "3D-Max, Autocad", price:"100 000", image:`<img src={image} />`},
                {title: "Grafig dizayn", price:"100 000", image:`<img src={image} />`},
            ]
        }
    }
    render() {
        const {data} = this.state
        return (
            <div className='product-items'>
                {
                    data.map((item) => (
                        <div className="product-item">
                            <div className="product-img">
                                <img src={image} alt="Product-image" />
                            </div>
                            <div className="product-title">
                                <h3>{item.title}</h3>
                            </div>
                            <div className="product-price">
                                <p>{item.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Product;

