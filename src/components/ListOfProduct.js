import React, { Component } from 'react'
import ProductService from '../services/ProductService'
import {Link} from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'

//This component displays all the product details
class ListOfProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: []
        }
        this.addProduct = this.addProduct.bind(this)
        this.updateProduct = this.updateProduct.bind(this)
        this.removeProduct = this.removeProduct.bind(this)
    }
    componentDidMount(){
        ProductService.getProduct().then((response) => {
            // console.log(response.data)
            this.setState({
                product : response.data
            })
        })
         }

    // This function will send the id to the url of the update method.
    updateProduct(productId){
        this.props.history.push(`/updateProduct/${productId}`)
    }
    // This function will redirect to add product component.
    addProduct(){
        this.props.history.push('/add-product')
    }
    //This function will remove the product record from the backend.
    removeProduct(productId){
        ProductService.deleteProduct(productId).then(dataResponse => {
            this.setState({
                product : this.state.product.filter(product => product.productId != productId)
            })
            alert(`Product ${productId} is deleted succesfully`)
        })
    }
    //This function will redirect to the view product component
    viewProduct(id){
        this.props.history.push(`/view-product/${id}`)
    }
    render() {
        return (
                // <div className="container">
                    <div className="container">
                          
                <br/>
                <HeaderComponent/>
                <br/>
                <h2 className="text-center text-dark">Product List</h2>
                <br></br>
                <div className = "row">
                    <div className="col col-md-3 col-sm-4">
                        <button className = "btn btn-success" onClick = {this.addProduct}><i className="fas fa-plus-circle"></i> <strong>Add Product</strong></button>
                    </div>
                </div>
                <br></br>
                <div className="row" style={{overflowY: "scroll", height: "400px"}}>
                    <table style={{backgroundColor: "rgba(186, 215, 138, 0.7)"}} className="table table-striped table-dark table-bordered text-center">
                  
                        <thead>
                            <tr className = "text-center">
                                <th>Product Id</th>
                                <th>Product Name</th>
                                <th>Product Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.product.length>0?
                                (this.state.product.map((product,index) =>
                                    <tr key={index}>
                                        <td>{product.productId}</td>
                                        <td>{product.productName}</td>
                                        <td>{product.productDescription}</td>
                                        <td>
                                            <Link to = {`view-product/${product.productId}`}><button style = {{marginLeft: "10px"}} className = "btn btn-primary"><strong>View</strong></button></Link>
                                            <Link to = {`updateProduct/${product.productId}`}><button style = {{marginLeft : "10px"}} className = "btn btn-warning"><strong>Update</strong></button></Link>
                                            <button style = {{marginLeft : "10px"}} onClick={()=> {if(window.confirm('Delete the item?'))this.removeProduct(product.productId)}} className = "btn btn-danger"><strong>Delete</strong></button>   
                                        </td> 
                                    </tr>
                                )
                                ):
                                (<tr><td colSpan="3"><h4>No product to display</h4></td></tr>)
                            }
                        </tbody>
                    </table>         
                </div>
              
            </div>
        )
    }
}

export default ListOfProduct
