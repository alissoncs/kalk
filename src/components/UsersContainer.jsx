import { connect } from 'react-redux';
import UsersList from './UsersList.jsx';

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
