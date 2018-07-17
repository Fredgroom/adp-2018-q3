console.log('in main.js');

function appendQuotes(quotes) {
    const quotesListElement = document.getElementById('quotes-list');

    quotes.forEach((quote) => {
        const quoteHtml = `
            <li>
                <strong>${quote.name}</strong>: ${quote.text}
            </li>
        `;

        quotesListElement.innerHTML += quoteHtml;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const quotesButtonElement = document.getElementById('quotes');

    quotesButtonElement.addEventListener('click', () => {
        const quotesUrl = '/quotes';

        fetch(quotesUrl).then(
            (response) => response.json()
        ).then((quotes) => {
            console.log('quotes:', quotes);
            appendQuotes(quotes);
        });
    });
});

