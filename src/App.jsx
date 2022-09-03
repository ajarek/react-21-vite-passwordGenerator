import React from "react"
import "./App.css"
import { Form } from "./components/Form/Form"
import { data } from "./assets/data/"

export class App extends React.Component {
  state = {
    password: "",
    value: 0,
    lettersAll: data,
    filterLettersBig: [],
    filterLettersSmall: [],
    filterLettersNumbers: [],
    filterLettersSymbols: [],
    lettersPassword: [],
    backgroundProgres1: "white",
    backgroundProgres2: "white",
    backgroundProgres3: "white",
    backgroundProgres4: "white",
  }

  lengthGenerator = (e) => {
    this.setState({ value: e.target.value })
  }

  addUppercase = (e) => {
    const lettersBig = this.state.lettersAll.filter((el) => el.match(/[A-Z]/))
    if (e.target.checked) {
      this.setState({ filterLettersBig: lettersBig })
      this.setState({ backgroundProgres1: "gold" })
    } else {
      this.setState({ filterLettersBig: [] })
      this.setState({ backgroundProgres1: "white" })
    }
  }

  addLowercase = (e) => {
    const lettersSmall = this.state.lettersAll.filter((el) => el.match(/[a-z]/))
    if (e.target.checked) {
      this.setState({ filterLettersSmall: lettersSmall })
      this.setState({ backgroundProgres2: "gold" })
    } else {
      this.setState({ filterLettersSmall: [] })
      this.setState({ backgroundProgres2: "white" })
    }
  }

  addNumbers = (e) => {
    const lettersNumbers = this.state.lettersAll.filter((el) => el.match(/\d/))
    if (e.target.checked) {
      this.setState({ filterLettersNumbers: lettersNumbers })
      this.setState({ backgroundProgres3: "gold" })
    } else {
      this.setState({ filterLettersNumbers: [] })
      this.setState({ backgroundProgres3: "white" })
    }
  }

  addSymbols = (e) => {
    const lettersSymbols = this.state.lettersAll.filter((el) =>
      el.match(/[!@#$%^&*()~]/)
    )
    if (e.target.checked) {
      this.setState({ filterLettersSymbols: lettersSymbols })
      this.setState({ backgroundProgres4: "gold" })
    } else {
      this.setState({ filterLettersSymbols: [] })
      this.setState({ backgroundProgres4: "white" })
    }
  }

  passwordGenerator = (e) => {
    e.preventDefault()
    let filterLettersAll = []
    filterLettersAll = filterLettersAll.concat(
      this.state.filterLettersBig,
      this.state.filterLettersSmall,
      this.state.filterLettersNumbers,
      this.state.filterLettersSymbols
    )
    for (let i = 0; i < this.state.value; i++) {
      this.setState({ lettersPassword: [] })
      this.state.lettersPassword.push(
        filterLettersAll[Math.ceil(Math.random() * filterLettersAll.length)]
      )
      this.setState({ password: this.state.lettersPassword.join("") })
    }
  }

  copyPassword = (e) => {
    navigator.clipboard.writeText(this.state.password)
    e.target.parentElement.parentElement.style.color = "#7bed9f"
    setTimeout(() => {
      e.target.parentElement.parentElement.style.color = "white"
    }, 500)
  }

  render() {
    return (
      <div className="App">
        Password generator
        <Form
          value={this.state.value} //range
          onChange={this.lengthGenerator} //range
          password={this.state.password} //result
          onClickCopy={this.copyPassword} //result
          onSubmit={this.passwordGenerator} //button onSubmit
          onChangeUppercase={this.addUppercase} //inputUppercase
          onChangeLowercase={this.addLowercase} //inputLowercase
          onChangeNumbers={this.addNumbers} //inputNumbers
          onChangeSymbols={this.addSymbols} //inputSymbols
          backgroundProgres1={this.state.backgroundProgres1} //progres
          backgroundProgres2={this.state.backgroundProgres2} //progres
          backgroundProgres3={this.state.backgroundProgres3} //progres
          backgroundProgres4={this.state.backgroundProgres4} //progres
        />
      </div>
    )
  }
}
export default App
