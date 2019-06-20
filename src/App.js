import React from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import FullPageBody from './components/FullPageBody';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({isLoading: false})
    }, 2500)
}
  
  render() {

    return (
      <div>
      {this.state.isLoading ? <Preloader /> : <FullPageBody />}
      </div>
    )
  }
}

export default App;
