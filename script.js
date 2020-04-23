console.log("script loaded");




function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }


function createBox() {

    let newDiv = document.createElement('div');

    height = between(10, 200);
    width = between(10, 200);
    colorG = between(0, 255);
    colorR = between(0, 255);
    colorB = between(0, 255);
    radius = between(0, 100);
    positionX = between(-20, window.innerWidth);
    positionY = between(-20, window.innerHeight);

    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';
    newDiv.style.backgroundColor = `rgb( ${colorR}, ${colorG}, ${colorB} )`
    newDiv.style.borderRadius = radius + 'px';
    newDiv.style.top = positionY + 'px';
    newDiv.style.left = positionX + 'px';
    document.body.style.backgroundColor = `rgb( ${colorR}, ${colorG}, ${colorB} )`;

    document.body.appendChild(newDiv);

} 

for (let i = 0; i < 150;i++) {

    createBox();
}