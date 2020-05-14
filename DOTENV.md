## DOTENV Instructions

# Initial Setup
[x]-Obtain API Key from API for later use.
[x]-Update `.gitignore` with `.env` under `# misc`
[x]-Create new file named `.env` in Root directory.
[x]-Add GIPHY_API_KEY=YOUR_KEY_HERE to `.env`
[x]-Install dotenv using: `npm install dotenv`
[x]-In `server.js`, add the following:
    ```const dotenv=require('dotenv');```
    ```dotenv.config();```
[x]-To check if API has been added, use:
    ```console.log( process.env.GIPHY_API_KEY )```

# Create GET call to GIPHY in `server.js`
[ ]-Create a AXIOS call with the following:
    ```axios.get( 'http://api.giphy.com/v1/gifs/trending?api_key=' + process.env.GIPHY_API_KEY + '&rating=pg' )
    .then ((response)=>{res.send(response.data)
    }).catch((error)=>{console.log(error); res.send(500)})```
[ ]-You now should see your API request from the server at `https://localhost:5000/GET_URL/`