import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class LoginForm extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        },
        isLoading: false
    };


handleChange = (event) => {
    this.setState({
        credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }
    })
}

handleLogin = (event) => {
    event.preventDefault();
    this.setState({ ...this.state, isLoading: true});
    axiosWithAuth()
    .post("/api/login", this.state.credentials)
    .then((response) => {
        localStorage.setItem("token", response.data.payload);
    })
    .catch((error) => {
        this.setState({...this.state, isLoading: false});
        console.log("cannot sign in", error)
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

