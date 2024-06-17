const getPuzzle = async (wordCount) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    if(response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error("Unable to fetch puzzle");
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
    if(response.status === 200) {
        const data = await response.json();
        return data.find( (element) => element.cca2.toLowerCase() === countryCode.toLowerCase());
    } else {
        throw new Error("Unable to fetch country");
    }
}

const ipinfoAccessToken = "1be888983f9de0";
const ipinfoEndpoint = "https://ipinfo.io/json";

const getLocation = async () => {
    const response = await fetch(`${ipinfoEndpoint}?token=${ipinfoAccessToken}`);
    if(response.status === 200) {
        return await response.json();
    } else {
        throw new Error("Unable to fetch location");
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation();
    return await getCountry(location.country);
}

export {
    getPuzzle as default
}
