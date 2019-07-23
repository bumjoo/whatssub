import 'react-native';
import * as React from 'react';
import ExamplePieChartMonth from '../ExamplePieChartMonth';

import renderer from 'react-test-renderer';
import { render, fireEvent, act, RenderResult } from '@testing-library/react-native';

const props = {
  navigation: {
    goBack: jest.fn(),
  },
};

describe('[ExamplePieChartMonth]', () => {
  it('renders without crashing', () => {
    const rendered: renderer.ReactTestRendererJSON = renderer.create(<ExamplePieChartMonth />).toJSON();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});

describe('[ExamplePieChartMonth] Interaction', () => {
  const component: any = <ExamplePieChartMonth {...props} />;
  let testing: any;

  beforeEach(() => {
    testing = render(component);
  });

  it('should render [Text] with value "myText"', () => {
    const textInstance: renderer.ReactTestInstance = testing.getByTestId('myText');
    expect(textInstance.props.children).toEqual('dooboolab');
  });
});
