import React, { Component } from 'react';
import {UserX} from '../../App';
import { ReportModal } from '../ReportModal';
export interface EntryProps {
    Place: number,
    Username: string,
    Score: number,
    Date: Date,
    Time: number
}
export interface EntryState {
    entryPlace: number,
    entryDate: Date,
    entryTime: number,
    entryScore: number,
    entryUser: string
    showModal: boolean;
}
export class Entry extends Component<EntryProps, EntryState> {
    constructor(props: EntryProps) {
        super(props);
        this.state = {
            entryPlace: props.Place,
            entryDate: props.Date,
            entryTime: props.Time,
            entryScore: props.Score,
            entryUser: props.Username,
            showModal: false
        }
    }

    reportUser = () => {
        this.setState({showModal: true});
    } 

    getNumberWithOrdinal = (n: number) => {
        var s=["th","st","nd","rd"],
        v=n%100;
        return n+(s[(v-20)%10]||s[v]||s[0]);
     }

render() {
    
    
    return(
       <tr>
           <td>{this.getNumberWithOrdinal(this.state.entryPlace)}</td>
           <td>{this.state.entryUser}</td>
           <td>{Math.floor(this.state.entryScore)}</td>
           <td>{this.state.entryTime}</td>
           <td>{this.state.entryDate}</td>
           <td><button onClick={this.reportUser}>
           <style>{`button {
               border: none;
               background: none;
               color: #AAABB8;
           }`}</style>
           <UserX />
           </button>
           </td>
           {this.state.showModal ? <ReportModal reportedEntry={this.props}/> : null}
       </tr>
    );
}
}
