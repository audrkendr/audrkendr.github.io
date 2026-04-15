const cityData = [
    {
        name: "Austin",
        colors: ["#CA3519", "#6384B8"," #896B41", "#056608",], // Austin
        sky: ["#2c3e50", "#e67e22", "#f39c12", "#d35400"]
    },
    {
        name: "Chicago",
        colors: ["#3a8074", "#bdb369", "#7393b3", "#d9dad8"], // Chicago
        sky: ["#2f3640", "#718093", "#dcdde1", "#192a56"]
    },
    {
        name: "New York City",
        colors: ["#272757", "#E297A4", "#593C39", "#FDFBD4"], // NYC
        sky:["#0c0c0c", "#272757", "#1a1a2e", "#16213e"]
    },
    {
        name: "Seattle",
        colors: ["#FF7E70", "#0A5F38", "#718093", "#872A96"], // Seattle
        sky: ["#3d3d3d", "#4b6584", "#778ca3", "#a5b1c2"]
    },    
    {
        name: "Los Angeles",
        colors: ["#CA1F48", "#503643", "#ff775e", "#4B695B"], // LA
        sky: ["#ff9ff3", "#feca57", "#ff9f43", "#ff6b6b"]
    },
    {
        name: "Tokyo",
        colors: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], // Placeholder for Tokyo's colors
        sky: ["#dff9fb", "#c7ecee", "#95afc0", "#7ed6df"]
    },
    {
        name: "Kyoto",
        colors: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], // Placeholder for Kyoto's colors
        sky: ["#dff9fb", "#c7ecee", "#95afc0", "#7ed6df"]
    },
    {
        name: "Seoul",
        colors: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], // Placeholder for Seoul's colors
        sky: ["#dff9fb", "#c7ecee", "#95afc0", "#7ed6df"]
    },
    {
        name: "London",
        colors: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], // Placeholder for London's colors
        sky: ["#dff9fb", "#c7ecee", "#95afc0", "#7ed6df"]
    },
    {
        name: "Paris",
        colors: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], // Placeholder for Paris' colors
        sky: ["#dff9fb", "#c7ecee", "#95afc0", "#7ed6df"]
    }
];

let currentIndex = 0;

function renderCity() {
    const city = cityData[currentIndex];
    const nameEl = document.getElementById('city-name');
    const gridEl = document.getElementById('palette-grid');

    nameEl.innerText = city.name;
    gridEl.innerHTML = ''; 

    // 1. Render the swatches
    city.colors.forEach(color => {
        const swatch = document.createElement('div');
        swatch.className = 'swatch-container';
        swatch.innerHTML = `
            <div class="swatch" style="background-color: ${color}"></div>
            <span class="hex-code">${color}</span>
        `;
        gridEl.appendChild(swatch);
    });

    updateBackground(city.sky);
}

function updateBackground(skyColors) {
    document.body.style.setProperty('--color-1', skyColors[0]);
    document.body.style.setProperty('--color-2', skyColors[1]);
    document.body.style.setProperty('--color-3', skyColors[2]);
    document.body.style.setProperty('--color-4', skyColors[3]);
}

function moveSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = cityData.length - 1;
    if (currentIndex >= cityData.length) currentIndex = 0;
    renderCity();
}

renderCity();