'use strict'

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Pagination from '.'

const stories = storiesOf('Pagination', module)

stories.add('without props', () => (
  <Pagination />
))

stories.add('with only total prop', () => (
  <Pagination total={10} pageLink='https://www.google.com/page/%page%' />
))
