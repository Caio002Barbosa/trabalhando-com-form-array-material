import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {

  form = this.fb.group({
    nome:       ['', Validators.required],
    email:      ['', Validators.email],
    endereco: this.fb.group({
      estado:      [''],
      cidade:      [''],
      bairro:      [''],
      logradouro:  [''],
      numero:      ['']
    }),
    contatos:      this.fb.array([]),
    colaboradores: this.fb.array([]),
  });

  contatos      = this.form.get('contatos') as FormArray;
  colaboradores = this.form.get('colaboradores') as FormArray;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() { }

  addContatos() {
    this.contatos.push(
      this.fb.group({
        tel: ['']
      })
    );
  }

  addColaborador() {
    this.colaboradores.push(
      this.fb.group({
        nomeColaborador: [''],
        departamento: [''],
        contatosColaboradores: this.fb.array([])
      })
    );
  }

  addContatosColaboradores(control: FormArray) {
    control.push(
      this.fb.group({
        tel: ['']
      })
    );
  }

  getContatoColaborador(form) {
    return form.get('contatosColaboradores').controls;
  }

  removeDoFormArray(controls: FormArray, index: number) {
    controls.removeAt(index);
  }
}
