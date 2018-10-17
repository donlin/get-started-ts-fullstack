import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { SimpleResponse } from '../../server/shared/interfaces/simple-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular';
  menuHidden = true;
  result;

  constructor(private _appService: AppService) {}

  ngOnInit() {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  check() {
    this._appService.healthCheck().subscribe(
      data => {
        const res: SimpleResponse = data;
        this.result = res.data;
      },
      err => {
        console.error(err);
        if (err.status) {
          this.result = `error: ${err.statusText} (with status ${err.status})`;
        } else {
          this.result = 'unknown error';
        }
      },
      () => console.log('health check was done')
    );
  }
}
