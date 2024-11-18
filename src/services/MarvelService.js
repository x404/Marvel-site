class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = '058d8f8c7eae8c8f016bb7dad9a8e610';
    
    
    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(res.status);
        }

        return await res.json();
    }
    
    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210&apikey=${this._apiKey}`);
    }

    getCharacter = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?apikey=${this._apiKey}`);
    }
}

export default MarvelService;