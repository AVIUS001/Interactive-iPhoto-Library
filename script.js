const gallery = document.getElementById('gallery');
const filterSelect = document.getElementById('filter');
const galleryWrapper = document.querySelector('.gallery-wrapper');

const photos = [
  { src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80', title: 'Blue skies', category: 'nature' },
  { src: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80', title: 'Rainy day', category: 'nature' },
  { src: 'https://images.unsplash.com/photo-1492447273231-0f8fece1a83c?auto=format&fit=crop&w=800&q=80', title: 'Candid friends', category: 'people' },
  { src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80', title: 'Coffee break', category: 'people' },
  { src: 'https://images.unsplash.com/photo-1422568374078-27d3842ba676?auto=format&fit=crop&w=800&q=80', title: 'Sunset walk', category: 'nature' },
  { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80', title: 'Forest trail', category: 'nature' },
  { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80', title: 'Portrait', category: 'people' },
  { src: 'https://images.unsplash.com/photo-1494797706911-15b79b37a5fd?auto=format&fit=crop&w=800&q=80', title: 'Laughing crowd', category: 'people' },
  { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80', title: 'Drone fieldwork', category: 'tech', video: true },
  { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80', title: 'Survey flight', category: 'tech' },
  { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80', title: 'Drone sweep', category: 'tech' },
  { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80', title: 'Team demo', category: 'tech' },
  { src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80', title: 'Graduation day', category: 'people' },
  { src: 'https://images.unsplash.com/photo-1441123694162-e54a981ceba3?auto=format&fit=crop&w=800&q=80', title: 'Smiles', category: 'people' },
  { src: 'https://images.unsplash.com/photo-1421809313281-48f03fa45e9f?auto=format&fit=crop&w=800&q=80', title: 'Quiet street', category: 'places' },
  { src: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80', title: 'Fog and lights', category: 'places' },
  { src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80', title: 'Coastline', category: 'nature' },
  { src: 'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?auto=format&fit=crop&w=800&q=80', title: 'Couple on field', category: 'people' },
  { src: 'https://images.unsplash.com/photo-1524412529635-a258ed66c284?auto=format&fit=crop&w=800&q=80', title: 'City lights', category: 'places' },
  { src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80', title: 'Focus', category: 'people' },
  { src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80', title: 'Hats off', category: 'people' },
  { src: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80', title: 'Work bench', category: 'tech' },
  { src: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=800&q=80', title: 'Campfire', category: 'nature' },
  { src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80', title: 'Morning chat', category: 'people' },
  { src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80', title: 'Backpack', category: 'nature' },
  { src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80', title: 'Running start', category: 'people' },
  { src: 'https://images.unsplash.com/photo-1504271863819-d55a40f06c76?auto=format&fit=crop&w=800&q=80', title: 'Mountains', category: 'nature' },
  { src: 'https://images.unsplash.com/photo-1528916451049-e5d097b61db0?auto=format&fit=crop&w=800&q=80', title: 'Construction walk', category: 'places' },
  { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80', title: 'Portrait closeup', category: 'people' },
  { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80', title: 'Smiling selfie', category: 'people' },
  { src: 'https://images.unsplash.com/photo-1515606378517-3451f2ca0c19?auto=format&fit=crop&w=800&q=80', title: 'Office demo', category: 'tech' },
  { src: 'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?auto=format&fit=crop&w=800&q=80', title: 'Field embrace', category: 'people' },
  { src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80', title: 'Jogging city', category: 'places' },
  { src: 'https://images.unsplash.com/photo-1492447273231-0f8fece1a83c?auto=format&fit=crop&w=800&q=80', title: 'Friends closeup', category: 'people' }
];

function createTile(item) {
  const card = document.createElement('article');
  card.className = `photo-card${item.video ? ' video' : ''}`;
  card.dataset.category = item.category;

  const image = document.createElement('img');
  image.src = item.src;
  image.alt = item.title;
  image.loading = 'lazy';

  const meta = document.createElement('div');
  meta.className = 'meta';
  meta.textContent = item.title;

  card.appendChild(image);
  card.appendChild(meta);
  return card;
}

function renderGallery(items = photos) {
  gallery.innerHTML = '';
  items.forEach((photo) => {
    const tile = createTile(photo);
    gallery.appendChild(tile);
  });
}

function handleFilterChange(event) {
  const filter = event.target.value;
  [...gallery.children].forEach((card) => {
    const matches = filter === 'all' || card.dataset.category === filter;
    card.classList.toggle('hidden', !matches);
  });
}

filterSelect.addEventListener('change', handleFilterChange);
renderGallery();

let isDragging = false;
let startX = 0;
let startY = 0;
let scrollLeft = 0;
let scrollTop = 0;

function pointerDown(event) {
  isDragging = true;
  galleryWrapper.classList.add('dragging');
  startX = event.pageX - galleryWrapper.offsetLeft;
  startY = event.pageY - galleryWrapper.offsetTop;
  scrollLeft = galleryWrapper.scrollLeft;
  scrollTop = galleryWrapper.scrollTop;
  galleryWrapper.setPointerCapture(event.pointerId);
}

function pointerMove(event) {
  if (!isDragging) return;
  event.preventDefault();
  const x = event.pageX - galleryWrapper.offsetLeft;
  const y = event.pageY - galleryWrapper.offsetTop;
  const walkX = x - startX;
  const walkY = y - startY;
  galleryWrapper.scrollLeft = scrollLeft - walkX;
  galleryWrapper.scrollTop = scrollTop - walkY;
}

function pointerUp(event) {
  isDragging = false;
  galleryWrapper.classList.remove('dragging');
  galleryWrapper.releasePointerCapture(event.pointerId);
}

galleryWrapper.addEventListener('pointerdown', pointerDown);
galleryWrapper.addEventListener('pointermove', pointerMove);
galleryWrapper.addEventListener('pointerup', pointerUp);
galleryWrapper.addEventListener('pointerleave', () => {
  isDragging = false;
  galleryWrapper.classList.remove('dragging');
});

// Keyboard accessibility for focus pop
GalleryFocusManager();

function GalleryFocusManager() {
  gallery.querySelectorAll('.photo-card').forEach((card) => {
    card.tabIndex = 0;
  });
}
