import React from 'react';
import {connect} from 'react-redux';
import Single from './SingleHotel';
import './App.css';

class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      name: 'Simon',
      status: false
    }
  }

  render () {   
    const singleHotel = (event) => {

      this.setState({status: true})

      var marvelHeroes =  this.props.testStore.Hotels.filter(function(hero) {
        return hero.id = event.target.id;
      });

      this.setState({name: marvelHeroes})
      
    }
      let ifFound=this.props.testStore.gotHotel.length === 0 ? 
      this.props.testStore.Hotels :
      this.props.testStore.gotHotel ; 
      const p1 = ifFound.map((item, index) => {
      return (
        <div className="col-lg-4 col-sm-6 col-xs-12 mb-5" key={index}>
            <img src={"/images/"+item.photo} width="100%" alt={item.name} id={item.id} onClick={singleHotel} />
            <h2> {item.name} </h2>
            
            <div>
              <span> City: {item.city}, {item.stars} stars </span>
            </div>
        
        </div>
      )
    })
    const searchFilter = () => {
      this.refs.searchInput.value.length < 1 ? 
      this.props.searchHotel(' ') :
      this.props.searchHotel(this.refs.searchInput.value);
    }

    return (
      <div>
        {
          this.state.status ? <Single idProps={this.state.name} /> : null
        }
        
        <div className="container mt-3">
          <div className="input-group mb-3">
              <input type="text" className="form-control col-lg-6" ref="searchInput" />
           
              <div className="input-group-prepend">
                  <button className="btn btn-primary" onClick={searchFilter}>Search</button>
              </div>
          </div>
          
          <div className="row">
            {p1}
          </div>

        </div> 

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  testStore: state.Hotels
});

const mapDispatchToProps = dispatch => ({
  searchHotel: (inpValue) => dispatch({type: 'SEARCH_HOTEL', payload: inpValue})
}); 

export default connect(mapStateToProps, mapDispatchToProps)(App);
