import React, { Component } from 'react'
import { Text } from '@contacto-io/style-guide'

export const SectionTitle = (props) => {
  return <Text.Block>{props.title}</Text.Block>
}

export default class Start extends Component {
  render() {
    return <div>Hello</div>
  }
}
