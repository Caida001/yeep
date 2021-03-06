import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {category: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(filter, updateFilter) {
    return e => (
      updateFilter(filter, this.state.category),
      this.props.history.push(`/search/${this.state.category}`)
    );
  }

  handleChange(e) {
    this.setState({category: e.currentTarget.value});
  }

  handleClick(cate, updateFilter){
    return e => (
      updateFilter("category", cate),
      this.props.history.push('/search')

    );
  }

  render() {
    return (
      <div>
        <div className="nav-container">
          <div className="nav-upper">
            <div className="upper-inner-container">
              <a href="#/"><h2 style={{color: 'white', margin: '15px'}}>Yeep</h2></a>
              <div className="search-bar-container">
                <form className="search-bar"  onSubmit={this.handleSubmit('category', this.props.updateFilter)} >
                  <span className="header">Find</span>
                  <input className="keywords" type="text" value={this.state.category} placeholder="restaurants, nightlife, dry cleaning, auto..." onChange={this.handleChange}/>
                  <span className="header">Near</span>
                  <input type="text" className="location" placeholder="Civic Center, Manhattan, NY" />
                  <button type="submit" className="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="nav-lower">
            <div className="lower-inner-container">
              <div className="tags">
                <a style={{cursor: 'pointer'}} onClick={this.handleClick("restaurants", this.props.updateFilter)}>
                  <h3><i className="fa fa-cutlery"></i>Restaurant</h3>
                </a>
                <a style={{cursor: 'pointer'}} onClick={this.handleClick("nightlife", this.props.updateFilter)}>
                  <h3><i className="fa fa-glass"></i>Nightlife</h3>
                </a>
                <a style={{cursor: 'pointer'}} onClick={this.handleClick("home service", this.props.updateFilter)}>
                  <h3><i className="fa fa-wrench"></i>Home Services</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
  }
}

export default withRouter(SearchBar);
