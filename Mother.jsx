import React from 'react';

export default class Mother extends React.Component {
  constructor(props) {
    super(props);

    this.state = { message: 'Please Subscribe', btnValue: 'Subscribe' };
  }

  ChangeMessage = () => {
    this.setState({
      message: 'I already Subscribe',
      btnValue: 'Thanks For Subscription',
    });
  };

  render() {
    return (
      <div>
        <h1>THis is First State</h1>
        <h3>{this.state.message}</h3>
        <button onClick={this.ChangeMessage} value="">
          {this.state.btnValue}
        </button>
      </div>
    );
  }
}
