import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FORM_ERRORS } from 'src/assets/mocked/form-errors';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  contactForm: FormGroup;
  serviceID = environment.emailjs.serviceId;
  templateID = environment.emailjs.templateId;
  publicKey = environment.emailjs.publicKey;

  constructor(private fb: FormBuilder) {}

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

  formSubmitted = false;
  formValidated = false;

  ngOnInit() {
    const saved = sessionStorage.getItem('contactFormData');
    const wasSent = sessionStorage.getItem('contactFormSent');
    const nameData = saved ? JSON.parse(saved).name : '';
    const emailData = saved ? JSON.parse(saved).email : '';
    const messageData = saved ? JSON.parse(saved).message : '';

    this.formValidated = wasSent === 'true';

    this.contactForm = this.fb.group({
      name: [nameData, [Validators.required, Validators.minLength(2)]],
      email: [emailData, [Validators.required, Validators.email]],
      message: [messageData, [Validators.required, Validators.minLength(10)]],
    });

    this.contactForm.valueChanges.subscribe((value) => {
      if (!this.formSubmitted) {
        sessionStorage.setItem('contactFormData', JSON.stringify(value));
      }
    });
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.contactForm.get(controlName);
    if (control && control.touched && control.errors) {
      const errors = control.errors;
      const errorKey = Object.keys(errors)[0];
      return FORM_ERRORS[controlName]?.[errorKey] || null;
    }
    return null;
  }

  getAriaInvalid(controlName: string): string | null {
    const control = this.contactForm.get(controlName);

    return control && control.invalid && (this.formSubmitted || !!control.value) ? 'true' : null;
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.contactForm.valid) {
      emailjs
        .send(
          this.serviceID,
          this.templateID,
          {
            name: this.contactForm.value.name,
            email: this.contactForm.value.email,
            message: this.contactForm.value.message,
          },
          this.publicKey
        )
        .then(
          (response: EmailJSResponseStatus) => {
            this.formValidated = true;
            sessionStorage.setItem('contactFormSent', 'true');
            sessionStorage.removeItem('contactFormData');
            this.contactForm.reset();
          },
          (error) => {
            console.error('Error while sending:', error);
          }
        );
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
