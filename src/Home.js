import React, {Component, useState, useEffect} from 'react'
import ListComponent from  './ListComponent';
import axios from 'axios';

class Home extends Component{
    state = {
        cafeterias: []
    }

    componentDidMount(){
        axios.get('https://cafeterias-app.firebaseio.com/cafeterias.json').then(result => {
          const cafeteriasArray = [];
          const cafeteriasData = result.data;
          for(const key in cafeteriasData)
          {
            if(cafeteriasData[key] != null)
                cafeteriasArray.push({name: cafeteriasData[key].name})
          }
          this.setState({
              cafeterias: cafeteriasArray
          })
        });
    }

    render(){
        return(
            <div>
                {
                    <ListComponent list = {this.state.cafeterias} />
                }
            </div> 
        )
    }
}

export default Home;
