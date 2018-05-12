import React from 'react';
import { DialogFactory, FormComponent } from 'modules/Form';
import Layout from 'components/Layout';
import Button from 'components/Button';
import Offer from 'dialogs/Offer';

const kDialogKey = 'dialog';

class Spec extends FormComponent {
  handleOpen = () => {
    const { dialogs } = this.state;
    dialogs.showDialog(kDialogKey, {
      header: "Договор оферты",
      showHeader: true,
      Component: <Offer submitCancel/>
    })
  };

  render() {
    const { dialogs } = this.state;

    return (
        <div>
          <Button onClick={this.handleOpen}>Open</Button>
          <DialogFactory dialogs={dialogs} dialogKey={kDialogKey}/>
        </div>
    );
  }
}

export default {
  path: '/spec',
  async action() {
    return {
      title: '',
      component: (
          <Layout>
            <Spec/>
          </Layout>
      ),
    };
  },
};
