import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.scss'
import { Block, Text, Icon } from '@contacto-io/style-guide'
import { setRightBarVisible } from '../../store/rootSlice.js'

class RightBar extends Component {
  render() {
    return (
      <div className={`right-bar ${this.props.rightBarVisible ? 'open' : ''}`}>
        {this.props.selectedComponent && (
          <Block.Column>
            <Block display="flex" justifyContent="space-between">
              <Text type="title-2">{this.props.selectedComponent.name}</Text>
              <Icon
                name="close"
                color="gray-1"
                hoverColor="text-primary-color"
                onClick={() => this.props.setRightbarVisible(false)}
              />
            </Block>
          </Block.Column>
        )}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  rightBarVisible: state.phlo.rightBarVisible,
  selectedComponent: state.phlo.selectedComponent,
})
const mapDispatch = (dispatch) => ({
  setRightbarVisible: (...args) => dispatch(setRightBarVisible(...args)),
})

export default connect(mapStateToProps, mapDispatch)(RightBar)
