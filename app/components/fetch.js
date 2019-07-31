export async function getData(url) {
    return await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'cache-control': 'no-cache'
        }
    }).then(async (response) => {
        // ths.setState({ movies: response.results })
        var data = [];
        var promise = response.json();
        await promise.then(x => data = x);

        return data;
    })
}