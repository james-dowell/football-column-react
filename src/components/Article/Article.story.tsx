
import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Article from './Article';
import { MOCK_ARTICLE } from './Article.spec';

storiesOf('Button', module)
  .add('with text', () => (
    <Article article={MOCK_ARTICLE} />
  ));