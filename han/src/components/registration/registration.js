import React, { Component } from 'react';
import './registration.css';

class Registration extends Component {
    render() {
        return (
            <div>
                <div class="nav-container">
                </div>
                <div class="main-container">
                    <section class="space-sm">
                        <div class="container align-self-start">
                            <div class="row mb-5">
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-12 col-md-8 col-lg-7">
                                    <div class="card card-lg text-center">
                                        <div class="card-body">
                                            <div class="mb-5">
                                                <h1>Регистрация</h1>
                                                <span>Создайте аккаунт для продолжения</span>
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

                                                    </div>
                                                    <div class="form-group">
                                                        <label for="login-password">Повторите пароль</label>
                                                        <input class="form-control form-control-lg" type="password" name="password" id="confirm-password" placeholder="Подтвердите пароль" />

                                                    </div>
                                                    <div class="text-center mt-3">
                                                        <button type="submit" class="btn btn-lg btn-primary btn-block">Зарегестрироваться</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <span class="text-small">Уже есть аккаунт? <a href="#">Войти</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Registration;