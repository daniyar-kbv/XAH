import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
      return (
        <footer className="bg-gray text-light footer-long">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-2">
                        <h1 className="h1-big">XAH</h1>
                    </div>
                    <div className="col-12 offset-md-6 col-md-4 social-footer">
                        <div className="row">
                            <h3 className="h3-big">Follow us in social networks</h3>
                        </div>
                        <div className="row">
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
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 offset-md-4 col-md-4">
                        <h6>Copyright © 2019 by XAH. All rights reserved.</h6>
                    </div>
                </div>
            </div>
        </footer>
      );
    }
  }

export default Footer;