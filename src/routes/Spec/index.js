import React, {Component} from 'react';
import Layout from 'components/Layout';
import { DateRange } from 'components/DatePicker';

class Spec extends Component {
  constructor(props) {
    super(props);
    this.state = { date: {} };
  }

  render() {
    const { date } = this.state;
    console.log(date);
    return (
        <div>
          <DateRange value={date }
                     onChange={({value})=>{ this.setState({date: value})}}
          />
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
