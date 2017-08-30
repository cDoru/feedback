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

  $scope.greatJob = function () {
    dataApi.selection = 'Great Job!'
  }

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
    $scope.text = dataApi.situation;
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
    $scope.text = dataApi.observation;
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
    $scope.text = dataApi.feeling;
  }

  // Go back button
  $scope.goBack = function () {
    window.history.back();
  }


});

pretotypingApp.controller('Step4Ctrl', function ($scope, dataApi) {
  'use strict';

  // ------------------------------------------------------------------------------------------------------ //
  // The view name
  // ------------------------------------------------------------------------------------------------------ //

  $scope.pagetitle = 'Step 4';

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

pretotypingApp.controller('Step5Ctrl', function ($scope, dataApi) {
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
    var url = "https://kristofferandreasen.github.io/feedbackcard/#!/";

    // Situation variables
    if (dataApi.situation == undefined) {
      var situation = '';
      var situationstart = '';
    } else {
      var situation = dataApi.situation;
      var situationstart = "%0D%0A %0D%0ASituation:%0D%0A";
    }

    // Observation variables
    if (dataApi.observation == undefined) {
      var observationstart = '';
      var observation = '';
    } else {
      var observationstart = "%0D%0A %0D%0AObservation:%0D%0A";
      var observation = dataApi.observation;
    }

    // Feeling variables
    if (dataApi.feeling == undefined) {
      var feelingstart = '';
      var feeling = '';
    } else {
      var feelingstart = "%0D%0A %0D%0AFeeling:%0D%0A";
      var feeling = dataApi.feeling;
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
    $scope.email = "mailto:" + receiver + "?subject=" + subject + "&body=" + hey + name + doublebreak + starttext + situationstart + situation + observationstart + observation + feelingstart + feeling + feedbackstart + feedback + doublebreak + endtext + doublebreak + "Best regards," + "%0D%0A" + "Your colleague" + doublebreak + link + url;
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
