import express from "express";
import cookieparser from "cookie-parser";
import cors from "cors";


const app = express();

app.use(cookieparser());

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true
}));

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieparser());


export {app};