import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {getDataFromService,loadDataSuccess,loadDataFailure} from './app.actions';
import { dataHttpService, } from './app.httpservice';
import dropdown from './dropdown/dropdown.model';

@Injectable()
export class ToGetData {
  constructor(private dataService: dataHttpService, private action$: Actions) {}

  GetData$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(getDataFromService),
      mergeMap(action =>
        this.dataService.getData(action.data).pipe(
          map((data: any[]) => {
            return loadDataSuccess({ data: data });
          }),
          catchError((error: Error) => {
            return of(loadDataFailure(error));
          })
        )
      )
    )
  );
}
