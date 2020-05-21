import React from 'react';
import './Product.css';
class Product extends React.Component{
    render(props){
        return (	
        <div className="card">
            <div className="card-horizontal">
                <div className="img-square-wrapper">
                    <img src={this.props.pro_img} alt="Loading"/>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{this.props.title}</h2><small>
                    <h4 className="card-text">{this.props.desc}</h4></small>
                    <div className="footer"><button>Add To Cart</button></div>
                </div>
            </div>
        </div>);
    }
}

export default Product;