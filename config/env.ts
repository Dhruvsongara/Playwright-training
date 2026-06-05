import dotenv from "dotenv";
// import {env} from "node:process"

const env=process.env.TEST_ENV || 'qa';

dotenv.config({
    path:`.env.${env}`
})

export const ENV = {baseUrl:process.env.BASE_URL!};
