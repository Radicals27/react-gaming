import React from 'react';
import {TrendingPage} from './TrendingPage'
import TestRenderer from 'react-test-renderer'
import Enzyme, { shallow, render, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

it('renders correctly enzyme', () => {
    const wrapper = shallow(<TrendingPage />)
  
    expect(toJson(wrapper)).toMatchSnapshot()
})

const testRenderer = TestRenderer.create(<TrendingPage />)
const testInstance = testRenderer.root

expect(testInstance.findByProps({className: "sub"}).children).toEqual(['Sub'])

