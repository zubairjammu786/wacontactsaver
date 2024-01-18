
// content.js

// Function to replace phone numbers with names
function replaceNumbersWithNames() {
  const phoneNumberElements = document.querySelectorAll('span[dir="auto"][title][aria-label].ggj6brxn.gfz4du6o.r7fjleex.g0rxnol2.lhj4utae.le5p0ye3.l7jjieqr._11JPr');

  phoneNumberElements.forEach(element => {
    const phoneNumber = element.title.trim();
    
    // Replace this switch statement with your own logic to map phone numbers to names    // Replace this switch statement with your own logic to map phone numbers to names
    let name = phoneNumber;
    switch (phoneNumber) {
      case '+92 3xx xxxxxxx':
        name = 'Zubair';
        break;




      // Add more cases for other phone numbers
    }

    // Update the element's text content
    element.textContent = name;
  });
}

// Run the function when the page is loaded and when it's dynamically updated
replaceNumbersWithNames();

// Observe changes to the DOM and update the names accordingly
const observer = new MutationObserver(replaceNumbersWithNames);
const observerConfig = { childList: true, subtree: true };
observer.observe(document.body, observerConfig);