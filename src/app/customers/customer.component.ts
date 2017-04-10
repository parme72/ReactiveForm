import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

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
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            lastName: ['', [Validators.required, Validators.minLength(50)]],
            email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]],
            phone: '',
            notification: 'email',
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

    setNotification(notifyVia: string): void{
        const phoneConstrol = this.customerForm.get('phone');
        if(notifyVia === 'text'){
            phoneConstrol.setValidators(Validators.required);
        }
        else{
            phoneConstrol.clearValidators();
        }
        phoneConstrol.updateValueAndValidity();
    }
}
