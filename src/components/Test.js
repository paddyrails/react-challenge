import React, { Component } from 'react';
import Select from 'react-select';

class Test extends Component {
    constructor(props) {
      super(props);
      this.state = {values: []};
  
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(value) {
      this.setState({value});
    }
  
   options =
    [
       "blue","green","yello","orange","red","purple"
    ];
  
    render() {
      return (
          <React.Fragment>{this.state.value}
            <label htmlFor="cars">Choose a car:</label>
            <select  name="cars" 
                    id="cars" 
                    multiple
                    onChange={this.handleChange}
                    >
                {this.options.map(filter => <option value={filter}>{filter}</option>)}
            </select>
          <button >Submit</button>
          </React.Fragment>
      );
    }
  }

  export default Test;