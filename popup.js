// to load and take some of the information from HTML
const scanBtn = document.getElementById('scan-btn');
const statusDiv = document.getElementById('status');
const totalDiv = document.getElementById('total-count');

const listContainer = document.getElrmrntById('tab-list-container')
// to see if the user clicked (Listen)
scanBtn.addEventListener('click', () => {
    // feedBACK FOR USER
    statusDiv.textContent = 'Auditing your browser...';
   listContainer.innerHTML = '';

        //google contract
        chrome.tabs.query({currentWindow: true})
});
});

//