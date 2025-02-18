import express from "express";

const servidor = express();

servidor.use(express.static("./estaticos"));

servidor.listen(4000);

