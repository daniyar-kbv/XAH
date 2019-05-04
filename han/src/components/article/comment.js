import React, { Component } from 'react';
import './article.css';
import '../../assets/css/theme.css'
import commentimage from '../../assets/img/avatar-female-2.jpg'
import * as commentsActions from '../../actions/commentActions'
import { connect } from 'react-redux';

class Comment extends Component{
    
    componentDidMount() {
        this.props.getComments();
    }
    render(){
        return(
            <ul class="list-group list-group-flush list-group-comments" id="list">
                {this.props.comments.map(comment => 
                    <li class="list-group-item py-4">
                        <div class="media">
                            <img alt="Image" src={commentimage} class="avatar avatar-sm" />
                            <div class="media-body">
                                <div class="mb-2">
                                    <span class="h6 mb-0">Kelly Fraiser</span>
                                    <span class="text-muted">Making awesome products</span>
                                </div>
                                <p>
                                    {comment.body}
                                </p>
                                <div class="d-flex align-items-center">
                                    <div class="mr-2">
                                        <button class="btn btn-sm btn-outline-primary">Reply</button>
                                        <button class="btn btn-sm btn-outline-primary"><i class="icon-thumbs-up"></i>&nbsp;(2)</button>
                                    </div>
                                    <small class="text-muted">1st Dec 2017 • 10:15am</small>
                                </div>
                            </div>
                        </div>
                    </li>
                )}
                
            </ul>
            
        );
    }
}

const mapStateToPropsComment = (state) => ({
    comments: state.comment.comments,
})

const mapDispatchToPropsComment = {
    getComments: commentsActions.getComments,
}

export default connect(
    mapStateToPropsComment,
    mapDispatchToPropsComment
)(Comment);