import React, { Component } from 'react'
import incard from '../../assets/img/graphic-product-bench-thumb.jpg'
import '../../assets/css/theme.css'
import '../article/article.css'


class PostInCard extends Component {
    render(){
        return(
            <li>
                <div className="media">
                    <a href="#">
                        <img alt="Image" src={incard} className="avatar avatar-square rounded mr-3" />
                    </a>
                    <div className="media-body">
                        <a href="#">
                            <span className="h6">Bench</span>
                        </a>
                        <span className="badge badge-secondary">Productivity</span>
                        <div className="text-muted">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <small><i className="icon-heart"></i> 373</small>
                                </li>
                                <li className="list-inline-item">
                                    <small><i className="icon-message"></i> 62</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default PostInCard;