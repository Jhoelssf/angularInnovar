import { Component, OnInit } from "@angular/core";
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from "@angular/forms";
import { Router, RouterLink } from "@angular/router";

interface User {
    username: string;
    password: string;
}

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
    user: User = {
        username: "admin",
        password: "123456",
    };

    loginForm: FormGroup = new FormGroup({});

    constructor(private router: Router, private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ["admin", Validators.required],
            password: ["123456", Validators.required],
        });
    }

    onSubmit() {
        if (this.loginForm.invalid) {
            return;
        } else {
            if (
                this.loginForm.value.username === this.user.username &&
                this.loginForm.value.password === this.user.password
            ) {
                // go to home page
                this.router.navigate(["pokeapp/home"]);
                alert("Login success");
            } else {
                alert("Login failed");
            }
        }
    }
}
