import headerimage from '../svgimageFiles/headerimage.svg'
import './header.css'

const Header = () => {
    return (
        <div className='headerDiv'>
            <img src={headerimage} className="" alt="google developer student club" />
        </div>
    )
}

export default Header