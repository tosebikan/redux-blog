import {GET_POST, GET_POST_SUCCESS, GET_POST_FAILURE} from '../actions/constants/action-types';

const initialState={
  posts: [],
  loading: false,
  hasErrors: false
}

export default function postReducer(state = initialState, action){
  switch(action.type){
    case GET_POST:
    return{
      ...state,
      loading: true
    }
    case GET_POST_SUCCESS:
    return{
      ...state,
      posts: action.payload,
      loading: false,
      hasErrors: false
    }
    case GET_POST_FAILURE:
    return{
      ...state,
      loading: false,
      hasErrors: true
    }
    default: return state;
  }
}
