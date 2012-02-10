// ==========================================================================
// Project:   Ember - JavaScript Application Framework
// Copyright: ©2006-2011 Apple Inc. and contributors.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

var set = Ember.set, get = Ember.get;

module("Ember.View.create");

test("registers view in the global views hash using layerId for event targeted", function() {
  var v = Ember.View.create();
  equals(Ember.View.views[get(v, 'elementId')], v, 'registers view');
});

test("registers itself with a controller if the viewController property is set", function() {
  window.TestApp = {};
  TestApp.fooController = Ember.Object.create();

  var v = Ember.View.create({
    viewController: 'TestApp.fooController'
  });

  equal(TestApp.fooController.get('view'), v, "sets the view property of the controller");
});
