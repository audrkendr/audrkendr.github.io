const cityData = [
    {
        name: "Austin",
        colors: ["#CA3519", "#6C9AAB"," #896B41", "#056608"], // Austin
        sky: ["#1A2E40", "#D97D24", "#F2A134", "#E6613B"]
    },
    {
        name: "Chicago",
        colors: ["#F2F0E6", "#C27A63", "#5F9E8F", "#4A6B82"], // Chicago
        sky: ["#1A2536", "#3B4E68", "#64829E", "#A3BDCC"]
    },
    {
        name: "NYC",
        colors: ["#272757", "#C5954A", "#593C39", "#8A9EA7"], // NYC
        sky:["#0F172A", "#334155", "#64748B", "#D9A05B"]
    },
    {
        name: "Seattle",
        colors: ["#516052", "#0A5F38", "#718093", "#84cd75"], // Seattle
        sky: ["#242D34", "#3F4E5A", "#617585", "#91A4B3"]
    },    
    {
        name: "LA",
        colors: ["#CA1F48", "#5948df", "#feca57", "#c51f96"], // LA
        sky: ["#120c1f", "#1a1c4b", "#ff5e62", "#ff9966"]
    },
    {
        name: "Tokyo",
        colors: ["#FF007F", "#2e868b", "#d32e2e", "#192481"], // Placeholder for Tokyo's colors
        sky: ["#0B0C10", "#1F2833", "#4527A0", "#E040FB"]
    },
    {
        name: "Kyoto",
        colors: ["#f0f2d9", "#FFF4B3","#4E403E", "#FBCCE3"], // Placeholder for Kyoto's colors
        sky: ["#253342", "#557A95", "#B1A296", "#E8D7CD"]
    },
    {
        name: "Seoul",
        colors: ["#4ec5e6", "#d4500e", "#4a29de", "#34dee1"], // Placeholder for Seoul's colors
        sky: ["#0F172A", "#1E1B4B", "#701A75", "#F59E0B"]
    },
    {
        name: "London",
        colors: ["#FFFDD0", "#c292a1", "#1C352D", "#926F34"], // Placeholder for London's colors
        sky: ["#1A2233", "#2E3B52", "#52637A", "#8CA0BA"]
    },
    {
        name: "Paris",
        colors: ["#D3A779", "#A1C6CC", "#790604", "#100e0e"], // Placeholder for Paris' colors
        sky: ["#181E29", "#3A4454", "#6E5B68", "#D9C3B0"]
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