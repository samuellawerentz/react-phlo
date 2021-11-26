/* eslint-disable react/display-name */
import React, { memo, useState } from 'react'
import { Handle } from 'react-flow-renderer'
import { Block, Icon, Text } from '@contacto-io/style-guide'
import './node.scss'

const HandleWithLabel = ({ label = 'Node', ...props }) => {
  const [isConnected, setIsConnected] = useState(false)
  return (
    <div className={`handle-box ${isConnected ? 'connected' : ''}`}>
      <Text className="handle-text" type="caption">
        {label}
      </Text>
      <Handle
        {...props}
        id={props.id}
        onConnect={(...args) => {
          props.onConnect?.(...args)
          setIsConnected(true)
        }}
      />
    </div>
  )
}

const CustomNode = memo(function Node({ data, nodeType, id }) {
  return (
    <div className={['custom-node', nodeType || ''].join(' ')}>
      {nodeType !== 'start' && (
        <div className="handle-container handle-container-top">
          <HandleWithLabel
            id={id + '.Input'}
            type="target"
            position="top"
            className="node-handle"
            onConnect={(params) => console.log('handle onConnect', params)}
          />
        </div>
      )}
      <div className="node-content">
        <Block display="flex" alignItems="center" spacing={[8]}>
          <Icon name="tag" size={24} />
          <Text>{data.name}</Text>
        </Block>
        <Text.Block type="caption" color="gray-1">
          {data.description}
        </Text.Block>
      </div>
      <div className="handle-container handle-container-bottom">
        {data?.handles?.map((handle, i) => (
          <HandleWithLabel
            id={handle.id}
            type="source"
            key={i}
            position="bottom"
            className="node-handle"
            label={handle.label}
          />
        ))}
      </div>
    </div>
  )
})

export const Start = memo((props) => <CustomNode nodeType="start" {...props} />)
export const SMS = memo((props) => <CustomNode nodeType="sms" {...props} />)
export const Voice = memo((props) => <CustomNode nodeType="voice" {...props} />)
