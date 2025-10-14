document.addEventListener('DOMContentLoaded', () => {
  const featured = [
    { title: 'Big Buck Bunny', thumb: 'assets/video1.jpg', src: 'https://archive.org/download/BigBuckBunny_328/BigBuckBunny_512kb.mp4' },
    { title: 'Elephant Dream', thumb: 'assets/video2.jpg', src: 'https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4' }
  ];
  const trending = [
    { title: 'Popeye for President', thumb: 'assets/video3.jpg', src: 'https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4' }
  ];
  const featuredGrid = document.getElementById('featuredGrid');
  const trendingGrid = document.getElementById('trendingGrid');
  const modal = document.getElementById('playerModal');
  const videoPlayer = document.getElementById('videoPlayer');
  const closeBtn = document.getElementById('closeBtn');

  function createCard(v) {
    const div = document.createElement('div');
    div.className = 'video-card';
    div.innerHTML = `<img src="${v.thumb}" alt="${v.title}"><p>${v.title}</p>`;
    div.onclick = () => {
      modal.style.display = 'flex';
      videoPlayer.src = v.src;
      videoPlayer.play();
    };
    return div;
  }
  featured.forEach(v => featuredGrid.appendChild(createCard(v)));
  trending.forEach(v => trendingGrid.appendChild(createCard(v)));
  closeBtn.onclick = () => {
    modal.style.display = 'none';
    videoPlayer.pause();
  };
});
