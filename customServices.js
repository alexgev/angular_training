var module = angular.module('customServices', []);

var baseLogger = function() {
    this.messageCount = 0;
    this.log = function(msg) {
        console.log('Type ' + this.msgType + ' LOG #' + this.messageCount++ + ', message = ' + msg);
    }
}

var debugLogger = function() {};
debugLogger.prototype = new baseLogger();
debugLogger.prototype.msgType = 'Debug';

var errorLogger = function() {};
errorLogger.prototype = new baseLogger();
errorLogger.prototype.msgType = 'Error';

module.service('logService', debugLogger)
    .service('errorService', errorLogger);


    




// angular.module('customServices', [])
//     .factory('logService', function() {
//         var messageCount = 0;
//         return {
//             log: function(msg) {
//                 console.log('LOG #' + messageCount++ + ", message = " + msg);
//             }
//         }
//     })