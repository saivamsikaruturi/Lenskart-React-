import React, { Component } from 'react'
import CategoryService from '../services/CategoryService';
import ProductService from '../services/ProductService';

//This component will add the category data
export class AddCategory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categoryId: 0,
            categoryName: '',
            productId: 0,
            productName: '',
            productDescription: '',
            categoryNameError: '',
            productNameError: '',
            productDescriptionError: ''
        }
        this.changeCategoryNameHandler = this.changeCategoryNameHandler.bind(this);
        this.save = this.save.bind(this);
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeProductDescriptionHandler = this.changeProductDescriptionHandler.bind(this);
        this.validate = this.validate.bind(this)
    }
      // This method will validate the incoming category data and display appropriate error message
    validate = () => {
        let productNameError = '';
        let productDescriptionError = '';
        let categoryNameError = '';


        if (!this.state.categoryName) {
            categoryNameError = "Category name should not be blank";

        }

        if (this.state.categoryName.length > 15) {
            categoryNameError = " Length of Category name should not be more than 15 ";
        }

        if (!this.state.productName) {
            productNameError = "Product name should not be blank";
        }

        if (this.state.productName.length > 15) {
            productNameError = " Length of Product name should not be more than 15 ";
        }

        if (this.state.productDescription.length > 30) {
            productDescriptionError = " Length of Product Description should not be more than 30";
        }

        if (!this.state.productDescription) {
            productDescriptionError = "Product Description should not be blank";
        }


        if (productNameError || productDescriptionError || categoryNameError) {
            this.setState({
                productNameError, productDescriptionError, categoryNameError
            });
            return false;

        }
        return true;
    }
    // This method will save the category data in the backend.
    save = (data) => {
        data.preventDefault();
        const isValid = this.validate();
        if (isValid) {

            alert(` Category Data added succesfully`);
            const category = {
                categoryId: this.state.categoryId,
                categoryName: this.state.categoryName
            };


            CategoryService.createCategory(category).then(res => {
                this.props.history.push('/category');
            });


            const product = {
                productId: this.state.productId,
                productName: this.state.productName,
                productDescription: this.state.productDescription

            }
            ProductService.createProduct(product).then(res => {
                this.props.history.push('/category');
            });


        }
        else {
            alert('Category  Data is not matching the condition')

        }

    }
    //This method will redirect to the list of category page
    cancel() {
        this.props.history.push('/category');
    }
    //This method will set the new category name
    changeCategoryNameHandler = (event) => {
        this.setState({
            categoryName: event.target.value,
            categoryNameError: ''
        });
    };
        //This method will set the new product name

    changeProductNameHandler = (event) => {
        this.setState({
            productName: event.target.value,
            productNameError: ''
        });
    };
        //This method will set the new product description

    changeProductDescriptionHandler = (event) => {
        this.setState({
            productDescription: event.target.value,
            productDescriptionError: ''
        });
    };

    render() {
        return (
            <div className="bg-image">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="card text-black col-10 col-md-8 col-lg-6">

                            <h1 className="text-center">Add Category</h1>
                            <div className="card-body">
                                <form onSubmit={this.save}>

                                    <div className="form-group">
                                        <label className="text-center">Category Name :</label>
                                        <div style={{ fontSize: "8", color: "red" }}>{this.state.categoryNameError}</div>
                                        <input placeholder=" Enter Category Name" name="categoryName" className="form-control"
                                            value={this.state.categoryName} onChange={this.changeCategoryNameHandler} pattern="[A-Z][A-Za-z\s]+" minLength="3" />

                                    </div>
                                    <br></br>
                                    <div className="form-group">
                                        <label>Product Name :</label>
                                        <div style={{ fontSize: "8", color: "red" }}><span style={{ fontSize: "8", color: "red" }}>{this.state.productNameError}</span></div>

                                        <input placeholder=" Enter the Product Name" name="productName" className="form-control"
                                            value={this.state.productName} onChange={this.changeProductNameHandler} pattern="[A-Z][A-Za-z0-9\s]*$" minLength="3" />

                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label>Product Description :</label>
                                        <div style={{ fontSize: "8", color: "red" }}>{this.state.productDescriptionError}</div>
                                        <input placeholder=" Enter the Product Description " name="productDescription" className="form-control"
                                            value={this.state.productDescription} onChange={this.changeProductDescriptionHandler} pattern="[A-Z][A-Za-z0-9-.\s]*$" minLength="5" />
                                        <br />
                                        <button className="btn btn-success" type="submit"><strong>Save</strong></button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}><strong>Cancel</strong></button>
                                    </div>


                                </form>
                            </div>

                        </div>

                    </div>
                </div>
                <br/>
                <br/>
                <br/>
            </div>

        )
    }
}

export default AddCategory
