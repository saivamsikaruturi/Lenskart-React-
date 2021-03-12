import React, { Component } from 'react'
import CategoryService from '../services/CategoryService'
import ProductService from '../services/ProductService';
// import UpdateCategoryComponent from './UpdateCategoryComponent';

import {Link} from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

//This component will display the list of categories
class ListOfCategory extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             category: [],
             product: []
        }
        this.deleteCategory = this.deleteCategory.bind(this);
        this.addCategory = this.addCategory.bind(this);
    }
    
    //This method will delete the category data
    deleteCategory(id){

        CategoryService.deleteCategory(id).then((response) => {
            if(response.status==200){
                alert(`CategoryId ${id} is deleted!!!`)
            }
            this.setState({category: this.state.category.filter(categories =>
                categories.categoryId!== id)});
        })
    }
    
   

    componentDidMount(){
        CategoryService.getCategory().then((response) => {
            this.setState({category: response.data})
        });
        ProductService.getProduct().then((response) =>{
            this.setState({product:response.data});
           });
    }

    //This function will redirect to add category component
    addCategory() {
        this.props.history.push('/add-category')
    }
    render() {
        return (
            
            <div className="container"><br/><br/>
             <HeaderComponent/>
             <br/>
                <h2 className="text-center text-dark">Category List</h2>
                <div className="row">
                    <div className="col col-md-3 col-sm-4">
                        <Link to="/add-category" className="btn btn-success"><i className="fas fa-plus-circle"></i> <strong>Add Category</strong></Link>
                      
                    </div>
                </div><br/>
                <div className="row" style={{overflowY: "scroll", height: "400px"}}>

                    <table style={{backgroundColor: "rgba(186, 215, 138, 0.7)"}} className="table table-striped table-dark table-bordered text-center">
                        <thead>
                            <tr>
                                <th>Category ID</th>
                                <th>Category Name</th>
                                <th>Actions : </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.category.length>0?
                                (this.state.category.map(
                                    category =>
                                    <tr key = {category.id} >
                                        <td>{category.categoryId}</td>
                                        <td>{category.categoryName}</td>
                                        <td>
                                            <button style = {{marginLeft: "10px"}}
                                                className="btn btn-warning"><Link className="text-white text-decoration-none" to={`/categoryupdate/${category.categoryId}/${category.categoryName}`}><strong>Update</strong></Link></button>
                                            <button style = {{marginLeft: "10px"}} onClick = {
                                                () =>  {if(window.confirm('Delete the item?'))this.deleteCategory(category.categoryId)}}
                                                className="btn btn-danger"><strong>Delete</strong></button>


                                        </td>
                                    </tr>
                                )):
                                (<tr><td colSpan="3"><h4>No category to display</h4></td></tr>)
                            }
                        </tbody>
                    </table>
          
                <h2 className="text-center">Product List</h2>
                <div className="row justify-content-center">
                    <table style={{backgroundColor: "rgba(186, 215, 138, 0.7)"}} className="table table-striped table-dark table-bordered text-center">
                        <thead>
                            <tr>
                                
                                <th>Product Id</th>
                                 <th>Product Name</th>
                                 <th>Product Description </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                 this.state.product.length>0?
                             (this.state.product.map( (product,index)=>
                                    <tr key={index}>
                                        <td>{product.productId}</td>
                                        <td>{product.productName}</td>
                                        <td>{product.productDescription}</td>
                                       
                                     </tr>
                             
                             )):
                             (<tr><td colSpan="3"><h4>No category to display</h4></td></tr>)
                            }
                        </tbody>
 
                    </table>
 </div>
                </div>
                
            </div>
        )
    }
}

export default ListOfCategory;
