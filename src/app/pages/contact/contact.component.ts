import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    contactForm!: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.contactForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            message: ['', [Validators.required, Validators.minLength(10)]]
        });
    }

    ngOnInit(): void {}

    enviar(event: Event) {
        event.preventDefault();
        if (this.contactForm.valid) {
            console.log(this.contactForm.value);
        }
    }

    hasErrors(field: string, typeError: string) {
        return this.contactForm.get(field)?.hasError(typeError) && this.contactForm.get(field)?.touched;
    }
}
