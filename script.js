const projects=[
    {
        title:"Chicken Health & Behavior Detection",
        description:"This project uses technology to watch and listen to chickens, helping farmers find sick ones early to prevent disease and save money.",
        media:"assets/464059233-c489f2e9-8cdb-49ed-aa67-9c4e60da03a8.png",
        features:["Computer Vision","Vocalization Analysis"],
        repo:"https://github.com/IceKhoffi/chicken-health-behavior-multimodal"
    },
    {
        title:"ChickSense",
        description:"ChickSense is a system that helps farmers monitor the health of their chickens. By analyzing their behavior, sounds, and activity patterns, the system can detect signs of illness or stress early on.",
        media:"assets/07f8214e5d467a8d43b0c6ac240ac6777b77ca741b76fa478dc6df09b453feaf.png",
        features:["Behavior Monitoring", "Vocalization Analysis", "Activity Patterns", "Early Notifications"],
        repo:"https://github.com/IceKhoffi/ChickSense"
    }
];


const datasets=[
    {
        title:"Chicken Health & Behavior Multimodal Dataset",
        description:"This comprehensive dataset of chicken farm visuals and audio is a resource for developing intelligent monitoring systems. By providing data for early detection of health issues, it helps reduce the significant economic losses caused by poultry diseases.",
        media:"",
        features:["5k+ downloads", "Visual Data", "Audio Data"],
        link:"https://huggingface.co/datasets/IceKhoffi/chicken-health-behavior-multimodal"
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
                ${item.repo?`<a class="btn primary" href="${item.repo}" target="_blank">View Repository</a>`:""}
                ${item.link?`<a class="btn primary" href="${item.link}" target="_blank">View Dataset</a>`:""}
            </div>
        </div>
        `;
        container.appendChild(card);
    });
}

renderList(projects,'projects-list');
renderList(datasets,'datasets-list');

document.getElementById('year').textContent=new Date().getFullYear();