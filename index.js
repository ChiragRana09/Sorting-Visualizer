const bubbleSortBtn = document.getElementById('bubble-sort-btn');
const heapSortBtn = document.getElementById('heap-sort-btn');
const selectionSortBtn=document.getElementById('selection-sort-btn');

// Generate an array of random numbers
function generateArray(size, min, max) {
const arr = [];
for (let i = 0; i < size; i++) {
  arr.push(Math.floor(Math.random() * (max - min + 1) + min));
}
return arr;
}

// Reset the array and display it
function resetArray() {
const barContainer = document.querySelector('.bar-container');
barContainer.innerHTML = '';

const array = generateArray(10, 10, 300);
for (let i = 0; i < array.length; i++) {
  const bar = document.createElement('div');
  bar.classList.add('bar');
  bar.style.height = `${array[i]}px`;
  bar.style.width = "40px";
  bar.textContent = array[i];
  barContainer.appendChild(bar);
}
}

// Swap two bars in the DOM
function swapBars(bar1, bar2) {
const tempHeight = bar1.style.height;
const tempText = bar1.textContent;
bar1.style.height = bar2.style.height;
bar1.textContent = bar2.textContent;
bar2.style.height = tempHeight;
bar2.textContent = tempText;
}

// Bubble Sort
async function bubbleSort() {
selectionSortBtn.disabled=true;
heapSortBtn.disabled = true;
const bars = document.querySelectorAll('.bar');
const n = bars.length;

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    const bar1 = bars[j];
    const bar2 = bars[j + 1];
    
    // Visualize comparison
    bar1.style.backgroundColor = 'red';
    bar2.style.backgroundColor = 'red';
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const height1 = parseInt(bar1.style.height, 10);
    const height2 = parseInt(bar2.style.height, 10);
    
    if (height1 > height2) {
      // Swap bars
      swapBars(bar1, bar2);
    }
    
    // Reset color
    bar1.style.backgroundColor = 'yellow';
    bar2.style.backgroundColor = 'yellow';
  }
}
 selectionSortBtn.disabled=false;
 heapSortBtn.disabled = false;
}

// Selection Sort 
async function selectionSort() {
    
    heapSortBtn.disabled = true;
    bubbleSortBtn.disabled=true;
    const bars = document.querySelectorAll('.bar');
    const n = bars.length;
    /*      for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {  */
      for (let i = 0; i<n-1; i++) {
        for (let j = n-1; j >i; j--) {
        const bar1 = bars[j];
        const bar2 = bars[j - 1];
        
        // Visualize comparison
        bar1.style.backgroundColor = 'red';
        bar2.style.backgroundColor = 'red';
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const height1 = parseInt(bar1.style.height, 10);
        const height2 = parseInt(bar2.style.height, 10);
        
        if (height1 < height2) {
          // Swap bars
          swapBars(bar1, bar2);
        }
        
        // Reset color
        bar1.style.backgroundColor = 'yellow';
        bar2.style.backgroundColor = 'yellow';
      }
    }
    
     heapSortBtn.disabled = false;
     bubbleSortBtn.disabled=false;
    }
    
// Heap Sort
async function heapSort() {
bubbleSortBtn.disabled = true;
selectionSortBtn.disabled=true;
const bars = document.querySelectorAll('.bar');
const n = bars.length;

// Heapify the array
for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
  await heapify(bars, n, i);
}

// Extract elements from the heap one by one
for (let i = n - 1; i > 0; i--) {
  // Move current root to the end
  swapBars(bars[0], bars[i]);
  
  // Heapify the reduced heap
  await heapify(bars, i, 0);
}
}

// Heapify the array
async function heapify(bars, n, i) {
let largest = i;
const left = 2 * i + 1;
const right = 2 * i + 2;

if (left < n && parseInt(bars[left].style.height, 10) > parseInt(bars[largest].style.height, 10)) {
  largest = left;
}

if (right < n && parseInt(bars[right].style.height, 10) > parseInt(bars[largest].style.height, 10)) {
  largest = right;
}

if (largest !== i) {
  // Visualize comparison
  bars[i].style.backgroundColor = 'red';
  bars[largest].style.backgroundColor = 'red';
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Swap bars
  swapBars(bars[i], bars[largest]);
  
  // Reset color
  bar1.style.backgroundColor = 'yellow';
    bar2.style.backgroundColor = 'yellow';
  
  // Heapify the affected sub-tree
  await heapify(bars, n, largest);
}

 bubbleSortBtn.disabled = false;
 selectionSortBtn.disabled=false;
}

// Initial array generation
resetArray();