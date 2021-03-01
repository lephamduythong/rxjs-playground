import { Observable, Subject } from "rxjs";
import { debounce, debounceTime, map } from "rxjs/operators";
import { btn1 } from "../index";
import { delay, stdSub } from "../functions";

/* ------------ Popular ------------  */
// debounceTime: lấy thành phần cuối cùng trong một khoảng thời gian xác định
/* const obs1$ = new Observable((observer) => {
  (async () => {
    await delay(100);
    observer.next("a");
    await delay(100);
    observer.next("b");
    await delay(100);
    observer.next("c");
    await delay(100);
    observer.next("d");
    await delay(100);
    observer.complete();
  })();
});
const debounceTime$ = obs1$.pipe(
    debounceTime(700)
)
stdSub(debounceTime$) */

// distinctUntilChanged: value của thành phần thay đổi thì mới fire event, lần sau vẫn là value đó thì ko fire (chống ddos)
// ví dụ stream 1 1 1 2 2 1 1 2 4 4 complete -> 1 2 1 2 4 complete
/* const obs$ = new Observable((observer) => {
  (async () => {
    observer.next(1);
    observer.next(1);
    observer.next(1);
    observer.next(2);
    observer.next(2);
    observer.next(1);
    observer.next(1);
    observer.next(2);
    observer.next(4);
    observer.next(4);
    observer.complete();
  })();
});
const distinctUntilChanged$ = obs$.distinctUntilChanged();
stdSub(distinctUntilChanged$); */

// filter: lọc ra các thành phần thoả điều kiện nào đó
// ví dụ stream 1 2 1 2 3 1 2 3 3 4 complete --- (filter value == 3 hoặc value == 4) ---> 3 3 3 4
/* const obs$ = new Observable((observer) => {
  (async () => {
    observer.next(1);
    observer.next(1);
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(3);
    observer.next(4);
    observer.complete();
  })();
});
const filter$ = obs$.filter(value => value === 3 || value === 4);
stdSub(filter$); */

// take: lấy giới hạn theo số lượng
// auto hiểu

// takeUntil: lấy giới hạn cho đến khi thoả một điều kiện nào đó
// auto hiểu

/* ------------ Unpopular ------------  */
// debounce: obs1 chỉ lấy những giá trị mới nhất sau phụ thuộc vào obs2 có complete chưa

// distinct

// audit: btn1 click, sau đó btn2 click thì event click của btn1 mới hiệu lực
/* const btn1$ = Observable.fromEvent(btn1, "click").audit(
  (value) => btn2$
);
const btn2$ = Observable.fromEvent(btn2, "click");
stdSub(btn1$); */

// auditTime: btn1 click, sau 1s thì event click của btn1 mới hiệu lực
/* const btn1$ = Observable.fromEvent(btn1, "click").auditTime(1);
stdSub(btn1$);
 */
