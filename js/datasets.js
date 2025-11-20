const datasets = [
  {
    title:"Chicken Health & Behavior Multimodal Dataset",
    description:"This comprehensive dataset of chicken farm visuals and audio is a resource for developing intelligent monitoring systems. By providing data for early detection of health issues, it helps reduce the significant economic losses caused by poultry diseases.",
    media:"",
    features:["5k+ downloads", "Visual Data", "Audio Data"],
    link:"https://huggingface.co/datasets/IceKhoffi/chicken-health-behavior-multimodal"
  },
  {
    title:"IDR Coins Dataset",
    description:"This is an image dataset of **Indonesian Rupiah (IDR) coins** with denominations ranging from **IDR 100 to IDR 1000**. It is a unique collection because it includes images of the same denomination from **different minting years and design templates**, making it ideal for coin recognition and classification research.",
    media:"",
    features:["Visual Data", "Annotated Images"],
    link:"https://huggingface.co/datasets/IceKhoffi/idr-coins"
  }
];

function renderList(items,containerId){
  const container=document.getElementById(containerId);
  container.innerHTML="";
  items.forEach(item=>{
    const card=document.createElement('div');
    card.className='card';
    let mediaHTML="";
    if(item.media){
      if(item.media.endsWith('.mp4')){
        mediaHTML=`<div class="media"><video src="${item.media}" controls></video></div>`;
      }else{
        mediaHTML=`<div class="media"><img src="${item.media}" alt="${item.title}"></div>`;
      }
    }
    card.innerHTML=`
      <h3>${item.title}</h3>
      <div class="card-body">
        ${mediaHTML?`<div class="card-left">${mediaHTML}</div>`:""}
        <div class="card-right">
          <p>${item.description}</p>
          <div class="features">${item.features.map(f=>`<div class="feature-pill">${f}</div>`).join('')}</div>
          ${item.link?`<a class="btn primary" href="${item.link}" target="_blank">View Dataset</a>`:""}
        </div>
      </div>`;
    container.appendChild(card);
  });
}

renderList(datasets,'datasets-list');
document.getElementById('year').textContent=new Date().getFullYear();

const currentPage = window.location.pathname.split("/").pop(); 
document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});
