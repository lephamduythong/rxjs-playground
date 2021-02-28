import "./styles/style.scss";
import "./operators/creation.ts";

import { ConnectableObservable, Observable, Subject } from "rxjs";
import { audit, auditTime, catchError, map, take } from "rxjs/operators";
import { stdSub, createClickObs, delay } from './functions'

const btn1 = document.getElementById("btn1") as HTMLButtonElement;
const btn2 = document.getElementById("btn2") as HTMLButtonElement;
const btn3 = document.getElementById("btn3") as HTMLButtonElement;
const btn4 = document.getElementById("btn4") as HTMLButtonElement;
const btn5 = document.getElementById("btn5") as HTMLButtonElement;

// -------- Basic action part -----------

// Observable creation and Pipe
// const obs1$ = new Observable((observer) => {
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
/* const subject = new Subject();
stdSub(subject);
subject.next('clgt');
subject.next('wtf');
subject.error('error cmnr');
subject.complete();
subject.next('nothing') // ko in ra do đã .complete() */

// Hot and Cold Observable
class Producer {
  private _id: string;
  private _name: string;
  constructor(name: string) {
    this._name = name;
    this._id = Math.random().toString(36).substring(7);
  }
  daoNhac = (): string => {
    return this._name + " đạo nhạc thành công: " + this._id;
  };
}

// Cold: chỉ dùng tài nguyên riêng rẻ
// Ex cold 1:
/* const coldObs1$ = new Observable((observer) => {
  let coldProducer = new Producer("Son Tung MTP cold");
  // have observer listen to producer here
  observer.next(coldProducer.daoNhac());
});
const coldObs2$ = new Observable((observer) => {
  let coldProducer = new Producer("Son Tung MTP cold");
  // have observer listen to producer here
  observer.next(coldProducer.daoNhac());
});
stdSub(coldObs1$);
stdSub(coldObs2$); */

// Ex cold 2: giá trị index interval sẽ dc in tăng dần riêng rẻ ở mỗi lượt sub đến sau
/* const obs1$ = Observable.interval(1500);
(async function () {
  stdSub(obs1$, "sub 1");
  await delay(1000);
  stdSub(obs1$, "sub 2");
  await delay(1000);
  stdSub(obs1$, "sub 3");
})(); */

// Hot : chia sẻ, dùng chung tài nguyên, khi .next
// Ex hot 1:
/* let hotProducer = new Producer("Thong hot");
const hotObs1$ = new Observable((observer) => {
  // have observer listen to producer here
  observer.next(hotProducer.daoNhac());
});
const hotObs2$ = new Observable((observer) => {
  // have observer listen to producer here
  observer.next(hotProducer.daoNhac());
});
stdSub(hotObs1$);
stdSub(hotObs2$); */

// Ex hot 2: giá trị index interval sẽ dc sử dụng chung để in ra (share)
/* const obs1$ = Observable.interval(1500);
const shared$ = obs1$.share();
(async function () {
  stdSub(shared$, "sub 1");
  await delay(1000);
  stdSub(shared$, "sub 2");
  await delay(1000);
  stdSub(shared$, "sub 3");
})(); */

// Ex hot 3: tương tự như share, với publish thì subscriber chỉ fire khi dc connect với obs
/* const obs1$ = Observable.interval(1500).publish();
// Ko chạy ngay, chỉ theo dõi mà ko get dữ liệu về
stdSub(obs1$, "sub 1");
btn1.addEventListener("click", async () => {
  // Click "btn 1" thì nó sẽ tiến hành bắt đầu chạy obs (chạy phát video đã lên lịch từ trước)
  const subscription = obs1$.connect();
  // Sau 3s thì cũng có người dki theo dõi cùng 1 video
  await delay(3000);
  stdSub(obs1$, "sub 2");
});
 */

// Scheduler






