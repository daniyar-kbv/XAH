import React, { Component } from 'react';
import './login.css';
import { Link } from "react-router-dom";
import * as userActions from "../../actions/userActions";
import { connect } from 'react-redux';

class Login extends Component {
    
    constructor(props){
        super(props);
        
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidMount() {
    }
    
    handleLogin() {
        let data = {
            // username: document.getElementById("login-username").value,
            // password: document.getElementById("login-password").value
            username: "write",
            password: "Qwerty123"
        }
        this.props.login(data);
    }

    render() {
        return (
            <div class="container">
                <section class="space-sm">
                    <div class="container align-self-start">
                        <div class="row mb-5">
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-12 col-md-8 col-lg-7">
                                <div class="card card-lg text-center">
                                    <div class="card-body">
                                        <div class="mb-5">
                                            <h1>Авторизация пользователя</h1>
                                            <span>Войдите в свой аккаунт для продолжения</span>
                                        </div>
                                        <div class="row no-gutters justify-content-center">
                                            <form class="text-left col-lg-8 dark-form">
                                                <div class="form-group">
                                                    <label>Имя пользователя</label>
                                                    <input class="form-control form-control-lg"id="login-username" placeholder="Имя пользователя" />
                                                </div>
                                                <div class="form-group">
                                                    <label>Пароль</label>
                                                    <input class="form-control form-control-lg" id="login-password" placeholder="Введите пароль" />
                                                        <small>Забыли пароль? <a href="#">Сбросить</a>
                                                        </small>
                                                </div>
                                                <div>
                                                    <div class="custom-control custom-checkbox align-items-center">
                                                        <input type="checkbox" class="custom-control-input" value="box-1" name="box-1" checked id="check-remember"></input>
                                                        <label class="custom-control-label text-small" for="check-remember">Запомнить меня</label>
                                                    </div>
                                                </div>
                                                <div class="text-center mt-3">
                                                    <button type="submit" class="btn btn-lg btn-primary btn-block" onClick={this.handleLogin}>Войти</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <span class="text-small">Нет аккаунта? <Link to={'./registration'}><a href="#">Зарегистрироваться</a></Link>
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

const mapStateToPropsComment = (state) => ({
})

const mapDispatchToPropsComment = {
    login: userActions.login
}

export default connect(
    mapStateToPropsComment,
    mapDispatchToPropsComment
)(Login);