import React, { Component } from 'react'
import incard from '../../assets/img/graphic-product-bench-thumb.jpg'
import '../../assets/css/theme.css'
import '../article/article.css'
import { Image } from 'react-bootstrap'

class PostInCard extends Component {
    render(){
        return(
            <li>
                <div className="media">
                    <p>
                        <Image src={incard} className="avatar avatar-square rounded mr-3" />
                    </p>
                    <div className="media-body">
                        <p>
                            <span className="h6">Bench</span>
                        </p>
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