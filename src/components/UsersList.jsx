import React, { PropTypes } from 'react';
import { ADD_USER } from '../actions/usersActions';


export default class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.dispatch({
      type: ADD_USER,
    });
  }

  render() {

    const { users } = this.props

    return <div>
      <strong>Count: {users.length}</strong>
      <ul>
        {users.map((item, index) => {
          return <li key={`index-${index}`}>{item}</li>;
        })}
      </ul>
      <button onClick={this.handleClick}>Add</button>
    </div>;
  }

}

UsersList.propTypes = {
  dispatch: PropTypes.func, // container redux
  users: PropTypes.array, // container redux
};
