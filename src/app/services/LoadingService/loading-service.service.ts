import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private loadingSubject = new Subject<boolean>();
  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  show() {
    console.log('showing spinner');
    console.log(this.loading$);
    this.loadingSubject.next(true);
  }

  hide() {
    console.log('hiding spinner');
    console.log(this.loading$);
    this.loadingSubject.next(false);
  }
}