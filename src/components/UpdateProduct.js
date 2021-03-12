import React, { Component } from 'react'
import ProductService from '../services/ProductService'

// This component updates the product details
class UpdateProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            productId: '',
            productName: '',
            productDescription: '',
            productNameError: '',
            productDescriptionError: ''
        }
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this)
        this.changeProductDescriptionHandler = this.changeProductDescriptionHandler.bind(this)
        this.updateProduct = this.updateProduct.bind(this)
        this.validate = this.validate.bind(this)
    }
    // This method validates the  entered product data and displays the error messages.
    validate = () => {
        let productNameError = '';
        let productDescriptionError = '';
        if (!this.state.productName) {
            productNameError = "Product name should not be blank";
        }
        if (this.state.productName.length > 15) {
            productNameError = " Length of Product Name should not be more than 15";
        }
        if (this.state.productDescription.length > 30) {
            productDescriptionError = " Length of Product Description should not be more than 30";
        }

        if (!this.state.productDescription) {
            productDescriptionError = "Product Description should not be blank";
        }

        if (productNameError || productDescriptionError) {
            this.setState({
                productNameError, productDescriptionError
            });
            return false;

        }
        return true;
    }
    
    //  // This method will set the new product name 
    changeProductNameHandler = (event) => {
        this.setState({
            productName: event.target.value,
            productNameError: ''
        })
    }
     // This method will set the new product description
    changeProductDescriptionHandler = (event) => {
        this.setState({
            productDescription: event.target.value,
            productDescriptionError: ''
        })
    }
    componentDidMount() {
        ProductService.getProductById(this.props.match.params.productId).then((dataResponse) => {
            const product = dataResponse.data
            this.setState({
                productId: product.productId,
                productName: product.productName,
                productDescription: product.productDescription

            })
        })
    }
    // This method will send the updated data to the backend.
    updateProduct = (event) => {
        event.preventDefault()
        const isValid = this.validate();
        if (isValid) {
            this.setState({
                productNameError: ''

            })
            alert(`Product ${this.state.productId} is updated succesfully`)
            const productDetails = {
                productId: this.state.productId,
                productName: this.state.productName,
                productDescription: this.state.productDescription
            }
            ProductService.changeProduct(productDetails, this.state.productId).then(dataResponse => {
                this.props.history.push('/products')
            })

            console.log(productDetails)
        }
        else {
            alert('Product Data is not matching the condition')

        }
    }
    // This method will redirect to the list of products page
    cancel() {
        this.props.history.push('/products')
    }
    render() {
        return (
            <div className="bg-image">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="card text-black col-10 col-md-8 col-lg-6">
                            <h1 className="text-center">Update Product</h1>
                            <div className="card-body">
                                <form onSubmit={this.updateProduct}>
                                    <div className="form-group">
                                        <label>Product Name: </label>
                                        <div style={{ fontSize: "8", color: "red" }}>{this.state.productNameError}</div>
                                        <input placeholder="Product Name" name="Product Name" className="form-control" value={this.state.productName} onChange={this.changeProductNameHandler} pattern="[A-Z][A-Za-z0-9\s]*$" minLength="3" />
                                        <br></br>
                                    </div>
                                    <div className="form-group">
                                        <label>Product Description: </label>
                                        <div style={{ fontSize: "8", color: "red" }}>{this.state.productDescriptionError}</div>
                                        <input placeholder="Product Description" name="Product Description" className="form-control" value={this.state.productDescription} onChange={this.changeProductDescriptionHandler} pattern="[A-Z][A-Za-z0-9-.\s]*$" minLength="5" />
                                    </div>
                                    <br></br>
                                    <button className="btn btn-warning" type="submit"><strong>Update</strong></button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}><strong>Cancel</strong></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>

        )
    }
}

export default UpdateProduct
