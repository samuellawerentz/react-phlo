import { Block } from '@contacto-io/style-guide'
import React, { Component } from 'react'
import PhloCanvas from './Canvas/index.js'
import LeftBar from './LeftBar/index.js'
import RightBar from './RightBar/index.js'

export default class Base extends Component {
  constructor() {
    super()
    this.state = {
      rightBarVisible: false,
    }
  }
  render() {
    return (
      <Block display="flex" className="main">
        <LeftBar />
        <PhloCanvas />
        <RightBar />
      </Block>
    )
  }
}
