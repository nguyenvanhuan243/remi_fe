import React, { PureComponent } from 'react';
import EmployerItem from 'components/VideoCard/Item/Loadable';
import MultiSelect from 'components/Select/MultiSelect/Loadable';

export default class TestCardPage extends PureComponent {
  constructor() {
    super();
    this.state = { user: {} };
  }
  render() {
    return (
      <React.Fragment>
        <EmployerItem />
        <h3>Multi select</h3>
        <MultiSelect />
      </React.Fragment>
    );
  }
}

