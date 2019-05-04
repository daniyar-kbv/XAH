import React, { Component } from 'react';
import './article.css';
import '../../assets/css/theme.css'
import commentimage from '../../assets/img/avatar-female-2.jpg'
import * as commentsActions from '../../actions/commentActions'
import * as userActions from '../../actions/userActions'
import { connect } from 'react-redux';

class Comments extends Component{
    
    constructor(props){
        super(props);

        this.handleCreateComment = this.handleCreateComment.bind(this);
    }

    componentDidMount() {
        this.props.getComments();
        this.props.getUser('5ccb30fc51662f37385c2e06');
    }

    handleCreateComment() {
        let data = {
            body: "new comment"
        }
        this.props.createComment(data);
    }

    render(){
        return(
            <div className="card">
                <div id="comment-reply">
                    <form className="card-body">
                        <div className="form-group">
                            {/* <textarea className="form-control from-control-lg" id="comment-reply-text" name="comment-reply" rows="4" placeholder="Type your comment here"></textarea> */}
                        </div>
                        <div className="d-flex align-items-center">
                            <button type="submit" className="btn btn-success mr-3" onClick={this.handleCreateComment}>Submit comment</button>
                        </div>
                    </form>
                </div>
                <div className="card-header bg-secondary d-flex justify-content-between">
                    <form className="d-flex align-items-center">
                        <span className="mr-2 text-muted text-small text-nowrap">Sort by:</span>
                        <select className="custom-select">
                            <option>Alphabetical</option>
                            <option>Newest</option>
                            <option >Popular</option>
                            <option>Recently Updated</option>
                        </select>
                    </form>
                </div>
                <ul className="list-group list-group-flush list-group-comments" id="list">
                    {this.props.comments.map(comment => 
                        <li className="list-group-item py-4">
                            <div className="media">
                                <img alt="Image" src={commentimage} className="avatar avatar-sm" />
                                <div className="media-body">
                                    <div className="mb-2">
                                        <span className="h6 mb-0">{comment.user.username}</span>
                                    </div>
                                    <p>
                                        {comment.body}
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <div className="mr-2">
                                            <button className="btn btn-sm btn-outline-primary"><i className="icon-thumbs-up"></i>&nbsp;(2)</button>
                                        </div>
                                        <small className="text-muted">{comment.createdAt}</small>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

const mapStateToPropsComment = (state) => ({
    comments: state.comment.comments,
    user: state.user.user
})

const mapDispatchToPropsComment = {
    getComments: commentsActions.getComments,
    getUser: userActions.getUser,
    createComment: commentsActions.createComment
}

export default connect(
    mapStateToPropsComment,
    mapDispatchToPropsComment
)(Comments);