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