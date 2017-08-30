/*global angular*/
angular.module('pretotypingApp.controllers', []);

pretotypingApp.controller('HomeCtrl', function ($scope, dataApi) {
  'use strict';

  // ------------------------------------------------------------------------------------------------------ //
  // Create a name for the view
  // ------------------------------------------------------------------------------------------------------ //

  $scope.pagetitle = 'Home';

  // ------------------------------------------------------------------------------------------------------ //
  // Create a selection variable and store the user selection for choice of feedback
  // ------------------------------------------------------------------------------------------------------ //

  $scope.developSkills = function () {
    dataApi.selection = 'Feedback from colleague';
  }

  $scope.goBack = function () {
    window.history.back();
  }

  // End of controller
});

pretotypingApp.controller('ReceiverCtrl', function ($scope, dataApi) {
  'use strict';

  // ------------------------------------------------------------------------------------------------------ //
  // The view name
  // ------------------------------------------------------------------------------------------------------ //

  $scope.pagetitle = 'Receiver';

  // Import the service
  $scope.data = dataApi;

  // Go back button
  $scope.goBack = function () {
    window.history.back();
  }


});


pretotypingApp.controller('Step1Ctrl', function ($scope, dataApi) {
  'use strict';

  // ------------------------------------------------------------------------------------------------------ //
  // The view name
  // ------------------------------------------------------------------------------------------------------ //

  $scope.pagetitle = 'Step 1';

  // ------------------------------------------------------------------------------------------------------ //
  // Pass data to factory
  // ------------------------------------------------------------------------------------------------------ //

  $scope.data = dataApi;

  // Initialize empty string
  $scope.text = '';

  // Get textarea length
  $scope.change = function () {
    $scope.text = dataApi.praise;
  }

  // Go back button
  $scope.goBack = function () {
    window.history.back();
  }


});

pretotypingApp.controller('Step2Ctrl', function ($scope, dataApi) {
  'use strict';

  // ------------------------------------------------------------------------------------------------------ //
  // The view name
  // ------------------------------------------------------------------------------------------------------ //

  $scope.pagetitle = 'Step 2';

  // ------------------------------------------------------------------------------------------------------ //
  // Pass data to factory
  // ------------------------------------------------------------------------------------------------------ //

  $scope.data = dataApi;

  // Initialize empty string
  $scope.text = '';

  // Get textarea length
  $scope.change = function () {
    $scope.text = dataApi.suggestions;
  }

  // Go back button
  $scope.goBack = function () {
    window.history.back();
  }


});

pretotypingApp.controller('Step3Ctrl', function ($scope, dataApi) {
  'use strict';

  // ------------------------------------------------------------------------------------------------------ //
  // The view name
  // ------------------------------------------------------------------------------------------------------ //

  $scope.pagetitle = 'Step 3';

  // ------------------------------------------------------------------------------------------------------ //
  // Pass data to factory
  // ------------------------------------------------------------------------------------------------------ //

  $scope.data = dataApi;

  // Initialize empty string
  $scope.text = '';

  // Get textarea length
  $scope.change = function () {
    $scope.text = dataApi.feedback;
  }

  // Go back button
  $scope.goBack = function () {
    window.history.back();
  }


});

pretotypingApp.controller('FinishCtrl', function ($scope, dataApi) {
  'use strict';

  // ------------------------------------------------------------------------------------------------------ //
  // Variables
  // ------------------------------------------------------------------------------------------------------ //

  // The variable to hold the email
  $scope.email = '';

  // ------------------------------------------------------------------------------------------------------ //
  // Create the email
  // ------------------------------------------------------------------------------------------------------ //

  $scope.link = function () {

    // Receiver variables
    if (dataApi.receiver == undefined) {
      var receiver = '';
    } else {
      var receiver = dataApi.email;
    }

    // Name variables
    if (dataApi.name == undefined) {
      var name = '';
    } else {
      var name = dataApi.name + "!";
    }

    // Selection variables
    if (dataApi.selection == undefined) {
      var subject = '';
    } else {
      var subject = dataApi.selection;
    }

    // Line breaks
    var linebreak = "%0D%0A";
    var doublebreak = "%0D%0A %0D%0A";

    // Const text
    var hey = "Hey ";
    var starttext = "You have received feedback from a colleague.";
    var endtext = "I hope we can talk about the feedback soon.";
    var link = "Create your own feedback on: ";
    var url = "https://kristofferandreasen.github.io/feedback/";

    // Praise variables
    if (dataApi.praise == undefined) {
      var praise = '';
      var praisestart = '';
    } else {
      var praise = dataApi.praise;
      var praisestart = "%0D%0A %0D%0APraise:%0D%0A";
    }

    // Suggestions variables
    if (dataApi.suggestions == undefined) {
      var suggestionsstart = '';
      var suggestions = '';
    } else {
      var suggestionsstart = "%0D%0A %0D%0ASuggestions:%0D%0A";
      var suggestions = dataApi.suggestions;
    }

    // Feedback variables
    if (dataApi.feedback == undefined) {
      var feedbackstart = '';
      var feedback = '';
    } else {
      var feedbackstart = "%0D%0A %0D%0AFeedback:%0D%0A";
      var feedback = dataApi.feedback;
    }

    // The concatenated string email
    $scope.email = "mailto:" + receiver + "?subject=" + subject + "&body=" + hey + name + doublebreak + starttext + praisestart + praise + suggestionsstart + suggestions + feedbackstart + feedback + doublebreak + endtext + doublebreak + "Best regards," + "%0D%0A" + "Your colleague" + doublebreak + link + url;
  };

  // Go back button
  $scope.goBack = function () {
    window.history.back();
  }

});

pretotypingApp.controller('InfoCtrl', function ($scope, dataApi) {
  'use strict';

  // ------------------------------------------------------------------------------------------------------ //
  // The view name
  // ------------------------------------------------------------------------------------------------------ //

  $scope.pagetitle = 'Info';

  // Go back button
  $scope.goBack = function () {
    window.history.back();
  }


});
