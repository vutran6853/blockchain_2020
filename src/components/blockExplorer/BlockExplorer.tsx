import React from 'react'
import {Link} from 'react-router-dom'
import './blockExplorer.scss'

interface IBlockExplorerProps {

}

interface IBlockExplorerState {

}

class BlockExplorer extends React.Component<IBlockExplorerProps, IBlockExplorerState> {
  render() {
    console.log(this.props)
    return (
      <div className="blockExplorer_container">
        <Link to="/block">
          Block
        </Link>
        <Link to="/Ttransactions">
          Transactions
        </Link>
        <Link to="/average_fee">
          Average Fee
        </Link>
        <Link to="/average_value">
          Average Value
        </Link>
      </div>
    )
  }
}

export default BlockExplorer