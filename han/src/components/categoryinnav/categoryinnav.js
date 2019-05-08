import React, { Component } from 'react';
import '../../assets/css/theme.css';
import '../../assets/css/entypo.css';
import '../../assets/css/socicon.css';
import '../header/header.css';
import { Link} from "react-router-dom";


class CategoryInNav extends Component {
    render() {
        return(
            <li className="nav-item">
                <Link to={this.props.link}><p className="nav-link">{this.props.name}</p></Link>
            </li>
        )
    }
}

export default CategoryInNav;