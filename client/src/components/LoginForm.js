import React from "react";
import e from "express";

class LoginForm extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };


handleChange = (event) => {
    this.setState({
        credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }
    })
}


render() {
    return (
        <div>
        <div className="login">
            <form>
            <label>
                Username:
                <input type="text" name="username" onChange={this.handleChange} />
            </label>
            
            <label>
            Password:
            <input type="text" name="password" onChange={this.handleChange} />
            </label>
            <button type="submit">Login</button>
            </form>
        </div>
        </div>
    )
}
}

export default LoginForm;

