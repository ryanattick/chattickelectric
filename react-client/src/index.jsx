import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/contact.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <div className="App">
        <img src='https://i.imgur.com/lTvTCbs.png' alt="" style={{margin: 'auto', display: 'block', width: '40%'}}/>
        <MuiThemeProvider>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            inkBarStyle={{backgroundColor: 'red', marginLeft: '12.5%'}}
            tabItemContainerStyle={{width: '80%', margin: 'auto'}}
          >
            <Tab label="Home" value="a" style={{backgroundColor: '#584915'}}>
              <div>
                <Home/>
              </div>
            </Tab>
            <Tab label="About Us" value="b" style={{backgroundColor: '#584915'}}>
              <div>
                <About/>
              </div>
            </Tab>
            <Tab label="Contact" value="c" style={{backgroundColor: '#584915'}}>
              <Contact/>
            </Tab>
          </Tabs>
        </MuiThemeProvider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
