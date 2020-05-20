import React, { Component } from 'react';
import {
    Card, Button, Form, CardTitle, 
    CardBody
} from 'reactstrap';
import TodoItems from "./TodoItems";
import '../style/todo.css';


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }

        console.log(this.state.items);

        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <Card className="scroll2">
                <CardBody>
                    <CardTitle>To-Do List</CardTitle>
                        <div className="todoListMain">
                            <div className="header">
                                <Form onSubmit={this.addItem}>
                                    <input ref={(a) => this._inputElement = a}
                                    placeholder="Add an Item">
                                    </input>
                                    <Button color="secondary" type="submit">Submit</Button>
                                </Form>
                            </div>
                            <TodoItems entries={this.state.items}
                            delete={this.deleteItem} />
                        </div>
                </CardBody>
            </Card>
        )
    }
};

export default Todo;