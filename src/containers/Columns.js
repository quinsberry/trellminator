import React, { useEffect, useCallback } from 'react'
import { Column } from '../components'
import { useSelector, useDispatch } from 'react-redux'

import { actions as columnsActions } from '../store/reducers/columns'

const Panels = () => {
  const dispatch = useDispatch()
  const { columns } = useSelector((state) => ({
    columns: state.columns,
  }))

  const { addColumn, addCard, deleteColumn, getDataFromLocalStorage } = columnsActions
  useEffect(() => {
    dispatch(getDataFromLocalStorage())
  }, [])

  const addColumnDispatch = (name) => {
    dispatch(addColumn(name))
  }

  const addCardDispatch = useCallback((panelIndex, text) => {
    dispatch(addCard(panelIndex, text))
  }, [])

  const deleteColumnDispatch = useCallback((panelIndex, text) => {
    dispatch(deleteColumn(panelIndex))
  }, [])

  return (
    <>
      {columns.map((item, idx) => (
        <Column
          key={`${idx}-${item.title}`}
          {...item}
          panelIdx={`${idx}-${item.title}`}
          onAddColumn={addColumnDispatch}
          onAddCard={addCardDispatch}
          onDeleteColumn={deleteColumnDispatch}
        />
      ))}
      <Column
        onAddColumn={addColumnDispatch}
        onAddCard={addCardDispatch}
        onDeleteColumn={deleteColumnDispatch}
      />
    </>
  )
}

export default Panels
