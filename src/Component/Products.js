import React,{Component} from 'react';
import Product from "./Product";
class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            productsInfo:[{title:"Phone",desc:"Apple Iphone"},
            {title:"Phone2",desc:"Apple Iphone2"}]
        }
    }
    componentDidMount(){
        let list=[...this.state.productsInfo];
        var keys=Object.keys(localStorage),n=keys.length,i=0;
        while(i<n)
            list.push(JSON.parse(localStorage.getItem(keys[i])));
        this.setState({productsInfo:list});
    }
    render(){
        return (
            <div>
                {this.state.productsInfo.map(pro=>
                    <Product title={pro.title} desc={pro.desc}></Product>)}
                
            </div>
        );
    }
}
export default Products;