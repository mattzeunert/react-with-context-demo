# WithContext demo

Shows how to use WithContext wrapper to pass context into React components.

## Running the example

Run `npm install` and then `npm test`.

## Full example code

[ComponentThatNeedsContext.js](https://github.com/mattzeunert/react-with-context-demo/blob/master/ComponentThatNeedsContext.js)

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

[ComponentThatNeedsContext-test.js](https://github.com/mattzeunert/react-with-context-demo/blob/master/__tests__/ComponentThatNeedsContext-test.js)

	jest.dontMock('../ComponentThatNeedsContext');

	import React from 'react';
	import ReactDOM from 'react-dom';
	import TestUtils from 'react-addons-test-utils';
	import WithContext from 'react-with-context'

	const ComponentThatNeedsContext = require('../ComponentThatNeedsContext').default;

	describe('ComponentThatNeedsContext', () => {
	  it('It receives context from the WithContext wrapper', () => {
	      var context = {
	        message: "This value comes from the component context."
	      }
	      var component = TestUtils.renderIntoDocument(
	        <WithContext context={context}>
	          <ComponentThatNeedsContext />
	        </WithContext>
	      );

	    var node = ReactDOM.findDOMNode(component);

	    expect(node.textContent).toContain('This value comes from the component context.');
	  });
	});
