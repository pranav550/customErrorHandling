import { CountryService } from './../AddCountry/country.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Country} from "../AddCountry/country";
@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent  {
  constructor(private countryService: CountryService) { }
	countryForm = new FormGroup({
	   name: new FormControl(),
	   capital: new FormControl(),
	   currency: new FormControl()
	});	
	onFormSubmit() {
		console.log("error1");
		 let country = this.countryForm.value;
		 console.log("error2");
	   this.countryService.addCountry(country)
	      .subscribe(data => {
				console.log(data);
				console.log("error3")
		  },
		  err => {
				console.log("error4")
		    throw err;
		  }
	      );
	}
}
