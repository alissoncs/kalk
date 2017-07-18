
import { ADD_USER } from '../actions/usersActions';

const usersReducer = (state = ['sampleeee'], action) => {

  if (action.type === ADD_USER) {
    return [...state, 'example ' + state.length]
  } else {
    return state;
  }

};

export default usersReducer;
