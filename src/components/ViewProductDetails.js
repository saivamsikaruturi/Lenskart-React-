import React, { Component } from 'react'

import ProductService from '../services/ProductService'

// This class is used to display the product details of a product id
class ViewProductDetails extends Component {
    state = {
        product : [{
            productId : '',
            productName : '',
            productDescription : '',
            'colors' : ['red','black','crimson','teal'],
            index : 0
        }]
    }
    
    componentDidMount(){
        ProductService.getProductById(this.props.match.params.id).then(res => {this.setState({
            product : res.data
        })
        alert(`product id ${this.props.match.params.id} is displayed`); 
    })
    }
    // This method redirect to the list of products page.
    back() {
        this.props.history.push('/products')
    }
    render() {
        const {product} = this.state
        const {list} = []
        const {colors} = this.props
        return (
            <div className = "card-body">
                <h2>Product Details</h2>
                <div className = "styling">
                    <div className = "app" className = "img-thumbnail" className = "img-fluid" className = "rounded float-right">
                        <img src = "https://cwcdn.coolwinks.com/mobile/mobile-prod-images-lite/SS_S59B5672-2.jpg" alt = "Sun Glasses"/>
                        <button className="btn btn-danger" onClick={this.back.bind(this)} style={{ marginLeft: "10px" }}><strong>Back</strong></button>
                    </div>
                    <div className = "row">
                        <label>Product ID</label>
                        <div>{product.productId}</div>
                        <label>Product Name</label>
                        <div>{product.productName}</div>
                        <label>Product Description</label>
                        <div>{product.productDescription}</div>
                        {/* <p>product price: &#x20b9;3500</p>
                        <h6>Colors:</h6> */}
                        <div className="price">Product Price: 
                            <br/></div>
                            <p>&#x20b9;3500</p>
                        <h6>Colors:</h6>
                        <div>
                            <span className="dot" style={{ backgroundColor: "red" }}></span>
                            <span className="dot" style={{ backgroundColor: "green" }} ></span>
                            <span className="dot" style={{ backgroundColor: "yellow" }}></span>
                            <span className="dot" style={{ backgroundColor: "blue" }}></span>
                        </div>
                        <br></br>
                        <img src="https://djgn3cwvdf3zo.cloudfront.net/banners/Main_Eye_05_08_20.jpg" />
                    </div>
                </div>  
            </div>
        )
    }
}

export default ViewProductDetails
