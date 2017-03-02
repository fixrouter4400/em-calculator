import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';

import './App.css';
import Metals from './Metals';

class App extends Component {
  state = {
    metals: [
      { col1: 'M1', col2: 'M1', arg1: 1.104, arg2: 0.01, input: '' },
      { col1: 'Mx', col2: 'M2-M5', arg1: 2.686, arg2: 0.01, input: '' },
      { col1: 'Mz', col2: 'M6', arg1: 8.096, arg2: 0.02, input: '' },
      { col1: 'Mr', col2: 'M7', arg1: 11.316, arg2: 0.02, input: '' },
      { col1: 'Mu', col2: 'UTRDL', arg1: 31.08, arg2: 0.02, input: '' }
    ],
    via: [
      { col1: 'Contact', col2: 'Contact', arg1: 0.208, arg2: 0, input: '' },
      { col1: 'VIAx', col2: 'Via1', arg1: 0.072, arg2: 0, input: '' },
      { col1: 'VIAy', col2: 'Via2-4', arg1: 0.322, arg2: 0, input: '' },
      { col1: 'VIAz', col2: 'Via5', arg1: 3.077, arg2: 0, input: '' },
      { col1: 'VIAr', col2: 'Via6', arg1: 5.432, arg2: 0, input: '' },
      { col1: 'VIAu', col2: 'ViaAP', arg1: 3.077, arg2: 0, input: '' }
    ]
  };
  handleMetalOnChange = (val, index) => {
    var metals = this.state.metals.concat();
    metals[index].input = val;
    this.setState({ metals });
  };

  handleViaOnChange = (val, index) => {
    var via = this.state.via.concat();
    via[index].input = val;
    this.setState({ via });
  };
  render() {
    return (
      <Grid>
        <Col xs={12}>
          <h1>EM Calculator</h1>
          <p>Current denstiy for metals and vias</p>
        </Col>
        <Col xs={12}>
          <Metals
            metalsList={this.state.metals}
            handleMetalOnChange={this.handleMetalOnChange}
            headers={[
              'Interlevel Conn',
              'Metal Layer',
              'Width(um)',
              'Imax(mA)'
            ]}
          />
        </Col>
        <Col xs={12}>
          <Metals
            metalsList={this.state.via}
            handleMetalOnChange={this.handleViaOnChange}
            headers={[ '', 'Cont/Via', 'Via Count', 'Imax(mA)' ]}
          />
        </Col>
        <Col xs={12}>
          <p>Note</p>
          <p>For Metals just input Width size in the column(um)</p>
          <p>For Via count just input number in the Via Count column</p>
        </Col>
      </Grid>
    );
  }
}

export default App;
