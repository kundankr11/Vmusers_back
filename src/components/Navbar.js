import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authentication";
import { withRouter } from "react-router-dom";
import isEmpty from "../validation/is-empty";
import isAdmin from "../validation/isAdmin";
import "../components/Navbar.css";

class Navbar extends Component {
    onLogout(e) {
        e.preventDefault();
            this.props.cookies.remove('token');
        this.props.logoutUser(this.props.history);
    }
    render() {
        const { isAuthenticated, user } = this.props.auth;
        const role = localStorage.getItem("role");
        const authLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/search">
                        Search User
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/create">
                        Create New User
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/delete">
                        Delete User
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/dash">
                        Task Management
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/update">
                        Update User
                    </Link>
                </li>
                <a
                    href="#"
                    className="nav-link"
                    onClick={this.onLogout.bind(this)}
                >
                    Logout
                </a>
            </ul>
        );

        const loginLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/register">
                        Sign Up
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        Log In
                    </Link>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/search">
                        Search User
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link className="nav-link" to="/dash">
                        Task Management
                    </Link>
                </li>
                <a
                    href="#"
                    className="nav-link"
                    onClick={this.onLogout.bind(this)}
                >
                    Logout
                </a>
            </ul>
        );
        return (
            <nav
                className="navbar navbar-expand-xl navbar-red"
                style={{ color: "#ad2222" }}
            >
                <Link className="navbar-brand" to="/">
                    USER AND TASK MANAGEMENT MODULE
                </Link>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    {isAdmin(localStorage.getItem("role"))
                        ? authLinks
                        : !isEmpty(localStorage.getItem("role"))
                        ? guestLinks
                        : loginLinks}
                </div>
            </nav>
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
    cookies: ownProps.cookies,
});

export const nav = connect(
    mapStateToProps,
    { logoutUser }
)(withRouter(Navbar));

export default nav;