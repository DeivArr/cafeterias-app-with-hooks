import React, {useState, useEffect} from 'react'
import ComponentTest from  './ComponentTest';
import axios from 'axios';

const Home = (props) => {  
    const [cafeterias, setCafeterias] = useState([]);
    
    useEffect(() => {
        axios.get('https://cafeterias-app.firebaseio.com/cafeterias.json').then(result => {
          const cafeteriasArray = [];
          const cafeteriasData = result.data;
          for(const key in cafeteriasData)
          {
              if(cafeteriasData[key] != null)
                setCafeterias(cafeterias.concat(key, cafeteriasData[key].name));
          }
          
          
        });
      }, []);

    return (
        <div>
            <ComponentTest list = {cafeterias} />
        </div>
    );
}

export default Home;
