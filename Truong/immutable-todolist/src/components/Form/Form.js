import React, { Component } from 'react';
import FromInputList from './FormInputList/FormInputList';
import ShowList from './ShowList/ShowList';
export class Input extends Component {
    render() {
        return (
            <div className="marginbody">
                <FromInputList />
            </div>
        )
    }
}
export class FromNoInput extends Component {
    render() {
        return (
            <div className="marginbody">
                <ul className="list-group">
                    <ShowList className="ShowList" />
                </ul>
            </div>
        )
    }
}