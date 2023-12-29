import React, { Component } from 'react'
import ProductService from '../services/ProductService'

// This component is used to add the product data
class AddProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            productId: 0,
            productName: '',
            productDescription: '',
            productNameError:'',
            productDescriptionError:''
        }
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this)
        this.changeProductDescriptionHandler = this.changeProductDescriptionHandler.bind(this)
        this.saveProduct = this.saveProduct.bind(this)
        this.validate=this.validate.bind(this) 
    }
    // This method will validate the incoming product data and display appropriate error message
    validate=()=>{
        let productNameError='';
        let productDescriptionError='';
        if(!this.state.productName){
            productNameError="Product name should not be blank";
        }
        if(this.state.productName.length>15){
            productNameError=" Length of Product Name should not be more than 15";
        }
        if(this.state.productDescription.length>30){
            productDescriptionError=" Length of Product Description should not be more than 30";
        }

        if(!this.state.productDescription){
            productDescriptionError="Product Description should not be blank";
        }

        if(productNameError || productDescriptionError ){
            this.setState({
                productNameError,productDescriptionError
            });
            return false;

        }
        return true;
    }
    // This method will set the new product name 
    changeProductNameHandler = (event) => {
        this.setState({
            productName: event.target.value,
            productNameError:''
        })
    }
     // This method will set the new product description
    changeProductDescriptionHandler = (event) => {
        this.setState({
            productDescription: event.target.value,
            productDescriptionError:''
        })
    }

    // This method will save and send the data to the backend.
    saveProduct = (event) => {
        event.preventDefault()
        const isValid = this.validate();
        if(isValid){
            this.setState({
            productNameError:''

        })
        alert(`Product is added succesfully`);
        const product = {
            productId: this.state.productId,
            productName: this.state.productName,
            productDescription: this.state.productDescription
           
        }

        ProductService.createProduct(product).then(res => {
            this.props.history.push('/products')
        })
        console.log(product)
    }
    else { 
        alert('Product Data is not matching the condition')

    }
    
}
    //This method will redirect you to the list of products page.
    cancel() {
        this.props.history.push('/products')
    }
   
    render() {
        return (
            <div className="bg-image" >
               
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="card text-black col-10 col-md-8 col-lg-6">
                        {/* <img className = "card-img-top" src = "https://www.bellemoreoptometry.com/uploads/jPWlOC31/727x0_1140x0/Eyeglasses.jpeg" alt = "Add Product card image"></img> */}
                            {/* <div className = "card-img-overlay"> */}
                            <h1 className="text-center">Add Product</h1>
                            <div className="card-body">
                                <form onSubmit={this.saveProduct}>
                                    <div className="form-group">
                                        <label>Product Name: </label>
                                        <div style={{fontSize:"8",color:"red"}}>{this.state.productNameError}</div>
                                        <input placeholder="Enter the Product Name" name="productName" className="form-control" value={this.state.productName}
                                        onChange={this.changeProductNameHandler} pattern="[A-Z][A-Za-z0-9\s]*$" minLength="3"/>
                                            <br></br>
                                    </div>
                                    <br></br>
                                
                                    <div className="form-group">
                                        <label>Product Description: </label>
                                        <div style={{fontSize:"8",color:"red"}}>{this.state.productDescriptionError}</div>
                                        <input placeholder="Enter the Product Description" name="Product Description" className="form-control" value={this.state.productDescription}
                                        onChange={this.changeProductDescriptionHandler} pattern="[A-Z][A-Za-z0-9-.\s]*$" minLength="5" />
                                        {/* pattern="[A-Z][A-Za-z0-9-.\s]*$" */}
                                    </div>
                                    <br />
                                    
                                    <button className="btn btn-success" type="submit"><strong>Save</strong></button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}><strong>Cancel</strong></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
               </div>
           
            
        )
    }
}

export default AddProduct

