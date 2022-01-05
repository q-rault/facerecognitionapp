import './ImageLinkForm.css';

const ImageLinkForm = () => {

	return (
		<div>
			<p className='f3 white'>
				{'This Magic Brain will detect faces in your pictures. Give it a try'}
			</p>
			<div className='center'>
				<div className='form carbon space-between pa4 br4 shadow-5'>
					<input placeholder='https://www.example.com/image.png' className='url f4 pa2 w-75 br2 black b--black bg-white' type='text' />
					<button className='w-20 br3 grow f4 link ph3 pv2 dib strong white carbon'>{'Detect'}</button> {
					/*dim transparency
					br3 ph3 pv2 mb2 dib pv3-ns w4 br2 b--black bg-near-white*/}
				</div>
			</div>
		</div>
	);
}
export default ImageLinkForm;
