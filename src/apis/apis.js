export const url = "http://www.omdbapi.com/?";
export const api_key="apikey=b9bd48a6";

export const getAllVideos = async (value) => {
    try {
        const data = await fetch(url + api_key + `&s=${value === '' ? 'marvel' : value}`);
        const jsonData = await data.json();
        if (data.status === 200) {
            // console.log('data ', jsonData);
            return jsonData;
        }
    } catch (err) {
        return err;
    }
}