import * as dotenv from 'dotenv';
dotenv.config();

import app from './server';

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
