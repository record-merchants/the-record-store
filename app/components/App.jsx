import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import FooterContainer from '../containers/FooterContainer';

export default class App extends Component {
  render(){
    return (
      <div>
        <div className="col-xs-12">
          <HeaderContainer />
        </div>

        <div className="col-xs-12">
          {this.props.children}
        </div>

        <div className="col-xs-12">
          <FooterContainer />
        </div>
      </div>
    )
  }

}
