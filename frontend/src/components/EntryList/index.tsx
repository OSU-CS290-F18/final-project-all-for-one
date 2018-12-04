import React, { Component } from 'react';
import fetch from 'node-fetch';
import { Entry, EntryProps } from '../Entry';
import { IEntry } from '../../models/IEntry';
import ReactLoading from 'react-loading'

export interface EntryListProps {

}
export interface EntryListState {
    Entries: EntryProps[];
}

export class EntryList extends Component<EntryListProps, EntryListState> {
    constructor(props: EntryListProps) {
        super(props);

        this.state = {
            Entries: []
        }

    }
    fetchEntries = async () => {
        const result: EntryProps[] = [];
        try {
        await fetch('http://localhost:8000/api/getEntries').then(res => res.json())
            .then(json => {
                let i = 0;
                json.forEach((entry: any) => {
                    i++;
                    result.push({
                        Place: i,
                        Username: entry.Username,
                        Score: entry.Score,
                        Date: entry.Date,
                        Time: entry.Time
                    })
                });
                result.sort(function (a, b) { return (b.Score - a.Score) });
            });
        }
        catch (err) {
            throw(err);
        }
        this.setState({ Entries: result });
    }
    generateEntries = (): JSX.Element[] => {
        const EntryArr: JSX.Element[] = [];
        this.state.Entries.forEach((entryProp) => {
            EntryArr.push(
                <Entry {...entryProp}/>
            )
        })
        return EntryArr;
    }
    render() {
        
            this.fetchEntries();
        

        return (
        <div className="leaderboard">
        <style>
            {`
#leaderboard {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#leaderboard td, #leaderboard th {
    border: 0px solid #ddd;
    padding: 8px;
}

#leaderboard tr:nth-child(odd){background-color: #464866;}

#leaderboard tr:hover {background-color: #ddd;}

#heading {
    background-image: linear-gradient(to bottom right, #2E9CCA , #29648A);
}
#leaderboard th {
    padding-top: 12px;
    padding-bottom: 12px;
    color: white;
}

#preloader {
    margin-top: 50px;
    display: flex;
    justify-content: center;
}
`}
</style>
        <table id="leaderboard">
            <tr id="heading">
            <th>Place</th>
            <th>Name</th>
            <th>Score</th>
            <th>Time</th>
            <th>Date</th>
            </tr>
            {this.generateEntries()}
            </table> 
            {this.state.Entries.length > 0 ? '' : <div id="preloader"><ReactLoading type="spin" color="white" height={150} width={150} /> </div> }
        </div>);
    }
}