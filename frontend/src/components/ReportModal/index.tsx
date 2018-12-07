import React, { Component } from 'react';
import Modal from 'react-modal';
import ReactDom from 'react-dom';
import { EntryProps } from '../Entry';
import fetch from 'node-fetch';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
    }
  };

export interface ReportModalProps {
    reportedEntry: EntryProps,
}

export interface ReportModalState {
    isOpen: boolean,
}


export class ReportModal extends Component<ReportModalProps, ReportModalState> {
    constructor(props: ReportModalProps) {
        super(props);
        this.state = {
            isOpen: true
        }
    }
    openModal = () => {
        this.setState({isOpen: true});
      }
    
     
    
      closeModal = () => {
        this.setState({isOpen: false});
      }
    removeEntry = async () => {
      await fetch(`http://localhost:8000/api/remEntry?user=${this.props.reportedEntry.Username}`, { method: 'POST', body: '' })
    .then(res => alert(`Entries from ${this.props.reportedEntry.Username} have been removed.`));
    }
      render() {
        return (
          <div>
            <Modal
              isOpen={this.state.isOpen}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
    
              <button onClick={this.closeModal}>close</button>
              <div>Are you sure you want to report and remove {this.props.reportedEntry.Username}'s score?</div>
              <form>
                <button onClick={this.removeEntry}>Yeah</button>
                <button>Nope</button>
              </form>
            </Modal>
          </div>
        );
      }
    }

