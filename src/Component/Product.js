import React from 'react';

class Product extends React.Component{
    render(props){
        return (<div><h1>{this.props.title}</h1><h2>{this.props.desc}</h2></div>);
    }
}

export default Product;