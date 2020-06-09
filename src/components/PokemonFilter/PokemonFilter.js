import React, { useRef, Component, createRef } from 'react';

class PokemonFilter extends Component {
    
    constructor(props){
        super(props);
        this.selectEl = React.createRef();
    }

    handleChange = (e) => {
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
          if (options[i].selected) {
            value.push(options[i].value);
          }
        }
        this.props.applyFilter(value, this.props.type);
      }

      clearAllHandler = () =>{
        var options = this.selectEl.current.options
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
              options[i].selected = false;
            }
          }
          this.props.applyFilter([],this.props.type);
      }

      render(){
    return(
    <React.Fragment>
       
            <label htmlFor="filter">Filter by {this.props.type}</label><br/>
            <select name="filter" 
                    ref={this.selectEl}
                    id="filter" 
                    multiple
                    onChange={this.handleChange}
                    >
                {this.props.filterOn.map(filter => <option key={filter} value={filter}>{filter}</option>)}
            </select><br/>
            <button  
                onClick={this.clearAllHandler}>
                Clear
            </button>

    </React.Fragment>        

)
}
    }

export default PokemonFilter;