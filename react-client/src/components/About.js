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
    title: 'Lucille Attick',
    author: 'Co-Founder',
  },
  {
    img: 'https://i.imgur.com/21DDHf4.jpg',
    title: 'Tom Attick',
    author: 'Co-Owner/Electrical Contractor',
  },
  {
    img: 'https://i.imgur.com/7xKhc3N.jpg',
    title: 'Traci Norris',
    author: 'Co-Owner/Accountant',
  },
  {
    img: 'https://i.imgur.com/SVHcLWn.jpg',
    title: 'Patty Therres',
    author: 'Administrative Assistant',
  },
  {
    img: 'https://i.imgur.com/5vNtfsv.jpg',
    title: 'Bob Wilson',
    author: 'Electrical Foreman',
  },
  {
    img: 'https://i.imgur.com/huCcLxq.jpg',
    title: 'Marty Miller',
    author: 'Project Coordinator',
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
                  title={tile.title}
                  subtitle={<span><b>{tile.author}</b></span>}
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
