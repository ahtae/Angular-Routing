import { Injectable } from '@angular/core';
import { Route, PreloadingStrategy, RouterModule } from '@angular/router';

import { Observable, of } from 'rxjs';

export class SelectiveStrategy implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    if (route.data && route.data['preload']) {
      return load();
    }

    return of(null);
  }
}
