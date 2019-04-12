import React, { Component } from 'react';
import './login.css';

class Login extends Component {
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
                                                        <label for="login-email">Электронная почта</label>
                                                        <input class="form-control form-control-lg" type="email" name="email" id="login-email" placeholder="Адрес почты" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="login-password">Пароль</label>
                                                        <input class="form-control form-control-lg" type="password" name="password" id="login-password" placeholder="Введите пароль" />
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
                                                        <button type="submit" class="btn btn-lg btn-primary btn-block">Войти</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <span class="text-small">Нет аккаунта? <a href="#">Зарегистрироваться</a>
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
        
export default Login;