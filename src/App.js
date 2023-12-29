import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
// import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListOfCategory from './components/ListOfCategory';
import UpdateCategoryComponent from './components/UpdateCategoryComponent';
// import ListOfCategory from './component/ListOfCategory';
import AddCategory from './components/AddCategory';
// import HeaderComponent from './components/HeaderComponent'
// import FooterComponent from './components/FooterComponent'
// import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AddProduct from './components/AddProduct'
import UpdateProduct from './components/UpdateProduct'
import ViewProductDetails from './components/ViewProductDetails'
import ListOfProduct from './components/ListOfProduct'
import CustomerPage from './components/CustomerPage'
import HomePage from './components/HomePage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Admin from './components/Admin';
import Home from './components/Home';

function App() {
  return (


    <div className="container-fluid">
      <Router>
      
       
        <div className="container-fluid">
          {/* <div className="container"> */}
          <div className="App">
            <HomePage />
          </div>
          <Switch>
            {/* <Route path="/" component={Home}></Route> */}
          <Route path="/Home" component={Home}></Route>
            <Route path="/HomePage" component={HomePage}></Route>
            <Route path="/Login" component={Login}></Route>
            <Route path="/SignUp" component={SignUp}></Route>
            <Route path="/Admin" component={Admin}></Route>
            <Route path="/customer" component={CustomerPage}></Route>
            <Route path="/category" component={ListOfCategory}></Route>
            {/* <Route path = "/" exact component = {ListOfProduct}></Route> */}
            <Route path="/products" component={ListOfProduct}></Route>
            <Route path="/add-product" component={AddProduct}></Route>
            <Route path="/updateProduct/:productId" component={UpdateProduct}></Route>
            <Route path="/view-product/:id" component={ViewProductDetails}></Route>
            {/* <Route path="/"  exact component={ListOfCategory}></Route> */}
            <Route path="/add-category" component={AddCategory}></Route>
            <Route path="/categoryupdate/:id/:categoryname" component={UpdateCategoryComponent}></Route>

          </Switch>

        </div>
        <FooterComponent />


      </Router>
    </div>
  );
}

export default App;