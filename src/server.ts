import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../dist/server/main.bundle');
import { ngExpressEngine } from '@nguniversal/express-engine';
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

import { ApplicationModule } from './modules/app/app.module';
import { AppServerModule } from '../client/src/main.server';

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';

const server = express();
const PORT = parseInt(process.env.PORT) || 4000;
const SRC_FOLDER = join(process.cwd(), 'client', 'src');
const DIST_FOLDER = join(process.cwd(), 'dist');
const BROWSER_FOLDER = join(DIST_FOLDER, 'browser');
const INDEX_PATH = join(SRC_FOLDER, 'index.html');

enableProdMode();

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule, server);
  app.use(bodyParser.json());
  
  // Faster server renders w/ Prod mode (dev mode never needed)
  
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
      provideModuleMap(LAZY_MODULE_MAP)
    ]
  }));
  server.set('view engine', 'html');
  server.set('views', BROWSER_FOLDER);

  // Server static files from /browser
  server.get('/app/*.*', express.static(BROWSER_FOLDER, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('/app/*', (req, res) => {
    res.render(INDEX_PATH, { req });
  });

  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api', app, document);


  // // Start up the Node server
  await app.listen(PORT);
}
bootstrap();
