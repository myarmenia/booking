import React from 'react';
import './App.css';

class Single extends React.Component {
    
    constructor () {
        super ();

        this.state = {
            checkInState: undefined,
            checkOutState: undefined,
        }
    }

    render () {
        let p1  = this.props.idProps;
 
        const checkInCheckOut = () => {
            this.setState({checkInState: this.refs.check_in_ip.value, checkOutState: this.refs.check_out_inp.value})
        }

        return (
            <div>
                <div id={this.state.openCloseState ? 'close' : 'open_search_folder_ns'}>
                <div className="container mt-4">
                   
                        <img src={"/images/"+p1[0].photo} width="500" alt={p1[0].name} />
                        <h2> {p1[0].name} </h2>
                        
                        <div>
                            <span> 
                                <strong>
                                    City: {p1[0].city}, {p1[0].stars} stars 
                                </strong>
                            </span>
                        </div>

                        <p className="mt-2"> {p1[0].description} </p>

                        <label>
                            Check In <input type="date" ref="check_in_ip" />
                            &nbsp;&nbsp;&nbsp;
                            Check Out <input type="date" ref="check_out_inp" />
                            &nbsp;&nbsp;&nbsp;
                            <button type="button" className="btn btn-primary" onClick={checkInCheckOut}> Submit </button>
                        </label>

                        <div className="mt-2">
                            <p>Check-in: <strong>{this.state.checkInState}</strong></p>
                            <p>Check-out: <strong>{this.state.checkOutState}</strong></p>
                            <div className="success_css"> 
                                {this.state.checkInState !== undefined && this.state.checkOutState !== undefined ? 'Successful Check-in' : ''}
                            </div>
                        </div>

                        </div>
                        </div>
                 <a href="/"> <span id="closeDiv">&times;</span> </a>
            </div>
        )
    }
}

export default Single;