import { omit } from 'lodash'
import React, { Component } from 'react'
import ReactFlow, { Controls, addEdge, Background, isNode } from 'react-flow-renderer'
import { connect } from 'react-redux'
import { phloApi } from '../../data/phlo-api.js'
import { setRightBarVisible, setSelectedComponent } from '../../store/rootSlice.js'
import { prepareElements } from '../../utils/utils.js'
import { PHLONode } from './../Node'
import './index.scss'

class PhloCanvas extends Component {
  constructor(props) {
    super()
    this.onConnect = this.onConnect.bind(this)
    this.state = {
      elements: prepareElements(phloApi.data).map((element) => {
        // eslint-disable-next-line no-debugger
        if (isNode(element))
          element.data.onClick = () => {
            props.setSelectedComponent(omit(element.data, 'onClick'))
            props.setRightbarVisible(true)
          }
        return element
      }),
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
          nodeTypes={{ node: PHLONode }}
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

const mapDispatch = (dispatch) => ({
  setRightbarVisible: (...args) => dispatch(setRightBarVisible(...args)),
  setSelectedComponent: (...args) => dispatch(setSelectedComponent(...args)),
})

export default connect(null, mapDispatch)(PhloCanvas)
