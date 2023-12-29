import axios from 'axios';

const PRODUCT_DATA_URL="http://localhost:9090/api/products";
const PRODUCT_ADD_URL="http://localhost:9090/api/createProduct";
const PRODUCT_UPDATE_URL="http://localhost:9090/api/updateProduct";
const PRODUCT_DELETE_URL="http://localhost:9090/api/deleteProduct";

class ProductService {
    getProduct(){
        return axios.get(PRODUCT_DATA_URL);

    }
    async createProduct(product){
         console.log("Inside create product")
         return  axios.post(PRODUCT_ADD_URL, product);
    }
     getProductById(id){
         return axios.get(PRODUCT_DATA_URL+"/"+id);
     }

     changeProduct(product,id){
        return axios.put(PRODUCT_UPDATE_URL+"/"+id,product);
    }
    deleteProduct(id){
        return axios.delete(PRODUCT_DELETE_URL+"/"+id);
    }
}
export default  new ProductService()
