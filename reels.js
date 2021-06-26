
const _ = (e) => document.querySelector(e);
const render = _(".result");

// create video
const createVideo = (data) => {
  let v = document.createElement("video");
  v.id = "instavideo";
  v.src = data.content;
  v.controls = true;
  v.autoplay = true;
  
    var node = document.getElementById('v1');
while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
}

var node2 = document.getElementById('v2');
while (node2.hasChildNodes()) {
    node2.removeChild(node2.firstChild);
}
  
  document.getElementById("v1").innerHTML += "<p class='lead'>Your video is Ready for Download</p>";

 document.getElementById("v2").innerHTML += "<a class='btn btn-success' role='button' href="+data.content+"&dl=1 download><span class='glyphicon glyphicon-download'></span>Download Your Video</a>";
 
//  document.getElementById("v2").innerHTML += "<div class='fa fa-facebook' data-href="+data.content+"&dl=1 data-layout='button' data-size='large'><a target='_blank' href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse' class='fb-xfbml-parse-ignore'>Share</a></div>";

//   // create info
//   let info = document.createElement("p");
//   info.textContent = "Click the right button on video and select save as.";

  render.innerHTML = "";
  render.appendChild(v);
//   render.appendChild(info);
};
// create image
const createImg = (data) => {
  // create image
  let i = document.createElement("img");
  i.id = "instaImg";
  i.src = data.content;
  
  var node = document.getElementById('v1');
while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
}

var node2 = document.getElementById('v2');
while (node2.hasChildNodes()) {
    node2.removeChild(node2.firstChild);
}
  
  document.getElementById("v1").innerHTML += "<p class='lead'>Your Image is Ready for Download</p>";
  
  document.getElementById("v2").innerHTML += "<a class='btn btn-success' role='button' href="+data.content+"&dl=1 download><span class='glyphicon glyphicon-download'></span>Download Your Image</a>";

//   // create info
//   let info = document.createElement("p");
//   info.textContent =
//     "Click the right button on the image and select save image..";

  render.innerHTML = "";
  render.appendChild(i);
//   render.appendChild(info);
};

// extract html
const getMedia = () => {
  render.innerHTML = "<div class='image-placeholder'></div>";
  // get input value
  let url = _("input").value;
  if (url) {
    fetch(url)
      .then((r) => r.text())
      .then((r) => {
        // render html
        render.innerHTML = r;
        // wait, find meta and create video or image
        let w = setTimeout(() => {
          let v = _('meta[property="og:video"]');
          
          var x = document.getElementById("two");
  if (x.style.display === "none") {
    x.style.display = "block";
  } 

          if (v) {
            createVideo(v);
           
          } else {
            let img = _('meta[property="og:image"]');
            if (img) {
              createImg(img);
              
            } else {
              document.body.innerHTML = body;
              alert("Error extracting Instagram image / video.");
            }
          }
          clearTimeout(w);
        }, 200);
      });
      
      
  } else {
    _("input").setAttribute(
      "placeholder",
      "Invalid address, use a proper Insagram link"
    );
  }
};
