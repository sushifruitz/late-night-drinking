import React from 'react';
import PropTypes from 'prop-types';
//_DB
import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
  //modify Button Behaviour e = event
  handleSubmit(e) {
    let playerName = e.target.playerName.value;

    e.preventDefault();

    if (playerName) {
      e.target.playerName.value = '';
      Players.insert(
        {
          name: playerName,
          score: 0
        }
      );
    };
  }

  render(){
    return(
      <div className="item">
        {this.props.children}
        <form className="form" onSubmit={this.handleSubmit}>
          <input className="form form__input" type="text" name="playerName" placeholder="Player Name"/>
          <button className="button">Add Player</button>
        </form>
      </div>
    );
  }
};
