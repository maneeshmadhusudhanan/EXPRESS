async function fetchUrls(urls) {
    for (const url of urls) {
        const startTime = Date.now();
        try {
            const response = await fetch(url);
            const endTime = Date.now();
            const responseTime = endTime - startTime;
            // const response=await fetch(url);
                const result=await response.json();
                console.log(result);
            console.log(`URL: ${url}, Response Time: ${responseTime} ms`);
        } catch (error) {
            console.error(`Error fetching ${url}:`, error);
        }
    }
}


const urls = [
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/users/2'
];

fetchUrls(urls);

