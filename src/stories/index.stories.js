/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import {HelloWorld, UnauthenticatedNav, AuthenticatedNav} from '../components'

storiesOf('ToolBar', module)
  .add('unauthenticated', () => ({
    template: '<UnauthenticatedNav/>',
    components: {UnauthenticatedNav},
  }))
  .add('home screen', () => ({
    template: '<AuthenticatedNav/>',
    components: {AuthenticatedNav}
  }))

storiesOf('Button', module)
  .add('with text', () => ({
    components: { HelloWorld },
    template: '<HelloWorld/>'
  }))
