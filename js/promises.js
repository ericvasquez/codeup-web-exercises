
const wait = ms => new Promise((resolve, reject) => setTimeout(resolve, ms));

wait(1000).then(() => console.log('You\'ll see this after 1 second'));


wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



const API_TOKEN = 'e0100948d722658bd993f764e5bc018422fe26b1';

const lastCommit = {
    headers: {'Authorization': `token ${API_TOKEN}`}
};

fetch('https://api.github.com/repos/ericvasquez/codeup-web-exercises/commits', lastCommit)
    .then(function (response) {
        if(response.status !== 200){
            return Promise.reject(response);
        }
        return Promise.resolve(response);
    })

.then(function (response) {
    const jsonResponse = response.json();
    return jsonResponse;
})
    .then(function (data) {

        console.log("The last commit was made: " + data[0].commit.author.date);
    });
