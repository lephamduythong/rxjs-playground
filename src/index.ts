import "./styles/style.scss";

// import "./operators/creation";
// import './operators/errorHandling';
// import './operators/multicasting';
// import "./operators/filtering";
// import './operators/transformation';
import './operators/ultility';

import { ConnectableObservable, Observable, Subject } from "rxjs";
import { audit, auditTime, catchError, debounceTime, map, take } from "rxjs/operators";
import { stdSub, createClickObs, delay } from "./functions";
import { fromEvent } from "rxjs/observable/fromEvent";


export const btn1 = document.getElementById("btn1") as HTMLButtonElement;
export const btn2 = document.getElementById("btn2") as HTMLButtonElement;
export const btn3 = document.getElementById("btn3") as HTMLButtonElement;
export const btn4 = document.getElementById("btn4") as HTMLButtonElement;
export const btn5 = document.getElementById("btn5") as HTMLButtonElement;
// -------- Basic action part -----------

// Observable creation and Pipe
// export const obs1$ = new Observable((observer) => {
//   (async () => {
//     await delay(500);
//     observer.next("1 - 1");
//     await delay(500);
//     observer.next("1 - 2");
//     await delay(500);
//     observer.next("1 - 3");
//     await delay(500);
//     observer.next("1 - 4");
//     await delay(500);
//     observer.complete();
//   })();
// }).pipe(
//   map((value) => {
//     console.log(value);
//     return value;
//   }),
//   take(2),
//   take(3)
// );
// stdSub(obs1$);

// Subject: một Observable đặc biệt có khả năng .next(value) .complete() .error(message) ngay ở bên ngoài
/* export const subject = new Subject();
stdSub(subject);
subject.next('clgt');
subject.next('wtf');
subject.error('error cmnr');
subject.complete();
subject.next('nothing') // ko in ra do đã .complete() */

// Scheduler
