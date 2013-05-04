$(document).ready(function() {
  // obtain keys from Parse.com dashboard
  
  var parseApplicationID = "nPohS4DhxXsHWMA9SuoQxFCrzxHJDJngATtJOA52";
  var parseJavaScriptKey="yWzHT4Ix9pfKokjyr59IiBmwP6DovyoIMoCpAEiQ";

  Parse.initialize(parseApplicationID, parseJavaScriptKey);
  var Test = Parse.Object.extend("Test");
  var test = new Test();
  test.save({
    name: "David",
    text: "hello"}, {
    success: function(obj) {
      // alternate would be 
      // alert("Parse.com object is saved");
      console.log("Prase.com object is saved " + obj);
    },
    error: function(obj) {
      console.log("Error has occured! Object not saved " + obj);
    }
  });
});