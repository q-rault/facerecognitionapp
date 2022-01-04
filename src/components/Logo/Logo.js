import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return (
		<div style={{display: 'flex'}} className='ma4 mt0'>
			<Tilt className='logo br2 shadow-2'>
		      <div className='container-div' style={{ height: 100, width: 100}}>
		        <img alt='logo' src={brain} />
		      </div>
	    	</Tilt>
		</div>
	);
}

export default Logo;