'use strict'

import { storiesOf } from '@kadira/storybook'
import React from 'react'
import UserInfo from './index'

storiesOf('UserInfo', module)
  .add('With userInfo', () => (
    <UserInfo
      userinfo={{
        username: 'Username',
        photo: 'https://wowsciencecamp.org/wp-content/uploads/2018/07/dummy-user-img-1.png',
        login: 'login',
        repos: 3,
        followers: 3,
        following: 10
      }}
    />
  ))
