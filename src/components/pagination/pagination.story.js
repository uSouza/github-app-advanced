'use strict'

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Pagination from '.'

const stories = storiesOf('Pagination', module)

stories.add('without props', () => (
  <Pagination />
))

stories.add('with only total prop', () => (
  <Pagination
    total={10}
  />
))

stories.add('with total and activePage props', () => (
  <Pagination
    total={10}
    activePage={5}
  />
))

stories.add('with page link', () => (
  <Pagination
    total={8}
    activePage={4}
    pageLink='https://www.google.com/page/%page%'
  />
))

stories.add('with callback', () => (
  <Pagination
    total={12}
    activePage={4}
    pageLink='https://www.google.com/page/%page%'
    onClick={(page) => {
      window.alert(page)
    }}
  />
))
