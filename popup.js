// Grab the elements from the HTML
const scanBtn = document.getElementById('scan-btn');
const statusDiv = document.getElementById('status');
const totalDiv = document.getElementById('total-count');
const listContainer = document.getElementById('tab-list-container');

// Listen for the click
scanBtn.addEventListener('click', () => {
    // Immediate feedback
    statusDiv.textContent = "Auditing your browser...";
    listContainer.innerHTML = ''; 

    // Ask Chrome for all tabs in the current window
    chrome.tabs.query({currentWindow: true}, (tabs) => {
        const totalTabs = tabs.length;
        const seenUrls = new Set();
        const duplicates = [];

        // Check each tab for duplicates
        tabs.forEach((tab) => {
            if (seenUrls.has(tab.url)) {
                duplicates.push(tab);
            } else {
                seenUrls.add(tab.url);
            }
        });

        // Update the UI
        totalDiv.textContent = "Tabs open: " + totalTabs;

        if (duplicates.length > 0) {
            statusDiv.textContent = `⚠️ Found ${duplicates.length} duplicates:`;
            
            duplicates.forEach(tab => {
                const item = document.createElement('div');
                item.className = 'duplicate-item'; // You can style this in CSS!
                item.textContent = tab.title.substring(0, 35) + "..."; 
                listContainer.appendChild(item);
            });
        } else {
            statusDiv.textContent = "✅ No duplicates found!";
        }
    });
});
// js / vs had bug so i had to put this in a seperate file code for some reason