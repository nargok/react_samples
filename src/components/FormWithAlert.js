import React, { Component } from 'react';

class FormWithAlert extends Component {
  constructor(props) {
    super(props)
    this.state = { inputValue: "" }
  }

  // eはeventObjectのe
  handleChange = (e) => {
    this.setState({ inputValue:  e.target.value })
  }

  showAlert = (e) => {
   if (e.key === 'Enter' && e.target.value) {
     alert(e.target.value)
   }
  }

  render () {
    return (
      <React.Fragment>
        <input type="text" placeholder="値を入力してEnterを押下"
         onChange={(e) => this.handleChange(e)}
         onKeyPress={(e) => this.showAlert(e)} />
        <div>{ this.state.inputValue }</div>
      </React.Fragment>
    )
  }
}

export default FormWithAlert