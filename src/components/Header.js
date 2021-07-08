import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header className='header'>
            {/* THIS IS AN EAMPLE FOR DYNAMIC STYLING<h1 style={headingStyle}></h1> */}
            {/* THIS IS AN EXAMPLE OF INLINE STYLING <h1 style={{color: 'red', backgroundColor: 'black' }}>{title}</h1> */}
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// THIS IS THE OTHER PART OF THE DYNAMIC STYLING, AKA: CSS IN JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
