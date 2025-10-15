/*global QUnit*/

sap.ui.define([
	"jsvalidation/controller/validation.controller"
], function (Controller) {
	"use strict";

	QUnit.module("validation Controller");

	QUnit.test("I should test the validation controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
