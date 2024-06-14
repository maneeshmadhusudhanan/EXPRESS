async function data1(url, timeout) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId); 
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return await response.json();
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error('Request timed out');
        } else {
            console.error('Error fetching data:', error);
        }
        throw error; 
    }
}


const url = 'https://jsonplaceholder.typicode.com/posts/1'; 

const timeout=1000;

// const timenow = Date.now(); 
// const timeout=parseInt(timenow);
// console.log("Timeout:",timeout);

data1(url, timeout)
    .then(data => console.log('Data:', data))
    .catch(error => console.error('Error:', error));

