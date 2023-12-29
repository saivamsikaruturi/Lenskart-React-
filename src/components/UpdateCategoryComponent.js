import axios from 'axios';
import React, { Component, isValidElement } from 'react'

//This component will update category data
class UpdateCategoryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryId: "",
            categoryName: "",
            categoryNameError: '',

            products: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handlleSubmit = this.handlleSubmit.bind(this);
        this.validate = this.validate.bind(this)

    }
    //This method will validate the updated category data and display error message.
    validate = () => {

        let categoryNameError = ''
        if (!this.state.categoryName) {
            categoryNameError = "Category name should not be blank"

        }
        if (this.state.categoryName.length > 15) {
            categoryNameError = " Length of Category name should not be more than 15 ";
        }
        if (categoryNameError) {
            this.setState({
                categoryNameError
            })
            return false
        }
        return true

    }
    //This method will set the updated category name
    handleChange = (event) => {
        this.setState({
            categoryName: event.target.value,
            categoryNameError: ''
        })
    }
    componentDidMount() {
        this.setState({
            categoryId: this.props.match.params.id,
            categoryName: this.props.match.params.categoryname
        })
    }
    //This method will redirect to the list of category page
    cancel() {
        this.props.history.push('/category');
    }

    //This method will save the updated data.
    handlleSubmit = (event) => {

        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state.categoryName);
            const categoryObj = {
                "categoryId": parseInt(this.state.categoryId),
                "categoryName": this.state.categoryName,
                "product": []
            }

            axios.put("http://localhost:9090/api/updateCategory", categoryObj)
                .then((data) => {
                    alert(`Category ${categoryObj.categoryId} updated successfully`);
                    this.props.history.push('/category');
                })

                .catch((error) => console.error("Error in updating"));
        }

    }
    render() {
        return (

            <div className="bg-image">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="card text-black col-10 col-md-8 col-lg-6">

                            <h1 className="text-center">Update Category</h1>
                            <div className="card-body">
                                <form onSubmit={this.handlleSubmit}>
                                    <div className="form-group">
                                        <label>
                                            Category ID : </label><br/>
                                            <input type="text" name="categoryId" value={this.state.categoryId} disabled
                                            onChange={this.handleChange} /><br />
                                        <br />
                                        <label>Category Name: </label>
                                        <div style={{ fontSize: "8", color: "red" }}>{this.state.categoryNameError}</div>
                                        <input placeholder="Category Name" name="Category Name" className="form-control" value={this.state.categoryName} onChange={this.handleChange} pattern="[A-Z][A-Za-z0-9\s]*$" minLength="3" />
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
                <br />
            </div>


        )
    }
}

export default UpdateCategoryComponent;
