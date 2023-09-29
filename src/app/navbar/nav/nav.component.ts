import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  profilePics = [
    'assets/profile/0.jpeg',
    'assets/profile/1.jpeg',
    'assets/profile/2.jpeg',
    'assets/profile/3.jpeg',
    'assets/profile/4.jpeg',
    'assets/profile/5.jpeg',
  ];
  isUserIn = false;
  user = { email: '', username: '', pic: 0 };
  constructor(private auth: AuthenticationService) {
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
