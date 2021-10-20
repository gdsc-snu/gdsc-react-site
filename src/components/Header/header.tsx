import './header.css'

const Header = () => {
    return (
        <div className='headerDiv'>
            <img src='images/gdsc-logo.png' className="headerLogo" alt="google developer student club" />
            <p> <b style={{ fontSize: 22}}> Google Developers Student Club </b>
            <br /> Sister Nivedita University</p>
        </div>
    )
}

export default Header