import { Component } from '@angular/core';

@Component({
    selector: 'gs-form',
    templateUrl: './app/form/form.component.html'

})
export class FormComponent {
	vaildate( username ){
		console.log(username);
	}
}
