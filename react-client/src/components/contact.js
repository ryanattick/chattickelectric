import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Delete from 'material-ui/svg-icons/action/highlight-off';
import CircularProgress from 'material-ui/CircularProgress';
import style from '../../styles/contact.css';
import $ from 'jquery';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      validEmail: false,
      validSubject: false,
      validMessage: false,
      dialogMessage: '',
      dialogTitle: '',
      directions: [],
      email: '',
      subject: '',
      message: '',
      submitClicked: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
    this.checkSubject = this.checkSubject.bind(this);
    this.checkMessage = this.checkMessage.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.handleDirections = this.handleDirections.bind(this);
  }

  checkEmail(e) {
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) && e.target.value.length > 0) {
      this.handleOpen(e);
      this.setState({
        validEmail: false
      });
    } else if (e.target.value.length > 0){
      this.setState({
        validEmail: true,
        email: e.target.value
      });
    }
  }

  checkSubject(e) {
    if (e.target.value.length > 0) {
      this.setState({
        validSubject: true,
        subject: e.target.value
      });
    } else {
      this.setState({
        validSubject: false
      });
    }
  }

  checkMessage(e) {
    if (e.target.value.length > 0) {
      this.setState({
        validMessage: true,
        message: e.target.value
      });
    } else {
      this.setState({
        validMessage: false
      });
    }
  }

  sendEmail() {
    if (this.state.validEmail && this.state.validSubject && this.state.validMessage) {
      $.ajax({
        url: '/email',
        type: 'POST',
        data: JSON.stringify({email: this.state.email, subject: this.state.subject, message: this.state.message}),
        success: (data) => {
          console.log('POST request: success');
          this.setState({
            dialogMessage: "Thank you for your message! We'll get back as soon as we can.",
            dialogTitle: 'Message Sent!',
            open: true,
            validEmail: false,
            validSubject: false,
            validMessage: false,
            email: '',
            subject: '',
            message: ''
          });
          document.getElementById('email').value = '';
          document.getElementById('subject').value = '';
          document.getElementById('message').value = '';
        },
        error: (error) => {
          throw error;
        }
      });
    } else {
      var fieldsNeeded = [];
      if (!this.state.validEmail) {
        fieldsNeeded.push('Email');
      }
      if (!this.state.validSubject) {
        fieldsNeeded.push('Subject');
      }
      if (!this.state.validMessage) {
        fieldsNeeded.push('Message');
      }
      this.setState({
        dialogMessage: 'Please fill out the following fields before submitting:' + '\n' +  fieldsNeeded.join(',' + '\n'),
        dialogTitle: 'All fields must be filled out',
        open: true
      });
    }
  }

  handleDirections() {
    this.setState({
      submitClicked: true
    })
    var address = document.getElementById('directionInput').value;
    $.ajax({
      url: '/map',
      type: 'POST',
      data: JSON.stringify({location: address}),
      success: (data) => {
        this.setState({
          directions: data,
          submitClicked: false
        });
      },
      error: (error) => {
        throw error;
      }
    });
  }

  handleOpen(e) {
    const messages = {
      email: 'Your response must be a valid email address.  Please re-enter it. Thanks!',
      subject: 'Please enter a subject.',
      message: 'Please enter a message.'
    }
    const titles = {
      email: 'Invalid Email Address',
      subject: 'Invalid Subject',
      message: 'Invalid Message'
    }
    this.setState({dialogMessage: messages[e.target.id], dialogTitle: titles[e.target.id], open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        onClick={this.handleClose}
      />
    ];
    return (
      <div className="container" style={{width: '80%'}}>
        <Dialog
          title={this.state.dialogTitle}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {this.state.dialogMessage}
        </Dialog>
        <div style={{width: '50%', borderRadius:'5px', 'border': 'solid #584915', margin: 'auto', flexDirection: 'column', marginTop: '10px', textAlign: 'center', fontSize: '20px', boxShadow: '0 3px 6px 0 rgba(0,0,0,0.2)'}}>
          <b>Call us today at (301) 870-3700!</b>
        </div>
        <div className="row" style={{marginBottom: '20px'}}>
          <div className="col" style={{width: '50%'}}>
            <div style={{float: 'left', width: '90%', margin: '10px auto 0', boxShadow: '2px 2px 5px 1px rgba(0,0,0,0.2)', padding: '0 0 40px', borderRadius: '3px'}}>
              <h1 id={style.formHeader}>Contact Us</h1>
              <div style={{width: '90%', marginLeft:'10px'}}>
              <TextField
                id='email'
                style={{width: '90%', marginLeft:'10px'}}
                onBlur={(e) => {this.checkEmail(e)}}
                floatingLabelText="Email"
                hintText="name@email.com"
                floatingLabelFocusStyle={{color: '#d7ba57'}}
                underlineFocusStyle={{borderColor: '#d7ba57'}}
              /></div><br />
              <div style={{width: '90%', marginLeft:'10px'}}>
              <TextField
                id='subject'
                style={{width: '90%', marginLeft:'10px'}}
                onBlur={(e) => {this.checkSubject(e)}}
                floatingLabelText="Subject"
                floatingLabelFocusStyle={{color: '#d7ba57'}}
                underlineFocusStyle={{borderColor: '#d7ba57'}}
              /></div><br />
              <div style={{width: '90%', marginLeft:'10px'}}>
              <TextField
                id='message'
                style={{width: '90%', marginLeft:'10px'}}
                onBlur={(e) => {this.checkMessage(e)}}
                floatingLabelText="Message"
                hintText="Please include your name and any other additional contact information."
                floatingLabelFocusStyle={{color: '#d7ba57'}}
                underlineFocusStyle={{borderColor: '#d7ba57'}}
                multiLine={true}
              /></div><br />
              <button className={style.send} onClick={() => {this.sendEmail()}}>Send</button>
            </div>
          </div>
          <div className="col" style={{width: '50%'}}>
            <div style={{width: '100%', margin: '10px auto 0', borderRadius: '3px', border: 'solid #584915', background: '#584915', boxShadow: '0 3px 6px 0 rgba(0,0,0,0.2)'}}>
              <div style={{margin: '8px', border: 'solid black', background: 'white', textAlign: 'center'}}>
                Find us at 10485 Theodore Green Blvd, White Plains, MD 20695.
              </div>
              <a target="_blank" href="https://www.google.com/maps/place/C+H+Attick+Electric+Inc/@38.5894857,-76.9462365,15.76z/data=!4m5!3m4!1s0x0:0x527d1ce2a5d7c478!8m2!3d38.589189!4d-76.947044"><img src='map.png' style={{width: '100%'}}/></a>
            </div>
            <div className="form-group">
              <label className={style.label}>Need directions? Enter an address below.</label>
              <input type="email" className="form-control" id="directionInput" aria-describedby="emailHelp" placeholder="Street City, State ZIP"/>
              <button onClick={() => {this.handleDirections()}} type="submit" className={style.directionSubmit}>Submit</button>
              {
                this.state.submitClicked &&
                <div style={{fontWeight: 'bold', textAlign: 'center', color: '#2BBCD5', margin: '20px', fontSize: '1.5em'}}>
                  Loading... <CircularProgress style={{margin: '20px'}}/>
                </div>
              }
              {
                this.state.directions.length > 0 &&
                <div style={{marginTop: '10px', padding: '10px', width: '100%', borderRadius: '3px', backgroundColor: '#584915'}}>
                  <Delete
                    color="white"
                    style={{minWidth: '20px', float: 'right', cursor: 'pointer', margin: '0'}}
                    onClick={() => {this.setState({
                      directions: this.state.directions = 0
                    })}}
                  /><br></br>
                  {this.state.directions.map((direction, index) =>
                    <div id={style.directions} key={index}>
                      {direction}
                    </div>
                  )}
                </div>
              }
            </div>
        </div>
      </div>
    </div>
    );
  }
}


export default Contact;
