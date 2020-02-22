import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Card } from '../Card';
import { AddForm } from '../AddForm';

import './Panel.scss';



export const Panel = ({ title, cards }) => {
  return (
    <div className={classNames('panel', { 'panel--empty': !cards })}>
      {title && <div className="panel__title">{title}</div>}
      {cards && (
        <div className="panel__items">
          {cards.map((card, index) => (
            <Card key={index}>
              {card}
            </Card>
          ))}
        </div>
      )}
      <AddForm isEmptyPanel={!cards} />
    </div>
  );
};

Panel.propTypes = {
  cards: PropTypes.node,
  title: PropTypes.string,
}

export default Panel;