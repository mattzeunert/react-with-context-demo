import React from 'react';

class ComponentThatNeedsContext extends React.Component {
  render() {
    return (
      <div>{this.context.message}</div>
    );
  }
}
ComponentThatNeedsContext.contextTypes = {
  message: React.PropTypes.string.isRequired
};
export default ComponentThatNeedsContext;