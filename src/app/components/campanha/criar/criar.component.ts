import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CampanhaRequest } from 'src/app/model/request/campanha-request';
import { CampanhaService } from 'src/app/service/campanha.service';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent {

  constructor(private formBuilder: FormBuilder, private service: CampanhaService, private notificacao: ToastrService) {
  }

  formulario: FormGroup = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(5)]],
    descricao: ['', [Validators.required, Validators.minLength(10)]],
    dataInicio: ['', [Validators.required, Validators.minLength(10)]],
    dataFim: ['', [Validators.required, Validators.minLength(10)]],
    quantidadeRifas: ['', [Validators.required, Validators.minLength(10)]],
  })

  cadastrar() {
    this.service.cadastrar(this.criarCampanha()).subscribe({
      next: () => {
        this.notificacao.success('Campanha cadastrada com sucesso!')
      }, error: (e) => {
        console.log(e)
      }
    })
  }

  criarCampanha(): CampanhaRequest {
    var form = this.formulario.value;
    console.log(form)
    return new CampanhaRequest(form.nome, form.descricao, form.dataInicio, form.dataFim, form.quantidadeRifas);
  }
}