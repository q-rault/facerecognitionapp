import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit } ) => {

	return (
		<div>
			<p className='f3 white'>
				{'This Magic Brain will detect faces in your pictures. Give it a try'}
			</p>
			<div className='center'>
				<div className='form carbon space-around pa4 br4 shadow-5'>
					<input onChange={onInputChange} placeholder='https://www.example.com/image.png' className='pa2 input-reset ba bg-black hover-bg-black hover-white url f4 w-75 br4 white b--black' type='text' />
					<button onClick={onButtonSubmit} className='w-15 br4 grow f4 link ph3 pv2 dib white carbon bg-black hover-bg-black hover-white'>{'Detect'}</button>
				</div>
			</div>
		</div>
	);
}
export default ImageLinkForm;
