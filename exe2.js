async function twonumberdelay(numbers) {
    const Numbers = [];
    for (const num of numbers) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        Numbers.push(num * 2);
    }
    return Numbers;
}


const numbers = [11, 22, 33, 44, 55];
console.log("just wait we are Processing numbers...");
twonumberdelay(numbers)
    .then(Numbers => {
        console.log("Doubled numbers:", Numbers);
    })
    .catch(error => {
        console.error("please correct there is an error occurred:", error);
    });

