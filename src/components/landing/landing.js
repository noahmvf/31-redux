import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as sectionActions from '../../action/section';
import SectionForm from '../section-form/section-form';
import Section from '../section/section';

class Landing extends React.Component {
  render() {
    const { sections, sectionCreate } = this.props;
    return (
      <div>
        <SectionForm onComplete={sectionCreate} />
        {
          sections.map((currentSection, i) => <Section section={currentSection} key={i} />)
        }
      </div>
    );
  }
}

Landing.propTypes = {
  sections: PropTypes.array,
  sectionCreate: PropTypes.func,
};

// This is us grabbing the Redux store to make those props of this component
const mapStateToProps = (store) => {
  return {
    sections: store,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sectionCreate: data => dispatch(sectionActions.create(data)),
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
