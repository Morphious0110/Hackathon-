
import React, { Component } from "react";
// import '../App.css'
import "../index.css";
export class Content extends Component {
  render() {
    return (
      <>
        <div className="heading">
          <h1>Welcome to Flora sense</h1>
          <h3>Take care of your plant in few simple steps</h3>
        </div>
        <hr />
        <div className="steps">
            <ol>
          <li>Upload a pic</li>
          <p>Take multiple photos of your plant, upload them and let us work our magic. This web demo allows you to identify up to 10 plants per month for free.</p>
          <li>Plenty of plants</li>
          <p>Plant.id can accurately identify more than 33,000 taxa, including houseplants, garden plants, trees, weeds, fungi, and lichens from around the world. We give you the common name, a short description and the classification of your plant in addition to the scientific (Latin) name.</p>
          <li>Plant Diseases</li>
          <p>Is your plant sick? Is it due to pests, fungal disease, or simply overwatered? Plant.id's Health Assessment feature can tell the difference! Our model detects 90 different diseases. Just click on the icon of the unhealthy plant after the identification.</p>
          <li>Power of ML</li>
          <p>We use cutting-edge methods of machine learning (aka artificial intelligence) and train custom deep convolutional neural networks to ensure the best possible results. We estimate that we get the plant name right 90% of the time. Check out our blog for more details.</p>
          </ol>
         
        </div>
        <div className="button">
        <button type="button" className="btn btn-outline-primary " >Lets get Started</button>
        </div>
       
      </>
    );
  }
}

export default Content;