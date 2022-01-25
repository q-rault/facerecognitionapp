import Logo from '../Logo/Logo';
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
	return (isSignedIn ?
		<nav>
			<Logo />
			<p onClick={() => onRouteChange('signOut')}
			className='f3 link dim black underline pa3 pointer'>
				{'Sign Out'}
			</p>
		</nav>
	:
		<nav>
			<Logo />
			<p onClick={() => onRouteChange('signIn')} className='f3 link dim black underline pa3 pointer'>
				{'Sign In'}
			</p>
			<p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>
				{'Register'}
			</p>
		</nav>
	)
}
//
export default Navigation;