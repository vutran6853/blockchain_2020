import React from 'react'
import {Link} from 'react-router-dom'
import BlockExplorer from '../blockExplorer/BlockExplorer'
import './explorer.scss'

interface IExplorerProps {

}

interface IExplorerState {

}

class Explorer extends React.Component<IExplorerProps, IExplorerState> {
  render() {
    // console.log(this.props)
    return (
      <div className="explorer_container">
      <BlockExplorer />
        Explorer Components
      </div>
    )
  }
}

export default Explorer