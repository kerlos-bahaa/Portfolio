const myopen = document.querySelector('.open');
const nav = document.querySelector('.nav-links-2');
const myaxe = document.querySelector('.axe');
const mytra1 = document.querySelector('.nav-transition-1');
const mytra2 = document.querySelector('.nav-transition-2');
const mytra3 = document.querySelector('.nav-transition-3');

myopen.onclick = () => {
  nav.style.cssText = 'transform:translateY(0%);';
};
myaxe.onclick = function () {
  nav.style.cssText = 'transform: translateY(-100%);';
};
mytra1.onclick = function () {
  nav.style.cssText = 'transform: translateY(-100%);';
};
mytra2.onclick = function () {
  nav.style.cssText = 'transform: translateY(-100%);';
};
mytra3.onclick = function () {
  nav.style.cssText = 'transform: translateY(-100%);';
};

// pop up section work
const projectArray = [
  {
    name: 'Tonic',
    description: `  A daily selection of privately personalized reads; no accounts or
    sign-ups required.`,
    featuredImage: './picture/tonixpc.png',
    technologies: ['html ', 'css ', 'java script'],
    linktoliveversion: '',
    linktosource: '#',
  },
  {
    name: 'Multi-Post Stories',
    description: `  A daily selection of privately personalized reads; no accounts or
    sign-ups required.`,
    featuredImage: './picture/Snapshoot Portfoliopc.png',
    technologies: ['html ', 'css ', 'java script'],
    linktoliveversion: '',
    linktosource: '#',
  },
  {
    name: 'Tonic',
    description: `  A daily selection of privately personalized reads; no accounts or
    sign-ups required.`,
    featuredImage: './picture/pc3.png',
    technologies: ['html ', 'css ', 'java script'],
    linktoliveversion: '',
    linktosource: '#',
  },
  {
    name: 'Multi-Post Stories',
    description: `  A daily selection of privately personalized reads; no accounts or
    sign-ups required.`,
    featuredImage: './picture/pc4.png',
    technologies: ['html ', 'css ', 'java script'],
    linktoliveversion: '',
    linktosource: '#',
  },
];

const project = document.querySelector('#portid');

for (let i = 0; i < projectArray.length; i += 1) {
  project.innerHTML += `
  <div class="${i % 2 ? 'repeated-div' : 'repeated-div-2'}">
  

  
  <img class="repeated-img" src="${
  projectArray[i].featuredImage
}" alt="Snapshoot Portfolio " />
<img class="pcrepeated-img" src="${
  projectArray[i].featuredImage
}" alt="Snapshoot Portfolio">
<div class="pc12-div">
  <h3 class="repeated-p1"> ${projectArray[i].name} </h3>
  <ul class="repeated-ul">
    <li class="repeated-li1">CANOPY</li>
    <li class="repeated-li2">Back End Dev</li>
    <li class="repeated-li3">2015</li>
  </ul>
  <p class="repeated-p2">
  ${projectArray[i].description}
  </p>
  <ul class="repeated-ul2">
    <li class="repeated-li4">${projectArray[i].technologies[0]}</li>
    <li class="repeated-li5">${projectArray[i].technologies[1]}</li>
    <li class="repeated-li6">${projectArray[i].technologies[2]}</li>
  </ul>
<button class="see-button" type="button">See project</button>
</div> 
</div>
`;
}

const seebutton = document.querySelectorAll('.see-button');
// const pc12div = document.querySelectorAll(".pc12-div");

seebutton.forEach((button) => {
  button.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'popup-overly';
    document.body.appendChild(overlay);

    const popupbox = document.createElement('div');
    popupbox.className = 'popup-box';
    overlay.appendChild(popupbox);
    for (let i = 0; i < projectArray.length; i += 1) {
      popupbox.innerHTML += `
      <div class="popupcardfirst"> 
      <div class="axey">x</div>
            <h3 class="repeated-p1"> ${projectArray[i].name} </h3>
            <div> 
            <ul class="repeated-ul">
            <li class="repeated-li1">CANOPY</li>
            <li class="repeated-li2">Back End Dev</li>
            <li class="repeated-li3">2015</li>
            </div> 
      <div class="${i % 2 ? 'repeated-div' : 'repeated-div-2'}">
      <img class="repeated-img" src="${
  projectArray[i].featuredImage
}" alt="Snapshoot Portfolio " />
    <img class="pcrepeated-img" src="${
  projectArray[i].featuredImage
}" alt="Snapshoot Portfolio"> 
    </div>
    <div class="pc12-div">
    <div>
    <p class="repeated-p2">
    ${`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
     since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing
      and typesetting industry. 
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
    Lorem Ipsum han printer took a galley of 
    type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.
    `}
    </p></div>
    <div class="lastpopvutton">
    </ul>

      <ul class="repeated-ul2">
        <li class="repeated-li4">${projectArray[i].technologies[0]}</li>
        <li class="repeated-li5">${projectArray[i].technologies[1]}</li>
        <li class="repeated-li6">${projectArray[i].technologies[2]}</li>

      </ul>
      <hr>
      <div class="lastpopputton">
      <button class="see-button" type="button">See live    <img src="./picture/-expot.png" alt="not found"> </button>
    <button class="see-button" type="button">See soource <img src="./picture/icons.png" alt="not found"> </button></div></div>
    
      
    </div> 
    </div>
    `;
    }
    const myaxey = document.querySelectorAll('.axey');
    myaxey.forEach((element) => {
      element.onclick = function () {
        overlay.style.display = ' none';
      };
    });
  });
});
