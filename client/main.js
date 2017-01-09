import { Template } from 'meteor/templating';

import './main.html';

var largeString = undefined;

Template.Test.events({
	"click #allocate-test"(event, instance){
		if(largeString === undefined){
			largeString = Array(4 * 1024 * 1024 + 1).join("0123456789ABCDEF"); // 64M characters
			console.log(largeString.length);
		} else {
			console.log("Letting go of largeString");
			largeString = undefined;
		}
	},
});
