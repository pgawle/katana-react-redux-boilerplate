import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';

export class List extends React.Component {
  static getTasks(tasklist) {
    const elements = [];

    if (!tasklist) {
      return null;
    }

    tasklist.forEach((task, index) => {
      const key = `task${index}`;
      elements.push(
        <div className={styles.item} key={key}>
          {task.name}
        </div>
      );
    });

    return elements;
  }

  render() {
    const { tasks } = this.props;
    return <div className={styles.wrapper}>{List.getTasks(tasks)}</div>;
  }
}

List.propTypes = {
  tasks: PropTypes.instanceOf(Array)
};

List.defaultProps = {
  tasks: []
};

export default List;
