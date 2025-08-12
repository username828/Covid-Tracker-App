import React from 'react';
import styles from './App.module.css';
import { fetchData } from './api';
import covidImage from './images/image.png'

//for readability - create index.jsx in components
import {Cards , Chart, CountryPicker} from './components';
class App extends React.Component {
  //constructor constructed in backend
  state = {
    data: {},
    country: '',
  }
  async componentDidMount (){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData})
  }

  handleCountryChange = async (country)=>{
    //fetchData
    const fetchedData=await fetchData(country);

    //setState

    this.setState({data: fetchedData, country: country})
  }
  render(){
    const {data,country} = this.state;
    return(
      <div className={styles.container}>
        <img className={styles.image} src={covidImage} alt="COVID-19" />
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
      </div>
    )
  }
}

export default App;
