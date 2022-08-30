import "./form.css"
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import { Label } from "../Label/Label"
export const Form = (props) => {
  const { className, addNewPassword, newTaskText, onChange, ...otherProps } =
    props
  return (
    <form
      className={className}
      onSubmit={addNewPassword}
      {...otherProps}
    >
      <div className="row">
        <Label
        >Character Length
        </Label>
        <Input
          type="range"
          min="0"
          max="100"
          value={72}
        />
      </div>
      <div className="row">
      <Input
        className={"input"}
        type={"checkbox"}
        value={newTaskText}
        onChange={onChange}
        id='character'
      />
        <Label
       htmlFor='character'
        >Include Uppercase Letters</Label>
      </div>
      <Button className={"btn-submit"}>GENERATE →</Button>
    </form>
  )
}
export default Form
