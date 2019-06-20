import React from 'react';

const colorArray = [
  "#1B365D",
  "#00B7BD",
  "#EBBC4E",
  "#88A3B0",
];

const textArray = [
  "#design",
  "#developers",
  "#code",
  "#itcompany",
];

class Preloader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: "#295EAF",
      text: "#innovation"
    };
  }


  componentDidMount() {
    let colorPos = 0;
    setInterval(() => {
      if(colorArray.length - 1 > colorPos) {
        this.setState({
          color : colorArray[colorPos],
          text: textArray[colorPos]
        });
        colorPos++;
      } else {
        this.setState({
          color : colorArray[colorPos],
          text: textArray[colorPos]
        });
        colorPos = 0;
      }
    }, 500)
  }


  render() {
    const stylesObj = {
      background: this.state.color
    };

    return (
      <div id="hello-world" style={stylesObj} className="preloaderContainer">
          <h2>{this.state.text}</h2>        
      </div>
    )
  }
}

export default Preloader;
