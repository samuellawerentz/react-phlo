import React, { Component } from 'react'
import ReactFlow, { Controls, addEdge, Background } from 'react-flow-renderer'
import { phloApi } from '../../data/phlo-api.js'
import { prepareElements } from '../../utils/utils.js'
import { SMS, Voice, Start } from './../Node'
import './index.scss'

export default class PhloCanvas extends Component {
  constructor() {
    super()
    this.onConnect = this.onConnect.bind(this)
    this.state = {
      elements: prepareElements(phloApi.data),
    }
  }

  onConnect(params) {
    this.setState({ elements: addEdge(params, this.state.elements) })
  }

  render() {
    return (
      <div className="canvas-wrapper">
        <ReactFlow
          elements={this.state.elements}
          // onLoad={(params) => console.log(params.getElements())}
          nodeTypes={{ sms: SMS, voice: Voice, start: Start }}
          onConnect={this.onConnect}
        >
          <Controls />
          <Background
            variant="dots"
            gap={12}
            size={1}
            className="canvas-background"
            color="var(--gray-4)"
          />
        </ReactFlow>
      </div>
    )
  }
}
