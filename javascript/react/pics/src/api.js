import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos",
        {
            headers: {
                Authorization: "Client-ID ymsJcuMu3JklO55L4QGGsYWjkIH9t-qH3czdQILO-LQ"
            },
            params: {
                query: term
            }
        }
    );
    return response.data.results;
};

export default searchImages;
