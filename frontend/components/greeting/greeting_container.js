import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { updateFilter } from '../../actions/filter_actions';
import { fetchBusinesses } from '../../actions/business_actions';



const mapStateToProps = (state) => {

  const currentUser = state.entities.users[state.session.id];
  const category = state.ui.filters.category;
  const businesses = Object.values(state.entities.businesses);

  return { currentUser, category, businesses };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  fetchBusinesses: () => dispatch(fetchBusinesses())

});



export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
