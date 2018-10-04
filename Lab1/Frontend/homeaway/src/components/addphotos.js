import React from 'react';
import '../../src/CSS/postproperty.css';
import ReactDropzone from "react-dropzone";
var files=[];
var filespreview=[];
var minCount=2;
var maxCount=4;
var dropstyle={
"height": "200px",
"border-width": "2px",
"border-color": "rgb(126, 125, 125)",
"border-style":"dashed",
"border-radius": "5px",

}
function AddPhotos (props){
  var nextstep=(e)=>{
    console.log("In next Step");
    e.preventDefault();
    var data={
        photos:files
        
    }
    props.saveData(data);
    props.setStep(4);
}

var prevstep=(e)=>{
  
  e.preventDefault();
  var data={
      photos:files
      
  }
  props.saveData(data);
  props.setStep(2);
}




var onDrop = (images) => {
    // POST to a test endpoint for demo purposes

    if(files.length<=maxCount){
        images.forEach(file => {
            files.push(file);
          });
        
        
        
        


    }else{
        alert("U can upload maximum of 5 files");
    }

    
  }

var addPhotos=(e)=>{
    let i;
    for(i=0;i<e.target.files.length;i++){
       
        files.push(e.target.files[i]);
        }
    
}


  return (
    <div className="App">
    <form id="msform" action="" method="post">
   






        <fieldset>
            <div id="heading" className="panel panel-default">
                <div id="verifications" className="panel-heading"><h3>Add Photos
                </h3><hr /></div>

                <div className="panel-body">
                <label><h4>Add Photos</h4></label>
        <center>
        
        <div>
        <ReactDropzone
        onDrop={onDrop} style={dropstyle}>
       <h3>Add a maximum of 5 images for your property</h3>
      </ReactDropzone>
      </div>
          
          </center>
                     <label>{filespreview}</label>           
                       <br/>         
                    <button id="back" type="button" className="btn btn-outline-primary" onClick={prevstep}>Back</button>
                    <span id="next"><button  id="next1"type="button" className="btn btn-primary" onClick={nextstep}>Next</button></span>

                    
                </div>

                </div>

        </fieldset>
    </form>

</div>
  );
  
}

export default AddPhotos;