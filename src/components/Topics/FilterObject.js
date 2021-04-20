import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray: [
                {
                name: 'Cereza',
                title: 'Umbra Witch',
                age: 500
            },
            {
                name: 'Elly Van Houten',
                age: 18,
                hairColor: 'Orange'

             },
            {
                name: 'Tidus',
                Gender: 'Boy',
                hairColor:'Blonde'
            },
        ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    filterThrough(prop){
        let people = this.state.unFilteredArray;
        let filteredArray = [];

        for(let i = 0; i < people.length; i++) {
            if(people[i].hasOwnProperty(prop)){
                filteredArray.push(people[i]);
            }
        }

        this.setState({ filteredArray: filteredArray});
    }


    render(){
        return (
            <div className='puzzleBox FilterObjectPB'>
                <h4> Filter Object </h4>
                <span className='puzzleText'> Original: {JSON.stringify(this.state.unFilteredArray, null, 10)} </span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}/>
                <button className='confirmationButton' onClick={() => this.filterThrough(this.state.userInput)}> Filter </button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray, null, 10)} </span>
            </div>
        )
    }
}