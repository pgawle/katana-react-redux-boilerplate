import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as gamesActions from '../../redux/actions/gamesActions';
import Header from './components/header';
import Input from '../../../ui/inputs/baseInput';
import gamesStyles from './TaskList.scss';
import Button from '../../../ui/buttons/primaryButton';
import { selectGames } from '../../redux/tasklist/selectors';

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
        <Header />
        <div>
          <Input value={inputValue} onChange={this.inputOnChange} />
          <Button onAction={this.addGame} name="Add Task" />
        </div>
        {GamesClass.getGames(games)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    games: selectGames(state)
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

GamesClass.defaultProps = {
  games: []
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamesClass);
