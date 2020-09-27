import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

describe('Main component renders', ()=> {
  
  let container=shallow(<Main/>);
  it('should render a section',()=>{
    expect(container.find('section').length).toEqual(1);
  })
})
