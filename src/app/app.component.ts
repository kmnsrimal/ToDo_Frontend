import { Component } from '@angular/core';
import { UserService } from '../app/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private service :UserService) {
  }

  ToDo:any = [];

  // users: any[] = [];
  // userCount = 0;

  // destroy$: Subject<boolean> = new Subject<boolean>();

  next()
  {
    console.log("next");
    // this.service.default();

    this.service.default().subscribe(res => {
      console.log(res)
      this.ToDo=res;
    });

  }
  // next() {
  //   console.log("getAllUsers");
  //   this.service.default().pipe(takeUntil(this.destroy$)).subscribe((users: any[]) => {
	// 	this.userCount = users.length;
  //       this.users = users;
  //   });
  // }
}
