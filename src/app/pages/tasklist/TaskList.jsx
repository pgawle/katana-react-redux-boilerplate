import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { addTask } from '../../redux/tasklist/actions';
import Header from './components/header';
import Input from '../../../ui/inputs/baseInput';
import styles from './TaskList.scss';
import Button from '../../../ui/buttons/primaryButton';
import { selectTasks } from '../../redux/tasklist/selectors';

export class TaskListClass extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.inputOnChange = this.inputOnChange.bind(this);

    this.state = {
      inputValue: ''
    };
  }

  static getTasks(tasklist) {
    const elements = [];

    if (!tasklist) {
      return null;
    }

    tasklist.forEach((task, index) => {
      const key = `task${index}`;
      elements.push(<div key={key}>{task.name}</div>);
    });

    return elements;
  }

  handleAddTask() {
    const { inputValue } = this.state;
    const { addNewTask } = this.props;

    if (inputValue !== '') {
      addNewTask({ name: inputValue });
      this.setState({ inputValue: '' });
    }
  }

  inputOnChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    const { inputValue } = this.state;
    const { tasklist } = this.props;

    return (
      <div className={styles.wrapper}>
        <Header />
        <div>
          <Input value={inputValue} onChange={this.inputOnChange} />
          <Button onAction={this.handleAddTask} name="Add Task" />
        </div>
        {TaskListClass.getTasks(tasklist)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasklist: selectTasks(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewTask: bindActionCreators(addTask, dispatch)
  };
}

TaskListClass.propTypes = {
  addNewTask: PropTypes.func.isRequired,
  tasklist: PropTypes.instanceOf(Array)
};

TaskListClass.defaultProps = {
  tasklist: []
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskListClass);
