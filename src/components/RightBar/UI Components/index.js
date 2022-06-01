import React, { useState } from 'react'
import { Text, Select, Block, TextField, Button } from '@contacto-io/style-guide'
import './index.scss'
import { Input } from 'antd'

export const SectionTitle = (props) => {
  return <Text.Block>{props.title}</Text.Block>
}

export const EventCallbacks = (props) => {
  return (
    <>
      <Text.Block type="headline" spacing={[8]}>
        Event Callbacks
      </Text.Block>
      <Block display="flex">
        <Select placeholder="Event" noShadow className="event-callbacks-select" />
        <TextField noShadow placeholder="Enter a URL" className="event-callbacks-textfield" />
      </Block>
    </>
  )
}

export const JSONEditor = ({ json = { '': '' } }) => {
  const parsedJson = Object.keys(json).map((key) => ({ key, value: json[key] }))
  const [localJson, setLocalJson] = useState(parsedJson)
  const [isBulk, setIsBulk] = useState(false)

  const changeHandler = (type, index, { target: { value } }) => {
    setLocalJson((currentJson) => {
      currentJson[index][type] = value || ''
      return currentJson[currentJson.length - 1].key
        ? [...currentJson, { '': '' }]
        : [...currentJson]
    })
  }

  const stringify = () => {
    const json = localJson.reduce((acc, curr) => {
      acc[curr.key] = curr.value
      return acc
    }, {})
    return JSON.stringify(json)
  }

  return (
    <Block>
      <Text type="headline">Payload in HTTP Request</Text>
      {!isBulk && (
        <Block display="flex" style={{ gap: 16 }} spacing={[8, 16]} className="json-editor-heading">
          <Text type="caption-capital" color="gray-2">
            Key
          </Text>
          <Text type="caption-capital" color="gray-2">
            Value
          </Text>
        </Block>
      )}
      <Block spacing={[16]}>
        {isBulk ? (
          <Block spacing={[0, 16]}>
            <Input.TextArea value={stringify()} />
          </Block>
        ) : (
          localJson.map((keyValPair, i) => {
            return (
              <Block key={i} display="flex" style={{ gap: 16 }} spacing={[8]}>
                <TextField value={keyValPair.key} onChange={changeHandler.bind(null, 'key', i)} />
                <TextField
                  value={keyValPair.value}
                  onChange={changeHandler.bind(null, 'value', i)}
                />
              </Block>
            )
          })
        )}
      </Block>

      <Button
        size="small"
        icon="edit"
        label={isBulk ? 'Key/Value Edit' : 'Bulk Edit'}
        type="secondary"
        onClick={() => setIsBulk(!isBulk)}
      />
    </Block>
  )
}
