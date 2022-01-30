import { URLController } from 'controller/URLControlelr';
import express, { Request, Response } from 'express';

const api = express();
api.use(express.json());

const urlControlle = new URLController();

api.post('/shorten', urlControlle.shorten);
api.get('/:hash', urlControlle.redirect);

api.listen(3535, () => console.log('Api run port http://localhost:3535'));