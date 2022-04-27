import axios from "axios";

export default class IMD_API {
    static async search (expression) {
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

    static async movieDetails (movieID) {
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