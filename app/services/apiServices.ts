const apiService = {
    get: async function (url: string): Promise<any> {
        console.log('get', url);

        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {  // Cambié `URL` por `url`
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then((json) => {
                    console.log('Response:', json);
                    resolve(json);
                })
                .catch((error) => {  // Corregí el manejo del error
                    console.error('Fetch error:', error);
                    reject(error);  // Usa `reject` en lugar de `rejects`
                });
        });
    }
};

export default apiService;
