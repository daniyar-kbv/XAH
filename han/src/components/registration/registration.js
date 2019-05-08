import React, { Component } from 'react';
import './registration.css';
import { Link } from "react-router-dom";
import * as userActions from '../../actions/userActions'
import { connect } from 'react-redux';

class Registration extends Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.userPostFetch(this.state)
    }

    render() {
        return (
            <div className="container">
                <section className="space-sm">
                    <div className="container align-self-start">
                        <div className="row mb-5">
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-7">
                                <div className="card card-lg text-center">
                                    <div className="card-body">
                                        <div className="mb-5">
                                            <h1>Регистрация</h1>
                                            <span>Создайте аккаунт для продолжения</span>
                                        </div>
                                        <div className="row no-gutters justify-content-center">
                                            <form onSubmit={this.handleSubmit} className="text-left col-lg-8 dark-form">
                                                <div className="form-group">
                                                    <label>Электронная почта</label>
                                                    <input 
                                                        className="form-control form-control-lg" 
                                                        type="text" 
                                                        name="username" 
                                                        id="login-email" 
                                                        placeholder="Адрес почты" 
                                                        value={this.state.username}
                                                        onChange={this.handleChange}/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Пароль</label>
                                                    <input 
                                                        className="form-control form-control-lg" 
                                                        type="password" 
                                                        name="password" 
                                                        id="login-password" 
                                                        placeholder="Введите пароль" 
                                                        value={this.state.password}
                                                        onChange={this.handleChange}/>
                                                </div>
                                                <div className="text-center mt-3">
                                                    <button type="submit" className="btn btn-lg btn-primary btn-block">Зарегестрироваться</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <span className="text-small">Уже есть аккаунт? <Link to={'./login'}><p>Войти</p></Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    userPostFetch: userInfo => dispatch(userActions.userPostFetch(userInfo))
})


export default connect(
    null,
    mapDispatchToProps
)(Registration);