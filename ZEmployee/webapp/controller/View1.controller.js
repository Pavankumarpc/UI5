sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller, MessageBox) {
	"use strict";
	return Controller.extend("NetZEmployee.controller.View1", {
		onSubmit: function() {
			var Fname = this.getView().byId("inputFname").getValue();
			var Lname = this.getView().byId("inputLname").getValue();
			var Email = this.getView().byId("input_Email").getValue();
			var Mobile = this.getView().byId("input_Mob").getValue();
			if (Fname === "" || Lname === "" || Email === "" || Mobile === "") {
				MessageBox.error("Please Enter all Mandatory fields");
			} else
			if (Fname !== "" || Lname !== "" || Email !== "" || Mobile !== "") {
				MessageBox.success("Saved successfully");
			}
		},
		onSubmit1: function() {
			var Fname = this.getView().byId("inputFname").getValue();
			var Lname = this.getView().byId("inputLname").getValue();
			var Mname = this.getView().byId("inputMname").getValue();
			var Email = this.getView().byId("input_Email").getValue();
			var Mobile = this.getView().byId("input_Mob").getValue();
			var Address = this.getView().byId("input_Addr").getValue();
			if (Fname !== "" || Mname !== "" || Lname !== "" || Email !== "" || Mobile !== "" || Address !== "") {
				this.getView().byId("inputFname").getValue();
				this.getView().byId("inputFname").setValue("");
				this.getView().byId("inputMname").getValue();
				this.getView().byId("inputMname").setValue("");
				this.getView().byId("inputLname").getValue();
				this.getView().byId("inputLname").setValue("");
				this.getView().byId("input_Email").getValue();
				this.getView().byId("input_Email").setValue("");
				this.getView().byId("input_Mob").getValue();
				this.getView().byId("input_Mob").setValue("");
				this.getView().byId("input_Addr").getValue();
				this.getView().byId("input_Addr").setValue("");
			}
		}
	});
});