import { Template } from 'meteor/templating';

import './main.html';

var largeString = undefined;
var count = 0;

Template.Test.events({
	"click #allocate-test"(event, instance){
		if(largeString === undefined){
			count += 1;
			largeString = Array(count * 1024 * 1024 + 1).join("0123456789ABCDEF");
			console.log(largeString.length);
		} else {
			console.log("Letting go of largeString");
			largeString = undefined;
		}

		$("#notify-test").off("click");

		if(largeString !== undefined){
			var someObject = {largeString: largeString};
			$("#notify-test").on("click", function(){
				console.log(someObject.largeString.length);
			});
		}
	},
});
