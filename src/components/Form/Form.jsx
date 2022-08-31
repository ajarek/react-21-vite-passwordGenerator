import "./form.css"
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import { Label } from "../Label/Label"
export const Form = (props) => {
  const {
    step,
    className,
    addNewPassword,
    newTaskText,
    onChange,
    ...otherProps
  } = props
  return (
    <div className="container">
      <div className="result">
        <span>PTx1f5DaFX</span>
        <button>
          <i class="fas fa-copy"></i>
        </button>
      </div>
      <form
        className={"form"}
        onSubmit={addNewPassword}
        {...otherProps}
      >
        <div className="row-range">
          <div className="row-label">
            <Label>Character Length</Label>
            <span>10</span>
          </div>
          <Input
            type="range"
            min="0"
            max="20"
            step="1"
            value={step}
          />
        </div>
        <div className="row">
          <Input
            className={"input"}
            type={"checkbox"}
            value={newTaskText}
            onChange={onChange}
            id="character"
          />
          <Label htmlFor="character">Include Uppercase Letters</Label>
        </div>
        <div className="row">
          <Input
            className={"input"}
            type={"checkbox"}
            value={newTaskText}
            onChange={onChange}
            id="character"
          />
          <Label htmlFor="character">Include Lowercase Letters</Label>
        </div>
        <div className="row">
          <Input
            className={"input"}
            type={"checkbox"}
            value={newTaskText}
            onChange={onChange}
            id="character"
          />
          <Label htmlFor="character">Include Numbers</Label>
        </div>
        <div className="row">
          <Input
            className={"input"}
            type={"checkbox"}
            value={newTaskText}
            onChange={onChange}
            id="character"
          />
          <Label htmlFor="character">Include Symbols</Label>
        </div>
        <div className="strength">
          <p>strength</p>
          <div className="progres">
            <p>Medium</p>
            <div>🟨</div>
            <div>🟨</div>
            <div>⬜</div>
            <div>⬜</div>
          </div>
        </div>
        <Button className={"btn-submit"}>GENERATE →</Button>
      </form>
    </div>
  )
}
export default Form
