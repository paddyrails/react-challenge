import React, { useRef, Component } from 'react';

class PokemonFilter extends Component {
    
    // selectEl = useRef(null);

    handleChange = (e) => {
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
          if (options[i].selected) {
            value.push(options[i].value);
          }
        }
        this.props.applyFilter(value);
      }
      render(){
    return(
    <React.Fragment>
       
            <label htmlFor="cars">Choose a car:</label>
            <select name="cars" 
                    id="cars" 
                    multiple
                    onChange={this.handleChange}
                    >
                {this.props.filterOn.map(filter => <option value={filter}>{filter}</option>)}
            </select>
            <button  
                onClick={this.clearAllHandler}>
                Submit
            </button>

    </React.Fragment>        

)
}
    }

export default PokemonFilter;