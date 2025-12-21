const projects = [
  {
    title: "Chicken Health & Behavior Detection",
    description: "This project uses technology to watch and listen to chickens, helping farmers find sick ones early to prevent disease and save money.",
    media: "../assets/464059233-c489f2e9-8cdb-49ed-aa67-9c4e60da03a8.png",
    features: ["Computer Vision","Vocalization Analysis"],
    repo: "https://github.com/IceKhoffi/chicken-health-behavior-multimodal"
  },
  {
    title: "ChickSense",
    description: "ChickSense is a system that helps farmers monitor the health of their chickens. By analyzing their behavior, sounds, and activity patterns, the system can detect signs of illness or stress early on.",
    media: "../assets/07f8214e5d467a8d43b0c6ac240ac6777b77ca741b76fa478dc6df09b453feaf.png",
    features: ["Behavior Monitoring", "Vocalization Analysis", "Activity Patterns", "Early Notifications"],
    repo: "https://github.com/IceKhoffi/ChickSense"
  },
  {
    title: "Indonesian Product Review ABSA",
    description: "An Aspect-Based Sentiment Analysis system designed for Indonesian e-commerce reviews. It utilizes deep learning models to extract specific product attributes (like color, texture, or delivery) and determine the sentiment for each, providing granular customer feedback insights.",
    features: ["IndoBERT (Transformers)", "BiLSTM & LSTM Architectures", "Tokopedia Web Scraping", "Multi-label Aspect Extraction"],
    repo: "https://github.com/IceKhoffi/aspect-based-sentiment-analysis"
  }
];

function renderList(items, containerId){
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
          ${item.repo?`<a class="btn primary" href="${item.repo}" target="_blank">View Repository</a>`:""}
        </div>
      </div>`;
    container.appendChild(card);
  });
}

renderList(projects,'projects-list');
document.getElementById('year').textContent=new Date().getFullYear();

const currentPage = window.location.pathname.split("/").pop(); 
document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});