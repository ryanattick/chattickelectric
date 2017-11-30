import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import style from '../../styles/home.css';

class Home extends Component {
  constructor(props) {
    super(props);

  }



  render() {

    return (
      <div className={style.homeContainer}>
          <img src='https://i.imgur.com/l9eQyIX.jpg' className={style.img}/>
          <div className={style.companySummary}>
            <span className={style.companySummarySpan}>Celebrating 40 years of excellence!</span><br></br><br></br>
            C.H. Attick Electric is a family owned and operated electrical contracting company specializing in commercial and industrial work. Many of its projects include schools, office buildings, shopping centers, wastewater treatment plants, and pump stations.
          </div>
              <Paper className={style.paperStyle} zDepth={2}>
              <div className={style.servicesHeader}>Services</div>
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
            <img src='https://i.imgur.com/FR5WYxp.jpg' className={style.img}/>
            <div className={style.phoneNumber}>
              Call us now at (301) 870-3700!
            </div>
      </div>
    );
  }
}

export default Home;
