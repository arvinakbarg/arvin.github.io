let nonInteractiveClickCount = 0;

document.addEventListener('click', function(event) {
  // Check if the clicked element is interactive (a link, button, etc.)
  const isInteractive = event.target.tagName === 'A' || event.target.tagName === 'BUTTON' || 
                        event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA';

  if (!isInteractive) {
    nonInteractiveClickCount++;
    
    if (nonInteractiveClickCount === 5) {
      alert("You clicked on non-interactive parts 5 times!");
      nonInteractiveClickCount = 0; // Reset the count after showing the alert
    }
  }
});
