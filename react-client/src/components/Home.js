import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

class Home extends Component {
  constructor(props) {
    super(props);

  }



  render() {

    const style = {
      padding: '10px',
      width: '40%',
      alignSelf: 'flex-start',
    };

    return (
      <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around', alignContent: 'space-between', alignItems: 'flex-start', width: '80%', margin: 'auto', height: '85%', marginTop: '10px', flexGrow: '2'}}>
          <img src='https://i.imgur.com/l9eQyIX.jpg' style={{width: '40%'}}/>
          <div style={{maxWidth: '45%', textAlign: 'center'}}>
            <span style={{fontSize: '1.5em', fontWeight: 'bold'}}>Celebrating 40 years of excellence!</span><br></br><br></br>
            C.H. Attick Electric is a family owned and operated electrical contracting company specializing in commercial and industrial work. Many of its projects include schools, office buildings, shopping centers, wastewater treatment plants, and pump stations.
          </div>
              <Paper style={style} zDepth={2}>
              <div style={{textAlign: 'center', fontSize: '1.5em'}}>Services</div>
              <ul>
                <li>
                  Industrial
                </li>
                <li>
                  Commercial
                </li>
                <li>
                  Service
                </li>
                <li>
                  Design Build
                </li>
                <li>
                  Site Improvements: Excavation and Concrete
                </li>
              </ul>
            </Paper>
            <img src='https://i.imgur.com/FR5WYxp.jpg' style={{width: '40%'}}/>
            <div style={{fontSize: '1.5em', background: '#584915', padding: '20px', color: 'white', boxShadow: '0 5px 5px 0 rgba(0,0,0,0.05)', borderRadius: '10px'}}>
              Call us now at (301) 870-3700!
            </div>
      </div>
    );
  }
}

export default Home;
