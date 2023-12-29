import React, { Component } from "react";
import UserService from "../services/UserService";
//This component will render form to register users.
export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {

            userName: '',
            password: '',
            UserNameBlankInputErrorMsg: '',
            PasswordBlankInputErrorMsg: '',
            UserNameExceedsMaxLengthErrorMsg: '',
            PasswordExceedsMaxLengthErrorMsg: ''

        }

        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePassWordHandler = this.changePassWordHandler.bind(this);
        this.verifyUser = this.verifyUser.bind(this);
    }
    //This method will set the new User Name.
   
    changeUserNameHandler = (event) => {
        this.setState({
            userName: event.target.value,
            UserNameBlankInputErrorMsg: '',
            UserNameExceedsMaxLengthErrorMsg: ''
        });
    }
 //This method will set the new Password.
   
    changePassWordHandler = (event) => {
        this.setState({
            password: event.target.value,
            PasswordBlankInputErrorMsg: '',
            PasswordExceedsMaxLengthErrorMsg: ''
        });
    }
//This method validates the incoming user login data and displays the appropriate error message.
    validate = () => {

        let UserNameBlankInputErrorMsg = '';
        let PasswordBlankInputErrorMsg = '';
        let UserNameExceedsMaxLengthErrorMsg = '';
        let PasswordExceedsMaxLengthErrorMsg = '';

        if (!this.state.userName) {
            UserNameBlankInputErrorMsg = "User Name cannot be blank !";
        }
        if (!this.state.password) {
            PasswordBlankInputErrorMsg = "Password cannot be blank !";
        }
        if (this.state.userName.length > 15) {
            UserNameExceedsMaxLengthErrorMsg = "User Name length should not be more than 15";
        }
        if (this.state.password.length > 15) {
            PasswordExceedsMaxLengthErrorMsg = "Password length should not be more than 15";
        }

        if (UserNameBlankInputErrorMsg || PasswordBlankInputErrorMsg
            || UserNameExceedsMaxLengthErrorMsg || PasswordExceedsMaxLengthErrorMsg) {
            this.setState(
                {

                    UserNameBlankInputErrorMsg,
                    PasswordBlankInputErrorMsg,
                    UserNameExceedsMaxLengthErrorMsg,
                    PasswordExceedsMaxLengthErrorMsg
                });
            return false;
        }
        return true;

    }

//This method will send the user login data and authenticate to the backend.
    verifyUser = (event) => {

        event.preventDefault();

        const isValid = this.validate();

        if (isValid) {

            const login = {
                userName: this.state.userName,
                password: this.state.password
            }

            UserService.verifyUser(login)
                .then(response => {
                    console.log("Valid User Credentials");
                    alert(`${login.userName} Login Successful !!`);
                    this.props.history.push('/customer');

                })
                .catch(() => {
                    console.log("Invalid credentials");
                    alert('Invalid Credentials !! Please enter correct details.');
                    this.props.history.push('/Login')

                })
        }
    }

    render() {
        return (
            <div>
            <div className="HomePageImages">
            <img src="https://djgn3cwvdf3zo.cloudfront.net/newHomePAge/men-power.jpg" style={{margin:"100px"}}/>
            <img src="https://djgn3cwvdf3zo.cloudfront.net/newHomePAge/women-power.jpg"/>
            </div>
            <div className="row justify-content-center">
           
                <div class="w-50 p-3">
                    <form onSubmit={this.verifyUser}>

                        <h3>Log in</h3>

                        <div className="form-group">
                            <label>User Name</label>
                            <input type="text" className="form-control" name="userName" placeholder="Enter user name"
                                value={this.state.userName} onChange={this.changeUserNameHandler}
                                pattern="[a-zA-Z0-9]+" minLength="3" />
                            <div style={{ color: "red" }}>{this.state.UserNameBlankInputErrorMsg}</div>
                            <div style={{ color: "red" }}>{this.state.UserNameExceedsMaxLengthErrorMsg}</div>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" name="password" placeholder="Enter password"
                                value={this.state.password} onChange={this.changePassWordHandler}
                                minLength="8" />
                            <div style={{ color: "red" }}>{this.state.PasswordBlankInputErrorMsg}</div>
                            <div style={{ color: "red" }}>{this.state.PasswordExceedsMaxLengthErrorMsg}</div>
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="btn btn-dark">Sign in</button>
                        </div>

                    </form>
                </div>
            </div>
            <div className="HomePageImages">
            <img src="https://djgn3cwvdf3zo.cloudfront.net/newHomePAge/cat_Men-sunglasses.jpg" style={{margin:"100px"}}/>
            <img src="https://djgn3cwvdf3zo.cloudfront.net/newHomePAge/cat_wonmen-sunglasses.jpg"/>
            </div>
           </div>
        );
    }
}