import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent {

  constructor(
    private formBuilder: FormBuilder) {
  }

  formulario: FormGroup = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(5)]],
    descricao: ['', [Validators.required, Validators.minLength(10)]],
  })

  cadastrar(){

  }
}