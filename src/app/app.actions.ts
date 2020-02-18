import { createAction, props } from '@ngrx/store';



export const selectRegion = createAction(
  '[Select Region] selectRegion',
  props<{ data: string }>()
);

export const selectCountry = createAction(
  '[Select Region] selectCountry',
  props<{ data: string }>()
);

export const getDataFromService =createAction(
  '[Data] - Get Data from API',
  props<{ data: string }>()
);

export const loadDataSuccess = createAction(
  '[data] Success',
  props<{ data: any }>()
);

export const loadDataFailure = createAction('[data] - Error', props<Error>());

export const setDetails = createAction(
  '[data] setDetails',
  props<{ data: any }>()
);
