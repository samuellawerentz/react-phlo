import { Block } from '@contacto-io/style-guide'
import React, { Component } from 'react'
import PhloCanvas from './Canvas/index.js'
import LeftBar from './LeftBar/index.js'

export default class Base extends Component {
  render() {
    return (
      <Block display="flex" className="main">
        <LeftBar />
        <PhloCanvas />
      </Block>
    )
  }
}
