import React,{ Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from "react-tsparticles";
import SignIn from './components/SignIn/SignIn';
import {particlesOptions} from './components/particlesOptions/particlesOptions';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
 apiKey: '1946c7b64ee7412197d89a5952179c2c'
});

class App extends Component {
  constructor() {
    super();
    this.state= {
      input: '',
      imageUrl: '',
      boxes:[]
    }
  }




  calculateFaceLocation = (region) => {
    // //top_row: 0.3466585, left_col: 0.19771752, bottom_row: 0.39750305, right_col: 0.25536698
    const clarifaiFace= region.region_info.bounding_box;
    const image=document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return { 
      topRow: clarifaiFace.top_row*height,
      leftCol: clarifaiFace.left_col*width,
      bottomRow: height-clarifaiFace.bottom_row*height,
      rightCol: width-clarifaiFace.right_col*width
    }
  }


  getAllFaces=(regions) => {
    let boxes=[]
    for (var i = 0; i < regions.length; i++) {
      boxes[i]=this.calculateFaceLocation(regions[i],i);
    }
    return boxes
  }

  displayFaceBoxes = (boxes) => {
    this.setState({boxes: boxes});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit= (event) => {
    this.setState({imageUrl: this.state.input})
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
    .then(response => {
      const regions= response.outputs[0].data.regions;
      this.displayFaceBoxes(this.getAllFaces(regions))
      })
    .catch(err=> console.log("didn't work. ", err))
    }



  render() {
    return (
      <div className="App">
        <Particles 
          className="particles" 
          id="tsparticles" 
          options={particlesOptions}
        />
        <SignIn />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition boxes={this.state.boxes} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;