import angular from "angular";
import { MainController } from './controllers/main.controller';

angular
  .module('app', [])
  .controller('MainController', MainController);