import React from 'react';
export default class Parent extends React.Component {
  render() {
    return (
      <div>
        <h3>This is Parents {this.props.name}</h3>
        <h4>This is Child Name is {this.props.child}</h4>
        <h2>
          I am {this.props.name} and I love {this.props.child}
        </h2>
      </div>
    );
  }
}
