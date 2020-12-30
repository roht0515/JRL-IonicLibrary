import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication-service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

}
