import React from 'react';
import '../style/dashboard.css';
import Employeecard from './Employeecard';
import Todo from './Todo';
import DashCalendar from './DashCalendar';
import { CardColumns } from 'reactstrap';
import Headerside from './Headerside';

function Dashboard() {
    return (
        <div>
            <Headerside />
        <div className="container-main">
            <CardColumns>
                <Todo />
                <DashCalendar />
                <Employeecard />
            </CardColumns>

        </div>
        </div>

    )
};

export default Dashboard;