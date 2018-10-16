import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Observable, of } from 'rxjs';
import { SimpleResponse } from '../../server/shared/interfaces/simple-response';
import { AppService } from './app.service';

describe('AppComponent', () => {
  class MockAppService {
    healthCheck(): Observable<Object> {
      const resp = {
        data: 'OK'
      };
      return of(resp);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [ { provide: AppService, useClass: MockAppService }]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'angular'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to angular-project-template!'
    );
  }));
});
