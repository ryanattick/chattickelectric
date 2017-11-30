// React
import React, { Component } from 'react';

// Material UI
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

// Styles
import style from '../../styles/home.css';

class Home extends Component {
  constructor(props) {
    super(props);

  }



  render() {


    const PaperStyle = {
      display: 'inline',
      padding: '20px',
      width: '40%'
    };

    return (
      <div className={style.home_container}>
        <Card
          style={{width: '40%'}}>
          <CardHeader
            title='Celebrating 40 years of excellence!'

          />
          <CardMedia>
            <img src='chattick.jpg' alt="" />
          </CardMedia>
          <CardText>
            C.H. Attick Electric is a family owned and operated electrical contracting company specializing in commercial and industrial work. Many of its projects include schools, office buildings, shopping centers, wastewater treatment plants, and pump stations.
          </CardText>
        </Card>
        <Paper style={PaperStyle} zDepth={2}>
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

/*
{/* <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', alignContent: 'stretch', alignItems: 'flex-start'}}>
  <img src='chattick.jpg' style={{width: '35%', marginLeft: '100px', marginTop: '20px'}}/>
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
*/

export default Home;
