const CARDS_ADD = 'CARDS_ADD';
const PANELS_ADD = 'PANELS_ADD';

const initialState = [
  {
    title: 'Mounth plans',
    cards: [
      'Pass some exams',
      'Go to bday to my friend',
      'English courses! I need it.'
    ]
  },
  {
    title: 'Week plans',
    cards: [
      'Buy new t-shirt',
      'Start jogging',
      'Meet some friends',
      'Add Results column'
    ]
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case CARDS_ADD:
      return [
        ...state,
        state.items.map((item, index) => {
          if (action.payload.index === index) {
            return {
              ...item,
              cards: [
                ...item.cards,
                action.payload.text
              ]
            }
          }
          return item;
        })
      ];
    case PANELS_ADD:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
};