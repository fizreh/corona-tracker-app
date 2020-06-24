import React from 'react';
import Cards from './components/Cards/Cards';
import Countries from './components/CountryPicker/CountryPicker';
import Charts from './components/Charts/Charts';
import { fetchData } from './Api';
import styles from './App.module.css';
import coronaImage from './Images/covid19_red.jpg';

//import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data : fetchedData, country: country});
    console.log(fetchedData);
  }

  render() {
    const { data, country } = this.state;

    return (
      <div>
      <div className={styles.container}>
        <img className= {styles.image} src = {coronaImage} alt = "Covid-19"/>
        <Cards data={data} />
        
      </div>
      <div className={styles.container1}>
      <Countries handleCountryChange={this.handleCountryChange}/>
      <Charts data={data} country={country} /> </div>
        
     
      </div>
    );
  }
}

export default App;