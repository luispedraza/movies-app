import axios from "axios";

export default class IMD_API {
    search = async (expression) => {
        const options = {
            method: "GET",
            url: "http://localhost:8080/search",
            headers: {
                query: expression,
            }
        }
        const response = await axios.request(options);        
        return response.data.results;
    }

    movieDetails = async (movieID) => {
        const options = {
            method: "GET",
            url: "http://localhost:8080/details",
            headers: {
                id: movieID,
            }
        }
        const response = await axios.request(options);
        return response.data;
    }
}