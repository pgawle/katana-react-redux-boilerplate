import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as gamesActions from '../../redux/actions/gamesActions';
import GameName from './components/GameName';
import Input from '../../components/Input';
import Button from '../../components/Button';
import gamesStyles from './Games.scss';

export class GamesClass extends React.Component {
  constructor(props) {
    super(props);
    this.addGame = this.addGame.bind(this);
    this.inputOnChange = this.inputOnChange.bind(this);

    this.state = {
      inputValue: ''
    };
  }

  static getGames(games) {
    const elements = [];

    if (!games) {
      return null;
    }

    games.forEach((game, index) => {
      const key = `game${index}`;
      elements.push(<div key={key}>{game.name}</div>);
    });

    return elements;
  }

  addGame() {
    const { inputValue } = this.state;
    const { addGameAction } = this.props;

    if (inputValue !== '') {
      addGameAction({ name: inputValue });
      this.setState({ inputValue: '' });
    }
  }

  inputOnChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    const { inputValue } = this.state;
    const { games } = this.props;

    return (
      <div className={gamesStyles.wrapper}>
        <h1>Games!!</h1>
        <div>
          <Input value={inputValue} onChange={this.inputOnChange} />
          <Button onAction={this.addGame} name="Add Game" />
        </div>
        {GamesClass.getGames(games)}

        <GameName />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    games: state.games
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addGameAction: bindActionCreators(gamesActions.addGame, dispatch)
  };
}

GamesClass.propTypes = {
  addGameAction: PropTypes.func.isRequired,
  games: PropTypes.instanceOf(Array)
};
//
GamesClass.defaultProps = {
  games: []
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamesClass);
