import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController'

import authMiddlaware from './app/middlares/auth';

const routes = new Router();

routes.get('/');