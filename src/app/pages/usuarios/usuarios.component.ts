import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { ThemePalette } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PizzaPartyComponent } from 'src/app/utils/pizza-party/pizza-party.component';
import { SucessComponent } from 'src/app/utils/sucess/sucess.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  durationInSeconds = 2000;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  myControl = new FormControl();
  options: Squad[] = [
    {name: 'BMG'},
    {name: 'Funcesp'},
    {name: 'Metlife'}
  ];
  filteredOptions: Observable<Squad[]>;

  cargos: Cargo[] = [
    {value: 'analista', viewValue: 'Analista Desenvolvedor'},
    {value: 'engenheiro', viewValue: 'Engenheiro'},
    {value: 'suporte', viewValue: 'Analista de suporte'}
  ];

  constructor(private _formBuilder: FormBuilder,
              private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name) : this.options.slice())
    );
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  displayFn(user: Squad): string {
    return user && user.name ? user.name : '';
  }
  
  private _filter(name: string): Squad[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  Salvar() : void{
    this._snackBar.openFromComponent(SucessComponent, {
      duration: this.durationInSeconds,
      panelClass: ['green-snackbar'],
    });
  }

}

export interface Squad {
  name: string;
}

interface Cargo {
  value: string;
  viewValue: string;
}
