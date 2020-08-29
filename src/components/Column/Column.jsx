import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import { Card } from '../'
import { AddForm } from '../'

import './Column.scss'
import closeSvg from '../../assets/close.svg'

export const Panel = ({ panelIdx, title, cards, onAddColumn, onAddCard, onDeleteColumn }) => {
  const handleDeleteColumn = useCallback(() => {
    onDeleteColumn(panelIdx)
  }, [])

  return (
    <>
      {cards ? (
        <div className="column">
          <div className="column__inner">
            {title && (
              <div className="column__title">
                <b>{title}</b>
                <div onClick={handleDeleteColumn} className="remove-btn">
                  <img src={closeSvg} alt="Close svg icon" />
                </div>
              </div>
            )}
            <div className="column__items">
              {cards.map((card, idx) => (
                <Card key={`${idx}-${card}`}>{card}</Card>
              ))}
            </div>
            <AddForm panelIdx={panelIdx} onAddColumn={onAddColumn} onAddCard={onAddCard} />
          </div>
        </div>
      ) : (
        <div className="column column--empty">
          <div className="column__inner">
            <AddForm
              panelIdx={panelIdx}
              onAddColumn={onAddColumn}
              onAddCard={onAddCard}
              isEmptyPanel
            />
          </div>
        </div>
      )}
    </>
  )
}

Panel.propTypes = {
  cards: PropTypes.node,
  title: PropTypes.string,
}

export default Panel
