import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    username: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required])
  });

  get username(): FormControl {
    return this.formGroup.get('username') as FormControl;
  }
  
  get password(): FormControl {
    return this.formGroup.get('password') as FormControl;
  }

  constructor(
    private rickandmortyApi: RickandmortyApiService,
    private authService: AuthService,
    private fb: FormBuilder
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
    console.log('submit', this.formGroup.value);
  }

}
