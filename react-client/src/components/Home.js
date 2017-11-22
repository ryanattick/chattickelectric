import React, { Component } from 'react';
import Paper from 'material-ui/Paper';


class Home extends Component {
  constructor(props) {
    super(props);

  }



  render() {

    const style = {
      marginRight: '140px',
      marginTop: '20px',
      marginBottom: '20px',
      display: 'inline',
      padding: '20px',
      width: '30%'
    };

    return (
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', alignContent: 'stretch', alignItems: 'flex-start'}}>
          <img src='https://i.imgur.com/l9eQyIX.jpg' style={{width: '35%', marginLeft: '100px', marginTop: '20px'}}/>
          <div style={{maxWidth: '45%', margin: '20px', textAlign: 'center'}}>
            <h4 >Celebrating 40 years of excellence!</h4>
            C.H. Attick Electric is a family owned and operated electrical contracting company specializing in commercial and industrial work. Many of its projects include schools, office buildings, shopping centers, wastewater treatment plants, and pump stations.
          </div>
          <h3 style={{margin: 'auto'}}>
            Contact us now at (301) 870-3700!
          </h3>
            <Paper style={style} zDepth={2}>
              <h4 style={{marginBottom: '20px'}}>Services</h4>
              <ul style={{listStyleType: 'none'}}>
                <li>
                  service 1
                </li>
                <li>
                  service 2
                </li>
                <li>
                  service 3
                </li>
                <li>
                  service 4
                </li>
                <li>
                  service 5
                </li>
              </ul>
            </Paper>
      </div>
    );
  }
}

export default Home;
