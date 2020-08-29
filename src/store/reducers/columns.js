import { useLocalStorage } from '../../hooks'
import { makeValidIndex } from '../../utils/helpers'

const GET_DATA_LS = 'columns/GET_DATA_LS'
const CARDS_ADD = 'columns/CARDS_ADD'
const COLUMNS_ADD = 'columns/COLUMNS_ADD'
const COLUMN_DELETE = 'columns/COLUMN_DELETE'

const initialState = [
  {
    title: 'Mounth plans',
    cards: [
      'Pass some exams',
      'Go to bday to my friend',
      'English courses! I need it.',
      'Pass some exams',
      'Go to bday to my friend',
      'English courses! I need it.',
      'Pass some exams',
      'Go to bday to my friend',
      'English courses! I need it.',
      'Pass some exams',
      'Go to bday to my friend',
      'English courses! I need it.',
      'Pass some exams',
      'Go to bday to my friend',
      'English courses! I need it.',
      'Pass some exams',
      'Go to bday to my friend',
      'English courses! I need it.',
      'Pass some exams',
      'Go to bday to my friend',
      'English courses! I need it.',
      'Pass some exams',
      'Go to bday to my friend',
      'English courses! I need it.',
      'Pass some exams',
      'Go to bday to my friend',
      'English courses! I need it.',
      'Pass some exams',
      'Go to bday to my friend',
      'English courses! I need it.',
    ],
  },
  {
    title: 'Week plans',
    cards: ['Buy new t-shirt', 'Start jogging', 'Meet some friends', 'Add Results column'],
  },
]

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_LS: {
      const localStorageData = useLocalStorage()
      return localStorageData ? localStorageData : []
    }
    case CARDS_ADD: {
      const { panelIdx, text } = action.payload

      const newState = state.map((obj, idx) =>
        panelIdx === makeValidIndex(idx, obj.title) ? { ...obj, cards: [...obj.cards, text] } : obj,
      )
      useLocalStorage(newState)
      return newState
    }
    case COLUMNS_ADD: {
      const newState = [...state, { title: action.payload, cards: [] }]
      useLocalStorage(newState)
      return newState
    }
    case COLUMN_DELETE: {
      const newState = state.filter((obj, idx) => makeValidIndex(idx, obj.title) !== action.payload)
      useLocalStorage(newState)
      return newState
    }
    default:
      return state
  }
}

export const actions = {
  getDataFromLocalStorage: (payload) => ({
    type: GET_DATA_LS,
  }),
  addColumn: (payload) => ({
    type: COLUMNS_ADD,
    payload,
  }),
  addCard: (panelIdx, text) => ({
    type: CARDS_ADD,
    payload: {
      panelIdx,
      text,
    },
  }),
  deleteColumn: (payload) => ({
    type: COLUMN_DELETE,
    payload,
  }),
}
