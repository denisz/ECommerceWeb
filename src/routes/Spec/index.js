import React, {Component} from 'react';
import Layout from 'components/Layout';
import Checkbox from 'components/Checkbox';

class Spec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  render() {
    const {checked} = this.state;
    return (
        <div>
          <Checkbox checked={checked}
                    label={"Text for checkbox"}
                    onChange={(value) => {
                      this.setState({checked: value});
                    }}/>

          <Checkbox checked={checked}
                    color='black'
                    label={"Text for checkbox"}
                    onChange={(value) => {
                      this.setState({checked: value});
                    }}/>
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
