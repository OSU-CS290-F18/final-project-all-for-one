import React, { Component } from 'react';

export interface EntryProps {
entryPlace: number,
entryTime: Date,
entryScore: number,
entryUser: string
}
export interface EntryState {
    entryPlace: number,
    entryTime: Date,
    entryScore: number,
    entryUser: string
}
export class Entry extends Component<EntryProps, EntryState> {
    constructor(props: EntryProps) {
        super(props);
        this.state = {
            entryPlace: props.entryPlace,
            entryTime: props.entryTime,
            entryScore: props.entryScore,
            entryUser: props.entryUser
        }
    }
render() {
    return(
        <div id="board-entry-container">
        <ul>
            <li>{this.state.entryPlace}</li>
            <li>{this.state.entryScore}</li>
            <li>{this.state.entryUser}</li>
            <li>{this.state.entryTime}</li>
        </ul>
        </div>
    );
}
}
