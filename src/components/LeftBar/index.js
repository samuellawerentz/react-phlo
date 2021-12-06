import { Text, Block, Icon } from '@contacto-io/style-guide'
import React, { Component } from 'react'
import { components } from '../../data/components'
import { prepareLeftBar } from '../../utils/utils'
import './index.scss'

const Section = ({ name, components }) => {
  return (
    <Block.Column className="left-bar-section">
      <Text.Block color="gray-2" type="caption-capital" spacing={[4]}>
        {name}
      </Text.Block>
      <Block.Column spacing={[8]}>
        {components.map((component, i) => (
          <ComponentBlock {...component} key={i} />
        ))}
      </Block.Column>
    </Block.Column>
  )
}

const ComponentBlock = ({ name, icon }) => (
  <Block display="flex" alignItems="center" className="left-bar-item">
    <Block horizontalSpacing={[0, 4]}>
      <Icon name="drag_indicator" color="gray-4" size={20} />
    </Block>
    <Block horizontalSpacing={[0, 8]}>
      <img src={icon} alt={name} />
    </Block>
    <Text.Block>{name}</Text.Block>
  </Block>
)

export default class LeftBar extends Component {
  constructor() {
    super()
    this.data = prepareLeftBar(components.data)
  }
  render() {
    return (
      <Block.Scrollable className="left-bar">
        {this.data.map(({ name, components }) => (
          <Section name={name} components={components} key={name} />
        ))}
      </Block.Scrollable>
    )
  }
}
