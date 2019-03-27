import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MessageService } from '../message.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitted = false;

  constructor(
    private _messageService: MessageService,
    private _fb: FormBuilder
  ) {}

  get formControls() { return this.contactForm.controls; }
  
  onSubmit() {
    this.isSubmitted = true;
    const form = this.contactForm;

    if (form.invalid) {
      return;
    }

    this._messageService.sendMessage(form.value).subscribe(() => {
        Swal.fire({
          type: 'success',
          title: '',
          text: 'Mensagem enviada com sucesso!',
          showConfirmButton: true
        });
      });

    form.reset();
  }

  ngOnInit() {
    this.contactForm = this._fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cel: ['', [Validators.required]],
      subject: ['1', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }
}
