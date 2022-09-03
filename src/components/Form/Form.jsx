import "./form.css"
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import { Label } from "../Label/Label"
export const Form = (props) => {
  const {
    value,
    className,
    onClickCopy,
    newTaskText,
    onChange,
    onChangeUppercase,
    onChangeLowercase,
    onChangeNumbers,
    onChangeSymbols,
    password,
    onSubmit,
    backgroundProgres1,
    backgroundProgres2,
    backgroundProgres3,
    backgroundProgres4,
    ...otherProps
  } = props
  return (
    <div className="container">
      <div className="result">
        <span>{password}</span>
        <button onClick={onClickCopy}>
          <i className="fas fa-copy"></i>
        </button>
      </div>
      <form
        className={"form"}
        {...otherProps}
      >
        <div className="row-range">
          <div className="row-label">
            <Label>Character Length</Label>
            <span>{value}</span>
          </div>
          <Input
            type="range"
            min="0"
            max="20"
            step="1"
            defaultValue={value}
            onChange={onChange}
          />
        </div>
        <div className="row">
          <Input
            className={"input"}
            type={"checkbox"}
            value={newTaskText}
            onChange={onChangeUppercase}
            id="uppercase"
          />
          <Label htmlFor="character">Include Uppercase Letters</Label>
        </div>
        <div className="row">
          <Input
            className={"input"}
            type={"checkbox"}
            value={newTaskText}
            onChange={onChangeLowercase}
            id="lowercase"
          />
          <Label htmlFor="character">Include Lowercase Letters</Label>
        </div>
        <div className="row">
          <Input
            className={"input"}
            type={"checkbox"}
            value={newTaskText}
            onChange={onChangeNumbers}
            id="numbers"
          />
          <Label htmlFor="character">Include Numbers</Label>
        </div>
        <div className="row">
          <Input
            className={"input"}
            type={"checkbox"}
            value={newTaskText}
            onChange={onChangeSymbols}
            id="symbols"
          />
          <Label htmlFor="character">Include Symbols</Label>
        </div>
        <div className="strength">
          <p>strength</p>
          <div className="progres">
            <p>Medium</p>
            <div className={backgroundProgres1}></div>
            <div className={backgroundProgres2}></div>
            <div className={backgroundProgres3}></div>
            <div className={backgroundProgres4}></div>
          </div>
        </div>
        <Button
          className={"btn-submit"}
          onClick={onSubmit}
        >
          GENERATE <i class="fas fa-arrow-right"></i>
        </Button>
      </form>
    </div>
  )
}
export default Form
