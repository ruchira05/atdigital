import React, { Component } from 'react'
import styleBtn from './BtnYellow.module.css'

export class BtnYellow extends Component {
  render() {
    const { btnText} = this.props;
    return (
      <div className={styleBtn.btn}>
        <button className={styleBtn.yellow_btn}>{btnText}</button>
      </div>
    )
  }
}

export default BtnYellow