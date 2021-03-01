import "./styles/style.scss";

// import "./operators/creation";
// import './operators/errorHandling';
// import './operators/multicasting';
// import "./operators/filtering";
// import './operators/transformation';
// import './operators/ultility';

import { Observable, asyncScheduler } from "rxjs";
import { observeOn } from "rxjs/operators";
import { stdSub, createClickObs, delay } from "./functions";

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

// Scheduler: quy định phong cách chạy khi subscriber đăng ký theo dõi obs
// asyncScheduler : bất đồng bộ
const observable = new Observable((observer) => {
  for (let i = 0; i < 100; i++) {
    observer.next(i);
  }
  observer.complete();
}).pipe(observeOn(asyncScheduler)); // mấu cmn chốt ở đây

console.log("just before subscribe");
observable.subscribe({
  // chạy async ngay, ko cần phải đợi subscribe xong rồi mới in "just after subscribe"
  next(x) {
    console.log("got value " + x);
  },
  error(err) {
    console.error("something wrong occurred: " + err);
  },
  complete() {
    console.log("done");
  },
});
console.log("just after subscribe");

// null (default): mặc định, tuần tự (sync)
// queueScheduler: tuần tự theo hàng đợi First In First Out (FIFO)
// asapScheduler:
// animationFrameScheduler: dùng khi muốn animation smooth hơn
