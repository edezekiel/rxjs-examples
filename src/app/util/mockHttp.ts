import { Observable, of, interval, map, delay } from 'rxjs';

export const simulateHttp = (val: any, ms: number): Observable<any> => {
  return of(val).pipe(delay(ms));
};

export const simulateFirebase = (val: any, ms: number) => {
  return interval(ms).pipe(map((index) => val + ' ' + index));
};
