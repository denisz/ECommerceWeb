import React from 'react';
import Warning from 'dialogs/Warning';
import { FormComponent, DialogFactory } from 'modules/Form';
import './Recommend.css';

const kDialogKey = 'dialog';

export default class Recommend extends FormComponent {
  handleClick = () => {
    const { dialogs } = this.state;

    dialogs.showDialog(kDialogKey, {
      showHeader: false,
      size: 'large',
      Component: <Warning />
    })
  };

  render() {
    const { dialogs } = this.state;
    return (
        <div className="Recommend">
          <div className="Recommend__btn" onClick={this.handleClick}/>
          <DialogFactory dialogs={dialogs} dialogKey={kDialogKey}/>

        </div>
    )
  }
}