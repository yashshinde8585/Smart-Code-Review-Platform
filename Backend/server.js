require('dotenv').config();
const app = require('./src/app.js');

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
