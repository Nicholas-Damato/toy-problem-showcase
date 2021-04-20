import React, { Component } from 'react';

class FilterString extends Component {
    constructor(){
        super();

        this.state = {
            unFilteredArray: ['Shulk', 'Sharla','Fiora',' Reyn','Dunban','Melia' ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val){
        this.setState({ userInput: val })
    }

    filterThrough(userInput){
        let names = this.state.unFilteredArray;
        let filteredArray = [];

        for(let i = 0; i < names.length; i++){
            if(names[i].includes(userInput)){
                filteredArray.push(names[i]);
            }
        }

        this.setState({filteredArray: filteredArray})
    }

    render() {
        return(
            <div className='puzzleBox filterStringPB'>
                <h4> Filter String</h4>
                <span className='puzzleText'> Names: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}/>
                <button className='confirmationButton' onClick={() => this.filterThrough(this.state.userInput)}> Filter </button>
                <span className='resultsBox filterStringRB'> Filtered Names: {JSON.stringify(this.state.filteredArray,null,10)}</span>
            </div>
        )
    }
}

export default FilterString;