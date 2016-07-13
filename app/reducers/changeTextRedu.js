import CHANGE_TEXT from '../actions';

const initialState = {
  text: 'Hello'
};

export default function changeText(state = initialState, action) {
    console.log("reducer initialState "+state.text);
  switch (action.type) {
    case 'CHANGE_TEXT':
    var newState = {
      ...state,
      text: "Bye"
    };
    console.log("reducer changeText "+newState.text);
      return newState;
    default:
    console.log("reducer default");
      return state;
  }
}
