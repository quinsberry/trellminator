import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Card } from '../Card';
import { AddForm } from '../AddForm';

import './Panel.scss';



export const Panel = ({ cards }) => {
  return (
    <div className={classNames('panel', { 'panel--empty': !cards })}>
      {cards && (
        <div className="panel__items">
          {cards.map((card, index) => (
            <Card key={index}>
              {card.text}
            </Card>
          ))}
        </div>
      )}
      <AddForm />
    </div>
  );
};

Panel.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Panel;