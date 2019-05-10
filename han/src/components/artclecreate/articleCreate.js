import React, { Component } from 'react'
import '../../assets/css/theme.css'
import * as articleActions from '../../actions/articleActions'
import { connect } from 'react-redux'

class Article extends Component {

    constructor(props) {
        super(props);

        this.handleCreateArticle = this.handleCreateArticle.bind(this);
    }

    componentDidMount() {
    }

    handleCreateArticle() {
        let categoryId;
        switch (document.getElementById('category').value){
            case 'Авто':
                categoryId = '5ccab68910899d2d10de4e11';
                break;
            case 'Бизнес':
                categoryId = '5cd3341eda95f51cc8317352';
                break;
            case 'Спорт':
                categoryId = '5cd33428da95f51cc8317353';
                break;
            default:
                categoryId = '5cd3341eda95f51cc8317352';
        }
        localStorage.setItem('cat', document.getElementById('category'))
        let data = {
            title: document.getElementById('title').value,
            body: document.getElementById("body").value,
            imageUrl: document.getElementById('image').value,
            category: categoryId
        }
        this.props.createArticle(data, localStorage.getItem('JWT'));
    }

    render() {
        return (
            <div className="tab-pane fade show active pt-5 pb-5" id="general" role="tabpanel" aria-labelledby="general-tab">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col">
                            <h5>Account Details</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-12 order-md-1">
                            <form className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Заголовок
                                        </label>
                                        <input className="form-control form-control-lg" type="text" name="userName" id="title" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Текст
                                        </label>
                                        <textarea className="form-control form-control-lg" type="text" name="userName" id="body" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Категория
                                        </label>
                                        <select className="form-control form-control-lg" type="email" name="emailAddress" id="category">
                                            <option>Авто</option>
                                            <option>Бизнес</option>
                                            <option>Спорт</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Текст
                                        </label>
                                        <input className="form-control form-control-lg" type="text" name="userName" id="image" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <button className="btn btn-success" type="submit" onClick={this.handleCreateArticle}>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToPropsComment = (state) => ({
})

const mapDispatchToPropsComment = {
    createArticle: articleActions.createArticle
}

export default connect(
    mapStateToPropsComment,
    mapDispatchToPropsComment
)(Article);