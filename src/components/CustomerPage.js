import React, { Component } from 'react'
import CategoryService from '../services/CategoryService'
//This component will display the customer page.
class CustomerPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             category : []
        }
    }
    componentDidMount(){
        CategoryService.getCategory().then((response) => {
            this.setState({
                category : response.data
            })
        })
    }
    
    render() {
        return (
            <div>
                <h2 className="text-center">Welcome Customer</h2>
                <div className="row justify-content-center">
                    <table className="table table-hover table-warning table-bordered w-auto">
                        <thead>
                            <tr className = "text-center">
                                <th>Category ID</th>
                                <th>Category Name</th>
                                {/* <th>Action</th> */}
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                               this.state.category.map((category,index) =>
                               <tr key = {index}>
                                   <td>{category.categoryId}</td>
                                   <td>{category.categoryName}</td>
                                   {/* <td>
                                   <button style = {{marginLeft : "10px"}}className = "btn btn-info">View Products</button> 
                                   </td> */}
                               </tr>
                               )
                            }
                        </tbody>
                    </table>         
                </div>
                <div>
                    <img width = "100%" height = "75%" src = "https://djgn3cwvdf3zo.cloudfront.net/reading-glases.jpg" alt = "EyeGlasses"/>
                    <br></br>
                    <img width = "100%" height = "75%" src = "https://djgn3cwvdf3zo.cloudfront.net/anti-blue-Computer-Glasses.jpg" alt = "Computer Glasses"/>
                    <br></br>
                    <img width = "100%" height = "75%" src = "https://djgn3cwvdf3zo.cloudfront.net/banners/SunLower21_02.jpg" alt = "Sun Glasses"/>
                    <br></br>
                    <img width = "100%" height = "75%" src = "https://djgn3cwvdf3zo.cloudfront.net/Anti-Glare-Anti-Reflective-Computer-Glasses.jpg" alt = "Contact Lenses"/>

                </div>
            </div>
        )
    }
}

export default CustomerPage