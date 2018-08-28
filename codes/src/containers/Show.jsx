import React from 'react';
import { connect } from 'react-redux';
import Show from '../components/Show';

export default connect(state => state.routing)(props => <Show {...props} />);