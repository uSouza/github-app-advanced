'use strict'

import { storiesOf, action } from '@kadira/storybook'
import Search from './index'
import React from 'react'

storiesOf('Search', module)
  .add('Search disabled', () => (
    <Search
      handleSearch={action('Handle Search')}
      isDisabled
    />
  ))

  .add('Search enabled', () => (
    <Search
      handleSearch={action('Handle Search')}
      isDisabled={false}
    />
  ))
