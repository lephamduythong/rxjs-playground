import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { stdSub } from "../functions";

// tap / do: dùng để tạo side effect cho việc debug, theo dõi giá trị mỗi lần dc bắn ra ở mỗi bước xử lí mà việc console.log ở subsciber ko thể theo dõi được
/* const obs1$ = new Observable((observer) => {
  (async () => {
    observer.next("1-1");
    observer.next("1-2");
    observer.next("1-3");
    observer.complete();
  })();
});
const tap$ = obs1$.pipe(
    tap(value => console.log('Tap: ' + value)),
    map(value => value + ' hihi')
)
stdSub(tap$); */

// delay: tạo độ trễ cho obs
// auto hiểu