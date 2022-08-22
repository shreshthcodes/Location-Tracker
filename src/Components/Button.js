const Button=({color,props,fn})=>{
    return(
        <button className= {`${color}`} onClick={fn}>{props}</button>
    )
}
export default Button;