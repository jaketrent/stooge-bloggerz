'use strict';

angular.module('stoogeBloggerzApp').service('Author', function Author() {
  return {
    getAuthors: function () {
      return [
        { name: 'Larry' },
        { name: 'Curly' },
        { name: 'Moe' }
      ];
    }
  };
});
