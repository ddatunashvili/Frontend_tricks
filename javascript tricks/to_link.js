function wrapParentElementsWithLink(parentSelector, linkSelector) {
    // Select all link elements based on the provided selector
    const sourceLinks = document.querySelectorAll(linkSelector);
  
    // Iterate through each source link
    sourceLinks.forEach((linkElement) => {
      // Get the href attribute of the current link element
      const linkHref = linkElement.getAttribute("href");
  
      // Create a new anchor element
      const anchor = document.createElement('a');
      anchor.href = linkHref; // Set the href attribute
  
      // Get the parent element using the provided parent selector
      const parentElement = linkElement.closest(parentSelector);
  
      // Check if a parent element exists
      if (parentElement) {
        // Wrap the parent element with the newly created anchor element
        parentElement.parentNode.replaceChild(anchor, parentElement);
        anchor.appendChild(parentElement);
      }
    });
  }
  
  // Call the function with the desired parent element and link element selectors
  document.addEventListener("DOMContentLoaded", function() {
    wrapParentElementsWithLink('.elementor-inner-column', '.kategoria section .elementor-icon-box-title a');
  });
  