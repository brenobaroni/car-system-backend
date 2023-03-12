const app = require('./app');

//Config environment variables in .env file
require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3333;

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));

