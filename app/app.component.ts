import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';


@Component({
    selector: 'my-app',
    template: 	`<h1>This is a demo App</h1>
    			<gs-form></gs-form>
    			`,
    directives: [FormComponent]


})
export class AppComponent { }
