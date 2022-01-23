import Tilt from 'react-parallax-tilt';
import brain from './brain.svg';
import './Logo.css';

const Logo = () => {
	return (
		<div style={{display: 'flex', marginRight: 'auto'}} className='ma3'>
			<Tilt className='logo br4 shadow-2'>
		      <div className='container-div' style={{ height: 100, width: 100, padding: 15}}>
		        <img alt='logo' src={brain} />
		      </div>
	    	</Tilt>
		</div>
	);
}

export default Logo;