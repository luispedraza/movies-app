
export default class IMD_API {

    constructor() {
        this.API = "k_6t7g2is6";

    }

    search = async (expression) => {
        const lang = "en";
        expression = encodeURI(expression);
        const url = `https://imdb-api.com/${lang}/API/Search/${this.API}/${expression}`;
        console.log(url);
        const response = await fetch(url);
        console.log("response ", response);
        const {results} = await response.json();
        console.log(results);
        return results;
    }

    movieDetails = async (id) => {
        
    }

}