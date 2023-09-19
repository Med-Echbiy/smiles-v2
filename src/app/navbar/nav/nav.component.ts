import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isUserIn = false;
  user = { email: '', username: '' };
  constructor(private auth: AuthenticationService, private http: HttpClient) {
    this.auth.getUser().subscribe((value) => (this.user = value.object.user));
    this.auth
      .getUserLogged()
      .subscribe((value) => (this.isUserIn = value.userLogged));
  }

  ngOnInit(): void {
    this.auth.getUser();
  }

  sidebar = false;
  dropdown = false;
  toggleDropDown() {
    this.dropdown = !this.dropdown;
  }
  toggleSideBar = () => {
    this.sidebar = !this.sidebar;
  };
  signInWithGoogle() {}
  logout() {
    this.auth.logOut();
  }
}
