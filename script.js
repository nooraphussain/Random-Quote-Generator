document.querySelectorAll('.quote-btn').forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      getQuote(category);
    });
  });
  
  async function getQuote(category) {
    let url = 'https://api.quotable.io/random';
  
    if (category === 'bad-day') {
      url += '?tags=inspirational';
    } else if (category === 'grateful') {
      url += '?tags=thankful';
    } else if (category === 'friendship') {
      url += '?tags=friendship';
    } else if (category === 'family') {
      url += '?tags=family';
    }
  
    const response = await fetch(url);
    const data = await response.json();
    
    const quoteElement = document.getElementById('quote');
    quoteElement.classList.remove('fade-in');
    
    setTimeout(() => {
      quoteElement.innerText = data.content;
      quoteElement.classList.add('fade-in');
    }, 100);
  }
  