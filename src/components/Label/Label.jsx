import './label.css'
export const Label =(props)=>{
    const{children, className, ...otherProps}=props
    return (
    <label
    className={className}
    {...otherProps}
    >
       { children}
    </label>
    )
}
export default Label