import React, { useState, useRef, useEffect } from 'react';

import { Button } from '../Button';
import { Card } from '../Card';

import './AddForm.scss';
import closeSvg from '../../assets/close.svg';
import addSvg from '../../assets/add.svg';

export const AddForm = ({ children, isEmptyPanel }) => {
  const [showForm, setShowForm] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [showForm]);

  return (
    <>
      {showForm ? (
        <div className="add-form">
          <div className="add-form__input">
            <Card><textarea placeholder={isEmptyPanel ? "Enter the column name" : "Enter the card name"} ref={textareaRef} rows="3"></textarea></Card>
            <div className="add-form__bottom">
              <Button>{isEmptyPanel ? "Add a column" : "Add a card"}</Button>
              <img onClick={setShowForm.bind(this, false)} src={closeSvg} alt="Close svg icon" />
            </div>
          </div>
        </div>
      ) : (
          <div className="add-form__bottom">
            <div onClick={setShowForm.bind(this, true)} className="add-form__bottom-add-btn">
              <img src={addSvg} alt="Add svg icon" />
              <span>{isEmptyPanel ? 'Add one more column' : 'Add one more card'}</span>
            </div>
          </div>
        )}
    </>
  );
};


export default AddForm;