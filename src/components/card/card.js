import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardForm from '../card-form/card-form';
import * as cardActions from '../../action/card';

const mapDispatchToProps = dispatch => ({
  cardRemove: data => dispatch(cardActions.removeCard(data)),
  cardUpdate: data => dispatch(cardActions.updateCard(data)),
});

class Card extends React.Component {
  render() {
    const { card, cardRemove, cardUpdate } = this.props;

    return (
      <div className="card" data-cy="card">
        <p>{ card.content }</p>
        <button onClick={ () => cardRemove(card) }>Delete</button>
        <CardForm
          card={ card }
          onComplete={ cardUpdate }
        />
        </div>
    );
  }
}

Card.propTypes = {
  card: PropTypes.object,
  cardRemove: PropTypes.func,
  cardUpdate: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Card);
