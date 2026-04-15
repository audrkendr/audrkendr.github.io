const paintings = [
    { title: "Joséphine-Éléonore-Marie-Pauline de Galard de Brassac de Béarn (1825–1860), Princesse de Broglie - Jean Auguste Dominique Ingres", url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/459106/1964622/main-image" },
    { title: "In the Meadow - Auguste Renoir", url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/437434/795980/main-image" },
    { title: "The Lovers - Rene Magritte", url: "https://www.moma.org/collection/works/79933" },
    { title: "The Love Letter - Jean Honore Fragonard", url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436322/1661166/main-image" },
    { title: "The Birth of Venus - Sandro Botticelli", url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436105/1661165/main-image" },
    { title: "Flowers and Fuit in a Chinese Bowl - Juan de Zurbarán", url: "https://www.artic.edu/iiif/2/9e4bfbcc-176f-3dac-4529-f67c9a98065c/full/843,/0/default.jpg" },
    { title: "The Harvesters - Pieter Bruegel the Elder", url:"https://collectionapi.metmuseum.org/api/collection/v1/iiif/435809/794356/main-image" },
    { title: "The Astronomer - Johannes Vermeer", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa5dg3uc-9SepAF8JFnr5qClfKntffw1HsFQ&s" },
    { title: "The  Tower of Babel - Pieter Bruegel the Elder", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project_-_edited.jpg/500px-Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project_-_edited.jpg" }
];

const songs = [
    { embed: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0irXFjfMY0YDUpudTgkJef?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>' },
    { embed: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/1c6gAUV7w8g34UIHkUctlS?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>' },
    { embed: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5m3rVRNkTv5EQnPuF293we?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>' },
    { embed: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/7Azgd4AE9GdoGazLv4Wr0K?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>' },
    { embed: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/10kvU6okNQBJ7gCYo0X5ai?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>' },
    {embed: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/77evpfqHmmSklsFpo8wLCB?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>' }
];

function updateDailyContent() {
    const now = new Date();
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    
    // Select items based on the day
    const painting = paintings[dayOfYear % paintings.length];
    const song = songs[dayOfYear % songs.length];

    // Update the UI
    document.getElementById('current-date').innerText = now.toDateString();
    document.getElementById('daily-painting').src = painting.url;
    document.getElementById('painting-title').innerText = painting.title;
    document.getElementById('daily-song').innerHTML = song.embed;
}

updateDailyContent();