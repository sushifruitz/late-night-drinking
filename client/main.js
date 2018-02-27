import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
//_DB
import {Players, calculatePlayerPositions} from './../imports/api/players';
//_COMPONENTS
import App from './../imports/ui/App';


//MAIN
Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find({}, {sort: {score: -1}}).fetch();
    let positionedPlayers = calculatePlayerPositions(players);
    let title = 'Late Night Drinking Score';
    let subtitle = 'Created by Emanuel Mariano';
    ReactDOM.render(<App title={title} subtitle={subtitle} players={positionedPlayers}/>, document.getElementById('app'));
  });
});
