import React, { Component } from 'react';
import '../../assets/css/theme.css'
import '../../assets/css/entypo.css'
import '../../assets/css/socicon.css'
import './header.css'
import navimage from '../../assets/img/avatar-male-3.jpg'
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Category from '../category/category'

class CategoryInNav extends Component {
    render() {
        return(
            <li className="nav-item">
                <Link to={this.props.link}><a className="nav-link">{this.props.name}</a></Link>
            </li>
        )
    }
}

class Header extends Component {
    render() {
        return(
                <div>
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 offset-md-7">
                                    <h3 className="h3-big">Follow us in social networks</h3>
                                </div>
                            </div>
                            <div className="row social">
                                <div className="col-auto mb-1">
                                    <i className="socicon-whatsapp h3 social_icon"></i>
                                </div>
                                <div className="col-auto mb-1">
                                    <i className="socicon-twitter h3 social_icon"></i>
                                </div>
                                <div className="col-auto mb-1">
                                    <i className="socicon-instagram h3 social_icon"></i>
                                </div>
                                <div className="col-auto mb-1">
                                    <i className="socicon-vkontakte h3 social_icon"></i>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 offset-md-7 xan-holder">
                                    <h1 className="h1-big">XAH</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav-container">
                        <div className="bg-dark navbar-dark" data-sticky="top">
                            <div className="container">
                                <nav className="navbar navbar-expand-lg">
                                    <div className="col-sm-2">
                                        <h5>Almaty, 18 °C</h5>
                                    </div>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <i className="icon-menu h4"></i>
                                    </button>
                                    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                                        <ul className="navbar-nav">
                                            <CategoryInNav name={"Главная"} link={'./'}/>
                                            <CategoryInNav name={"Авто"} link={'./category'}/>
                                            <CategoryInNav name={"Бизнес"} link={'./category'}/>
                                            <CategoryInNav name={"Спорт"} link={'./category'}/>
                                        </ul>
                                        <ul className="navbar-nav w-50">
                                            <form className="form-inline col p-0 pl-md-2 pr-md-3">
                                                <input className="form-control w-100" type="search" placeholder="Search" aria-label="Search"/>
                                            </form>
                                            <li className="col-sm-2">
                                                <h5><a className="nav-link">Войти</a></h5>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
export default Header;
