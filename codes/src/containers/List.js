import {connect} from 'react-redux';

import List from '../components/chapter06/List';

export default connect(state => state.dataReducer)(List);