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

          <div role="dialog" aria-labelledby="modal-label">
            {/*<div className="Modal__backdrop fade show"/>*/}
            <div style={{
              backgroundColor: "white",
              overflow: 'scroll',
              height: '100%',
              '-webkit-overflow-scrolling': 'touch',
            }}>
              <div ><h2 className="text-center">Советуем
                почитать</h2><p className="Warning__body">Продукты
                представленные в магазине не являются лекарственными
                средствами. Не рекомендуется использование данных препаратов
                людям, которые страдают от гипотонии или гипертонии, аритмии,
                переносили инсульт, инфаркт, имеют недостаточность сердца,
                печени или почек, имеют заболевания щитовидной железы,
                сахарный диабет, бронхиальная астма, рецидивирующие головные
                боли, болезнь Паркинсона, глаукома, затрудненное
                мочеиспускание, ниц расширения, судороги, депрессия,
                психические болезни, а также беременным и кормящим женщинам и
                лицам не достигшим 18 лет. Перед началом приема любого
                продукта обязательно проконсультируйтесь у специалиста!</p>
                <div className="DialogToolbar ButtonToolbar">
                  <div className="Button DialogToolbar__btn">OK</div>
                </div>
              </div>
            </div>
          </div>
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
