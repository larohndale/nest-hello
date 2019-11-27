import { AppService } from './app.service';
import { AppController } from './app.controller';

const appService = new AppService();
const appController = new AppController(appService);
const hello = appController.getHello();

console.log(hello);
