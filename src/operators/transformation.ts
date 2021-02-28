/* ------------ Popular ------------  */

import { Observable } from "rxjs";
import { delay, stdSub } from "../functions";

// bufferTime: click btn1 5 lần trong 1s thì nó sẽ show array gồm 5 event của btn1
/* const btn1$ = createClickObs(btn1);
const buffered$ = btn1$.bufferTime(1000);
stdSub(buffered$); */

// map: .next tới đâu, biến đổi giá trị tới đó
// auto hiểu

// concatMap: kết hợp giữa concat và map, .next lần lượt 3 cái obs1, mỗi .next sẽ sinh ra obs2 mới và in ra 2 .next value của obs2 (có thêm mắm muối từ obs1)
/* const obs1$ = new Observable((observer) => {
  (async () => {
    observer.next("1-1");
    observer.next("1-2");
    observer.next("1-3");
    observer.complete();
  })();
});
const obs2$ = new Observable((observer) => {
  (async () => {
    await delay(2000);
    observer.next("2-1");
    await delay(2000);
    observer.next("2-2");
    await delay(2000);
    observer.complete();
  })();
});
const concatMap$ = obs1$.concatMap((value, index) => {
  console.log("Log: value " + value + " at index " + index);
  return obs2$.map(obs2Value => obs2Value + ' ' + value);
});
stdSub(concatMap$); */ 

// scan: gần giống reduce nhưng có tính chất quét từng thành phần, không đợi cộng dồn như reduce
// auto hiểu

// switchMap: xem concatMap, tuy nhiên xét về mặt thời gian thực thi có sự khác biệt khi mà mỗi lần .next của obs1 nó sé thực hiện ngay với obs2, không phải đợi .next của obs1 đó phải xong (chạy async)
const obs1$ = new Observable((observer) => {
  (async () => {
    observer.next("1-1");
    observer.next("1-2");
    observer.next("1-3");
    observer.complete();
  })();
});
const obs2$ = new Observable((observer) => {
  (async () => {
    await delay(3000);
    observer.next("2-1");
    await delay(3000);
    observer.next("2-2");
    await delay(3000);
    observer.complete();
  })();
});
const switchMap$ = obs1$.switchMap((value, index) => {
  console.log("Log: value " + value + " at index " + index);
  return obs2$.map((obs2Value) => obs2Value + " " + value);
});
stdSub(switchMap$);

/* ------------ Unpopular ------------  */

// bufferToggle:

// bufferWhen:

// buffer: click btn1 3 lần, lưu vào buffer, click btn2, show array gồm 3 cái event của btn1
/* const btn1$ = createClickObs(btn1);
const btn2$ = createClickObs(btn2);
const buffered$ = btn1$.buffer(btn2$);
stdSub(buffered$); */

// bufferCount: click btn1 đúng 3 lần thì sau đó sẽ show array gồm 3 cái event của btn1
/* const btn1$ = createClickObs(btn1);
const buffered$ = btn1$.bufferCount(3);
stdSub(buffered$); */
