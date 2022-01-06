import './FaceRecognition.css';


const FaceRecognition = ({imageUrl, boxes}) => {

const renderBoxes = () => {
	if (boxes.length > 0) {
		return boxes.map((box, index) => {
			return <div className="bounding-box" style={{top:box.topRow, left: box.leftCol, bottom:box.bottomRow, right: box.rightCol}} key={index} ></div>
		})
	} else {
		return []
	}
}

	return (
		<div className='center ma'>
			<div className='box-container absolute mt2'>
				<img id='inputImage' className='output' alt='face recognition area' src={imageUrl} />
				{renderBoxes()}
			</div>
		</div>
	)
}
export default FaceRecognition;
