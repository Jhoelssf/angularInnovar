import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { RickandmortyApiService } from 'src/app/shared/rickandmorty.api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  backgroundImg: string = '';
  
  formGroup: FormGroup = this.fb.group({
    username: this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
  });

  get username(): FormControl {
    return this.formGroup.get('username') as FormControl;
  }
  
  constructor(
    private rickandmortyApi: RickandmortyApiService,
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.rickandmortyApi.getRandomCharacterImg()
    .subscribe((res) =>{
      if(res){
        this.backgroundImg = res;
        console.log(res)
      }
    })
  }
  ngOnDestroy(): void {
    console.log('login destroyed')
  }

  onSubmit(event: SubmitEvent): void{
    event.preventDefault();
    const sanitized = this.escapeHtml(this.username.value)

    this.authService.login(sanitized);
    if(this.authService.isLoggedIn()){
      this.openSnackBar(`Bienvenido ${sanitized}! :)`);
      this.router.navigate(['rickandmorty']);
    } else {
      this.username.setValue('');
      this.openSnackBar('Login incorrecto, ingrese usuario otra vez', 'ok');
    }
  }

  openSnackBar(message: string, action: string | undefined = undefined) {
    this._snackBar.open(message, action, {duration: 3000,});
  }

  escapeHtml(str: string) {
    const escapeMap: {[key: string]: string} = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '`': '&#x60;',
      '=': '&#x3D;'
    };
  
    return str.replace(/[&<>"'`=]/g, (char) => escapeMap[char]);
  }

}
