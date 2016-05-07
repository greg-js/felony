'use strict'

import React, { Component } from 'react'
import ReactCSS from 'reactcss'

import { User } from '../common/index'

import { generateKey } from '../../utils/pgp'

class Alias extends Component {
  classes() {
    return {
      'default': {
        user: {
          color: '#fff',
          flex: '1',
          fontWeight: '500',
        },
      },
    }
  }

  render() {
    return (
      <div is="user" onClick={ this.props.showComposer.bind(this, 'alias') }>
        <User name="Cali-Connection1" />
      </div>
    )
  }
}

export default ReactCSS(Alias)