const CARDS_ADD = 'CARDS_ADD';

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CARDS_ADD:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};