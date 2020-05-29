import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Card } from 'react-bootstrap';
 
class DashCalendar extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <Card>
      
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </Card>
    );
  }
};
export default DashCalendar;