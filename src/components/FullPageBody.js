import React from "react";
import Header from "./Header";
import "fullpage.js/vendors/scrolloverflow"; 
import ReactFullpage from "@fullpage/react-fullpage";
import Typist from 'react-typist';

class FullPageBody extends React.Component {
  
    
      render() {
        return (
            <div>
            <Header />
            <ReactFullpage
            render={({ state, fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  <div className="section">
                  <div className="container">
                  <div className="context">
                  <Typist
                  cursor={{show: false}}>
                  <Typist.Delay ms={1200} />
                    <h3>ColibriSoft занимается дизайном и разработкой сайтов, <br /> мобильных и десктоп приложений, а также <br /> созданием Telegram ботов.</h3>
                  </Typist>
                  </div>
                  </div>
                  <div className="area" >
                  <ul className="circles">
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                  </ul>
          </div>
                  </div>
                  <div className="section">
                    <p>Section 2</p>
                  </div>
                  <div className="section">
                    <p>Section 3</p>
                  </div>
                </ReactFullpage.Wrapper>
              );
            }}
          />
          </div>
        );
      }
    }

export default FullPageBody;