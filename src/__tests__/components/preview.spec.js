import React from 'react';
import { mount } from 'enzyme';
import Preview from '../../components/PreviewArticle';

describe('Preview component', () => {
  const article = {
    title: 'Interesting day at andela',
    description: 'Interesting day at andela',
    body: 'Interesting day at andela',
  };
  it('should render preview component', () => {
    const wrapper = mount(
      <Preview
        onSubmit={f => f}
        article={article}
        loading={false}
        continueEdit={f => f}
      />
    );

    expect(wrapper.find('.form-field').exists()).toBe(true);
  });
});
