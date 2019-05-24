import { PersonService } from './../AddPerson/person.service';
import { Person } from './../AddPerson/person';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent  {
  constructor(private personService: PersonService) { }
	personForm = new FormGroup({
	   name: new FormControl(),
	   city: new FormControl(),
	   mobile: new FormControl()
	});	
	onFormSubmit() {
		console.log("error1")
		let person = this.personForm.value;
		console.log("error2")
	   this.personService.addPerson(person)
	      .subscribe(data => {
			console.log(data);
			console.log("error3")
		}
	      );
	}

}
