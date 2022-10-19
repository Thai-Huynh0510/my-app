import Button from './Button'

const Header = ({ title }) => {
    const onClick = (e) => {
        console.log('object')
    }
    return (
        <header className = 'header'>
            <h1> header hello </h1>
            <h2 style={{ color: 'red', backgroundColor: 'black' }}> {title} </h2>
            <Button color='green' onClick={onClick} /> 
        </header>
    )
}
Header.defaultProps = {
    title: ' props passing',
}
export default Header