import React, { useState, useRef, useEffect, useCallback } from 'react'

import { Button } from '../'
import { Card } from '../'

import './AddForm.scss'
import closeSvg from '../../assets/close.svg'
import addSvg from '../../assets/add.svg'

export const AddForm = ({ children, isEmptyPanel, panelIdx, onAddColumn, onAddCard }) => {
  const [showForm, setShowForm] = useState(false)
  const [value, setValue] = useState('')
  const textareaRef = useRef(null)

  const formRef = useRef()

  useEffect(() => {
    document.body.addEventListener('click', handleOnOut)
    return () => {
      document.body.removeEventListener('click', handleOnOut)
    }
  }, [])

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [showForm])

  const handleOnOut = useCallback(
    (e) => {
      const path = e.path || (e.composedPath && e.composedPath())
      if (!path.includes(formRef.current)) {
        setShowForm(false)
      }
    },
    [formRef],
  )

  const handleTextareaKey = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        isEmptyPanel ? onAddColumn(value) : onAddCard(panelIdx, value)
        setShowForm(false)
        setValue('')
      }
    },
    [panelIdx, value],
  )

  const handleAddCard = useCallback(() => {
    onAddCard(panelIdx, value)
    setShowForm(false)
    setValue('')
  }, [panelIdx, value])

  const handleAddPanel = () => {
    onAddColumn(value)
    setShowForm(false)
    setValue('')
  }

  return (
    <>
      {showForm ? (
        <div ref={formRef} className="add-form">
          <div className="add-form__input">
            <Card>
              <textarea
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleTextareaKey}
                value={value}
                placeholder={isEmptyPanel ? 'Enter the column name' : 'Enter the card name'}
                ref={textareaRef}
                rows="3"
              />
            </Card>
            <div className="add-form__bottom">
              {isEmptyPanel ? (
                <Button onClick={handleAddPanel}>Add a column</Button>
              ) : (
                <Button onClick={handleAddCard}>Add a card</Button>
              )}
              <img onClick={() => setShowForm(false)} src={closeSvg} alt="Close svg icon" />
            </div>
          </div>
        </div>
      ) : (
        <div className="add-form__bottom">
          <div onClick={() => setShowForm(true)} className="add-form__bottom-add-btn">
            <img src={addSvg} alt="Add svg icon" />
            <span>{isEmptyPanel ? 'Add one more column' : 'Add one more card'}</span>
          </div>
        </div>
      )}
    </>
  )
}

export default AddForm
