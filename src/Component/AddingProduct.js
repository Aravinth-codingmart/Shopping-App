import React from 'react';
import './style.css';
class AddingProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:Date.now(),
            title:'',
            desc:'',
            pro_img:''
        }
    }
    AddProduct = () =>{
        console.log(this.state);
        localStorage.setItem('product-'+this.state.id,JSON.stringify(this.state));
        this.setState({...this.state,id:Date.now()});
    }
    render(){
        return(
            <div>
                <form className="AddProduct">
                    <br/>
                    <p>
                        <label>Product Title  </label><br/><input type="text" placeholder="Enter The Product Title"
                        onChange={ (e) =>{this.setState({...this.state,title:e.target.value})}}></input>
                    </p>
                    <p>
                        <label>Product Image  </label><br/><input type="text"  placeholder="Enter The Source (Ex:https://www.google.com/webhp?hl...)"
                        onChange={ (e) =>{this.setState({...this.state,pro_img:e.target.value})}}></input>
                    </p>
                    <p>
                        <label>Product Description  </label><br/><textarea row="10" cols="50" className="desc" placeholder="Enter The Description Of Product"
                        onChange={ (e) =>{this.setState({...this.state,desc:e.target.value})}}/>
                    </p>
                    <br/>
                    <button onClick={this.AddProduct}>ADD PRODUCT</button>
                </form>
            </div>
        );
    }
}

export default AddingProduct;