const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    /* make an HTTP request for the phrase*/
    const request = new XMLHttpRequest();

    /*
    0 	UNSENT 	Client has been created. open() not called yet.
    1 	OPENED 	open() has been called.
    2 	HEADERS_RECEIVED 	send() has been called, and headers and status are available.
    3 	LOADING 	Downloading; responseText holds partial data.
    4 	DONE 	The operation is complete.
    */

    request.addEventListener("readystatechange", (event) => {
        /* event.target is the request itself */
        if(event.target.readyState === 4 && event.target.status === 200) {
            const data = JSON.parse(event.target.responseText);
            resolve(data.puzzle);
        } else if (event.target.readyState === 4) {
            reject("An error has taken place");
        }
    });

    request.open("GET", `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();
});

const getCountry = (countryCode, callback) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", (event) => {
        if(event.target.readyState === 4 && event.target.status === 200) {
            const data = JSON.parse(event.target.responseText);
            const country = data.find( (element) => element.cca2.toLowerCase() === countryCode.toLowerCase());
            resolve(country);
        } else if (event.target.readyState === 4) {
            reject("An error has taken place");
        }
    })
    request.open("GET", "https://restcountries.com/v3.1/all");
    request.send();
});
