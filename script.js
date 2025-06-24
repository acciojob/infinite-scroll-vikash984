//your code here!
const list = document.getElementById('infi-list');
let counter = 1;

// Function to add list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.textContent = `List Item ${counter++}`;
    list.appendChild(li);
  }
}

// Add initial 10 items
addItems(10);

// Listen for scroll
list.addEventListener('scroll', () => {
  // Check if user has scrolled to the bottom
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2);
  }
});


