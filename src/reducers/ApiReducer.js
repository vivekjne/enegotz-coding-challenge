


import { GET_DATA,SET_LOADING,SET_ERROR } from '../actions/types';

const initialState = {
  isLoading: true,
  data: [],
  make:[],

};




export default function(state = initialState, action) {
  switch (action.type) {

    case SET_LOADING:
        return{
            ...state,
            isLoading:action.flag
        }

    case GET_DATA:
      return {
        ...state,
        isLoading: false,
        data: action.data,
        make:action.make
      };

    default:
      return state;
  }
}