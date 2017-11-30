import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 900,
    height: 800,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'https://i.imgur.com/rbqYoZC.jpg',
    name: 'Lucille Attick',
    position: 'Co-Founder',
  },
  {
    img: 'https://i.imgur.com/21DDHf4.jpg',
    name: 'Tom Attick',
    position: 'Co-Owner/Electrical Contractor',
  },
  {
    img: 'https://i.imgur.com/7xKhc3N.jpg',
    name: 'Traci Norris',
    position: 'Co-Owner/Accountant',
  },
  {
    img: 'https://i.imgur.com/SVHcLWn.jpg',
    name: 'Patty Therres',
    position: 'Administrative Assistant',
  },
  {
    img: 'https://i.imgur.com/5vNtfsv.jpg',
    name: 'Bob Wilson',
    position: 'Electrical Foreman',
  },
  {
    img: 'https://i.imgur.com/huCcLxq.jpg',
    name: 'Marty Miller',
    position: 'Project Coordinator',
  },
  {
    img: 'https://i.imgur.com/CnlSRFh.jpg',
    name: 'Mike Miller',
    position: 'Superintendent',
  },
  {
    img: 'https://i.imgur.com/QrKHik1.jpg',
    name: 'Steve Watson',
    position: 'Superintendent',
  },
  {
    img: 'https://i.imgur.com/Iou2NV5.jpg',
    name: 'Bob Demarr',
    position: 'Superintendent',
  },
];


class About extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <MuiThemeProvider>
          <div style={styles.root}>
            <GridList
              cellHeight={180}
              style={styles.gridList}
            >
              <Subheader style={{fontSize:'40px', textAlign: 'center', margin:'20px', color: 'black'}}><strong>Meet the Team</strong></Subheader>
              {tilesData.map((tile) => (
                <GridTile
                  key={tile.img}
                  title={tile.name}
                  subtitle={<span><b>{tile.position}</b></span>}
                >
                  <img src={tile.img} />
                </GridTile>
              ))}
            </GridList>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default About;
