import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/customer.component.html'
})
export class CustomerComponent implements OnInit {
    customer: Customer = new Customer();
    customerForm: FormGroup;

    constructor(private fb: FormBuilder) {

    }

    ngOnInit(): void {
        this.customerForm = this.fb.group({
            firstName: '',
            lastName: '',
            email: '',
            sendCatalog: true
        });
    }

    populateTestData(): void {
        this.customerForm.patchValue({
            firstName: "Jack",
            lastName: "Huge",
            //email: "test@server.com",
            sendCatalog : true
        });
    }

    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }
}
