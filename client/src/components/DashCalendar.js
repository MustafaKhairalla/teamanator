import React from 'react';
import { Card } from 'reactstrap';
import '../style/dashboard.css';
import SimpleReactCalendar from 'simple-react-calendar'

function DashCalendar() {
  return (
    <Card>
      <SimpleReactCalendar/>
    </Card>
  )
};

export default DashCalendar;