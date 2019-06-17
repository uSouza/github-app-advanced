'use strict'

import { storiesOf } from '@kadira/storybook'
import React from 'react'
import Repos from './index'

storiesOf('Repos', module)
  .add('With title prop', () => (
    <Repos title='Favorite' />
  ))

  .add('With repos', () => (
    <Repos
      title='Favorite'
      repos={[{
        link: 'https://www.google.com',
        name: 'Google'
      }]}
    />
  ))
