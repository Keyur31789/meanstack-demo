'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('meanTutorialApp.util', [])
  .factory('Util', UtilService)
  .name;
