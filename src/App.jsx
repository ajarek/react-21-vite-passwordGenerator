import React from "react"
import "./App.css"
import { Form } from "./components/Form/Form"
export class App extends React.Component {
  state = {
    value:0,
    lettersAll : ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
     selectedPassword:[],
      password:[]
  }
  lengthGenerator = (e) => {
    this.setState({value: e.target.value});
  }
  passwordGenerator =(e)=>{
    
    e.preventDefault()
    this.setState({password:this.state.selectedPassword})
   
  }

componentDidUpdate () {
  this.state.password=[]
  this.state.selectedPassword=[]
  for (let i = 0; i < this.state.value; i++) {
      
    const letter=this.state.lettersAll[Math.ceil(Math.random() * this.state.lettersAll.length)]
   this.state.selectedPassword.push(letter)
  }

}
  render() {
    return (
      <div className="App">
        Password generator
        <Form
             value={this.state.value}
          onChange={this.lengthGenerator}
          password={this.state.password}
          onSubmit={this.passwordGenerator}
        />
      </div>
    )
  }
}
export default App
