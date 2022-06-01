import React, { Component } from 'react'
import { Block, Checkbox } from '@contacto-io/style-guide'
import { EventCallbacks, JSONEditor } from '../UI Components'

export class Start extends Component {
  render() {
    return (
      <>
        <Block spacing={[32, 32]}>
          <Checkbox>Redact Incoming Messages</Checkbox>
        </Block>
        <Block spacing={[32]}>
          <EventCallbacks />
        </Block>
        <Block>
          <JSONEditor />
        </Block>
      </>
    )
  }
}
