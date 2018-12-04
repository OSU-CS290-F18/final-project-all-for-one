import React, { Component } from 'react';
import Modal from 'react-modal';
import ReactDom from 'react-dom';
import { EntryProps } from '../Entry';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

export interface ReportModalProps {
    reportedEntry: EntryProps,
    isOpen: boolean
}

export interface ReportModalState {
    isOpen: boolean,
}


export class ReportModal extends Component<ReportModalProps, ReportModalState> {
    constructor(props: ReportModalProps) {
        super(props);
        this.state = {
            isOpen: this.props.isOpen
        }
    }
    openModal = () => {
        this.setState({isOpen: true});
      }
    
     
    
      closeModal = () => {
        this.setState({isOpen: false});
      }
    
      render() {
        return (
          <div>
            <button onClick={this.openModal}>Open Modal</button>
            <Modal
              isOpen={this.state.isOpen}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
    
              <button onClick={this.closeModal}>close</button>
              <div>I am a modal</div>
              <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
              </form>
            </Modal>
          </div>
        );
      }
    }
}
