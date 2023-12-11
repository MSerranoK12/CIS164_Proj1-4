"use strict";

/*const isDate = (tour_date, datePattern) => {
    if (!datePattern.test(date)) { return false; }

    const dateParts = date.split("/");
    const month = parseInt( dateParts[0] );
    const day = parseInt( dateParts[1] );

    if ( month < 1 || month > 12 ) { return false; }
    if ( day > 31 ) { return false; }
    return true;
};*/

$(document).ready( () => {

	//move focus to first text box
	$("#tour_date").focus();

	// the handler for the click event of the submit button
	$("#reservation_form").submit( evt => {
		let isValid = true;

		// validate the arrival date entry
		/*const datePattern = /^[01]?\d\/[0-3]\d\/\d{4}$/;
		const tour_date = $("#tour_date").val();
		if(tour_date == "" || !isDate(tour_date, datePattern)) {
			isValid = false;
			$("#tour_date").next().text("Please entera valid date in MM/DD/YYYY format.");
		} else {
			$("#tour_date").next().text("");
		}
			 $("#tour_date").val(tour_date);*/
		const datePattern = /^[01]?\d\/[0-3]\d\/\d{4}$/;
		const tour_date = $("#tour_date").val().trim();
		if (tour_date == "") {
			$("#tour_date").next().text("This field is required.");
			isValid = false;
		} else if ( !datePattern.test(tour_date) ) {
            $("#tour_date").next().text("Use mm/dd/yyyy format.");
            isValid = false;
		} else {
			$("#tour_date").next().text("");
		}
        $("#tour_date").val(tour_date);



	 	//validate the vistor totals entry  
 		const visitors = $("#visitors").val().trim();
 		if (visitors == "") {
			$("#visitors").next().text("This field is required.");
			isValid = false;
 		} else {
			$("#visitors").next().text("");
 		}
 			$("#visitors").val(visitors);
	

		//validate the name entry  
 		const entryName = $("#entry_Name").val().trim();
 		if (entryName == "") {
			$("#entry_Name").next().text("This field is required.");
			isValid = false;
 		} else {
			$("#entry_Name").next().text("");
 		}
 			$("#entry_Name").val(entryName);

	     // validate email address
		 const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
		 const email = $("#email").val().trim();
		 if (email == "") { 
			 $("#email").next().text("This field is required.");
			 isValid = false;
		 } else if ( !emailPattern.test(email) ) {
			 $("#email").next().text("Must be a valid email address.");
			 isValid = false;
		} else {
			$("#email").next().text("");
	 	}
	 		$("#email").val(email);

 		// validate the phone entry
 		const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
 		const phone = $("#phone").val().trim();
 		if (phone == "") {
			$("#phone").next().text("This field is required.");
			isValid = false;
 		} else if ( !phonePattern.test(phone) ) {
			$("#phone").next().text("Use 999-999-9999 format.");
			isValid = false;
		} else {
			$("#phone").next().text("");
		}
			$("#phone").val(phone);
			 
 /* validate the check boxes	
 let checkedOptions = [];
 checkedOptions = $(":checkbox:checked");
 if (checkedOptions.length == 0) {
	 $("#net").next().text("Select at least one.");
	 isValid = false;
 } else {
	 $("#net").next().text("");
 }*/
				 
 		// prevent the default action of submitting the form if any entries are invalid 
 		if (isValid == false) {
	 		evt.preventDefault();
 		}

	});

}); // end ready

/* handle click on Reset Form button
$("#reset").click( () => {
 // clear text boxes
 $("#email").val("");
 $("#first_name").val("");*/

 /* reset span elements
 $("#email").next().text("*");
 $("#first_name").next().text("*");
 $("#email").focus(tour_date);
});*/

		
