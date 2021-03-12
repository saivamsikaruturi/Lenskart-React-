import React, { Component } from "react";
import userService from "../services/UserService";

//This component will render form to register users.
export default class SignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userId: 0,
            firstName: '',
            lastName: '',
            userName: '',
            password: '',
            FirstNameBlankInputErrorMsg: '',
            LastNameBlankInputErrorMsg: '',
            UserNameBlankInputErrorMsg: '',
            PasswordBlankInputErrorMsg: '',
            FirstNameExceedsMaxLengthErrorMsg: '',
            LastNameExceedsMaxLengthErrorMsg: '',
            UserNameExceedsMaxLengthErrorMsg: '',
            PasswordExceedsMaxLengthErrorMsg: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePassWordHandler = this.changePassWordHandler.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }
 

//This method will set the new First Name.

    changeFirstNameHandler = (event) => {
        this.setState({
            firstName: event.target.value,
            FirstNameBlankInputErrorMsg: '',
            FirstNameExceedsMaxLengthErrorMsg: ''
        });
    };
//This method will set the new Last Name.

    changeLastNameHandler = (event) => {
        this.setState({
            lastName: event.target.value,
            LastNameBlankInputErrorMsg: '',
            LastNameExceedsMaxLengthErrorMsg: ''
        });
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
    //This method validates the incoming user registration data and displays the appropriate error message.

    validate = () => {

        let FirstNameBlankInputErrorMsg = '';
        let LastNameBlankInputErrorMsg = '';
        let UserNameBlankInputErrorMsg = '';
        let PasswordBlankInputErrorMsg = '';
        let FirstNameExceedsMaxLengthErrorMsg = '';
        let LastNameExceedsMaxLengthErrorMsg = '';
        let UserNameExceedsMaxLengthErrorMsg = '';
        let PasswordExceedsMaxLengthErrorMsg = '';

        if (!this.state.firstName) {
            FirstNameBlankInputErrorMsg = "First Name cannot be blank !";
        }
        if (!this.state.lastName) {
            LastNameBlankInputErrorMsg = "Last Name cannot be blank !";
        }
        if (!this.state.userName) {
            UserNameBlankInputErrorMsg = "User Name cannot be blank !";
        }
        if (!this.state.password) {
            PasswordBlankInputErrorMsg = "Password cannot be blank !";
        }
        if (this.state.firstName.length > 15) {
            FirstNameExceedsMaxLengthErrorMsg = "First Name length should not be more than 15";
        }
        if (this.state.lastName.length > 15) {
            LastNameExceedsMaxLengthErrorMsg = "Last Name length should not be more than 15";
        }
        if (this.state.userName.length > 15) {
            UserNameExceedsMaxLengthErrorMsg = "User Name length should not be more than 15";
        }
        if (this.state.password.length > 15) {
            PasswordExceedsMaxLengthErrorMsg = "Password length should not be more than 15";
        }

        if (FirstNameBlankInputErrorMsg || LastNameBlankInputErrorMsg || UserNameBlankInputErrorMsg || PasswordBlankInputErrorMsg
            || FirstNameExceedsMaxLengthErrorMsg || LastNameExceedsMaxLengthErrorMsg || UserNameExceedsMaxLengthErrorMsg || PasswordExceedsMaxLengthErrorMsg) {
            this.setState(
                {
                    FirstNameBlankInputErrorMsg,
                    LastNameBlankInputErrorMsg,
                    UserNameBlankInputErrorMsg,
                    PasswordBlankInputErrorMsg,
                    FirstNameExceedsMaxLengthErrorMsg,
                    LastNameExceedsMaxLengthErrorMsg,
                    UserNameExceedsMaxLengthErrorMsg,
                    PasswordExceedsMaxLengthErrorMsg
                });
            return false;
        }
        return true;

    }
//This method will send the user registration data to the backend.
    registerUser = (data) => {
        data.preventDefault();

        const isValid = this.validate();

        if (isValid) {

            const user = {
                userId: this.state.userId,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                userName: this.state.userName,
                password: this.state.password
            };
            console.log(`user => + ${user.userName}`);

            userService.registerUser(user)
                .then(response => {
                    alert(`${user.userName} Registered Successfully !`);
                    this.props.history.push('/Login');
                })
                .catch(() => {
                    alert(`${user.userName} already exists. Cannot register with same credentials twice!!`);
                    this.props.history.push('/SignUp');
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
                    <form onSubmit={this.registerUser}>
                        <h3>Register</h3>

                        <div className="form-group">
                            <label>First name</label>
                            <input type="text" className="form-control"
                                name="firstName" placeholder="First name"
                                value={this.state.firstName} onChange={this.changeFirstNameHandler}
                                pattern="[A-Z][a-zA-Z]+" minLength="3" />
                            <div style={{ color: "red" }}>{this.state.FirstNameBlankInputErrorMsg}</div>
                            <div style={{ color: "red" }}>{this.state.FirstNameExceedsMaxLengthErrorMsg}</div>
                        </div>

                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" className="form-control" name="lastName" placeholder="Last name"
                                value={this.state.lastName} onChange={this.changeLastNameHandler}
                                pattern="[A-Z][a-zA-Z]+" minLength="3" />
                            <div style={{ color: "red" }}>{this.state.LastNameBlankInputErrorMsg}</div>
                            <div style={{ color: "red" }}>{this.state.LastNameExceedsMaxLengthErrorMsg}</div>
                        </div>

                        <div className="form-group">
                            <label>User Name</label>
                            <input type="text" className="form-control" name="userName" placeholder="User name"
                                value={this.state.userName} onChange={this.changeUserNameHandler}
                                pattern="[a-zA-Z0-9]+" minLength="3" />
                            <div style={{ color: "red" }}>{this.state.UserNameBlankInputErrorMsg}</div>
                            <div style={{ color: "red" }}>{this.state.UserNameExceedsMaxLengthErrorMsg}</div>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" name="password" placeholder="Enter password"
                                value={this.state.userPassword} onChange={this.changePassWordHandler}
                                minLength="8" />
                            <div style={{ color: "red" }}>{this.state.PasswordBlankInputErrorMsg}</div>
                            <div style={{ color: "red" }}>{this.state.PasswordExceedsMaxLengthErrorMsg}</div>
                        </div>
                        <br />
                        <button type="submit" className="btn btn-dark btn-block">Register</button>
                        <br />
                        <br />
                        <p className="forgot-password text-right">Already registered <a href="/Login">log in?</a></p>
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