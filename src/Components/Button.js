const Button = ({ color,onClick }) => {
  
    return (
    <button onClick={onClick}
        style={{ backgroundColor: color }}
        className='btn'> Add </button>
     
    )

}
export default Button