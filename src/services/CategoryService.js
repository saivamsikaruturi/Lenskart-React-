import axios from 'axios';
const CATEGORY_API_BASE_URL = "http://localhost:9090/api/categories"
const CATEGORY_DATA_URL="http://localhost:9090/api/insertCategory";
const CATEGORY_DELETE_API_URL = "http://localhost:9090/api/deleteCategory";
// const PRODUCT_ALL_FETCH_APR_URL = "";

class CategoryService {
    // getCategory(){
    //     return axios.get(CATEGORY_DATA_URL);

    // }
    getCategory(){
        return axios.get(CATEGORY_API_BASE_URL);
    }
    async createCategory(category){
         console.log("Inside create category")
         return  axios.post(CATEGORY_DATA_URL, category);

     }
     deleteCategory(categoryId){
        return axios.delete(CATEGORY_DELETE_API_URL + '/' + categoryId);
    }
}
export default  new CategoryService()
