// Empty constructor
function LuxandPlugin() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
LuxandPlugin.prototype.show = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'LuxandPlugin', 'show', [options]);
}

// Installation constructor that binds ToastyPlugin to window
LuxandPlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.luxandPlugin = new LuxandPlugin();
  return window.plugins.luxandPlugin;
};
cordova.addConstructor(LuxandPlugin.install);
