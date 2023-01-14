import "dotenv/config"

import app from "./src/app";
import connectionDb from './src/config/config';

connectionDb.then(() => {
    console.log('Connected to database')
    app.listen(process.env.PORT as string | 3002, () => {
        console.log('Listening port ' + process.env.PORT)
    })
}).catch((er: any) => {
    console.log(er)
})

