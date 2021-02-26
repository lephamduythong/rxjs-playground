import "./styles/style.scss";
import "./index.js";
import { Observable } from "rxjs";
import { audit, auditTime, catchError, map, take } from "rxjs/operators";

const btn1 = document.getElementById("btn1") as HTMLButtonElement;
const btn2 = document.getElementById("btn2") as HTMLButtonElement;
const btn3 = document.getElementById("btn3") as HTMLButtonElement;
const btn4 = document.getElementById("btn4") as HTMLButtonElement;
const btn5 = document.getElementById("btn5") as HTMLButtonElement;

function stdSub<T>(obs: Observable<T>): void {
  obs.subscribe(
    (result) => console.log("Result: " + result),
    (error) => console.log("Error: " + error),
    () => console.log("Completed")
  );
}

function createClickObs(btn: HTMLButtonElement) {
  return Observable.fromEvent(btn, "click");
}

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

// buffer: click btn1 3 lần, lưu vào buffer, click btn2, show array gồm 3 cái event của btn1
/* const btn1$ = createClickObs(btn1);
const btn2$ = createClickObs(btn2);
const buffered$ = btn1$.buffer(btn2$);
stdSub(buffered$); */

// bufferCount: click btn1 đúng 3 lần thì sau đó sẽ show array gồm 3 cái event của btn1
/* const btn1$ = createClickObs(btn1);
const buffered$ = btn1$.bufferCount(3);
stdSub(buffered$); */

// bufferTime: click btn1 5 lần trong 1s thì nó sẽ show array gồm 5 event của btn1
/* const btn1$ = createClickObs(btn1);
const buffered$ = btn1$.bufferTime(1000);
stdSub(buffered$); */

// bufferToggle:

// bufferWhen:

// catchError: bắt lỗi xảy ra khi đang xử lí trên obs, thay thế bằng obs mới, nếu throw lỗi trong catchError thì subscriber sẽ báo lỗi
// catchError dùng tron pipe, nếu dùng ngoài thì ghi .catch
/* const obs = Observable.of(1, 2, 3, 4, 5).map(value => {
    if (value === 3) {
        throw 'holy shit';
    };
    return value;
}).catch((error, caught) => {
    console.log(error); // holy shit
    console.log(caught); // Obs
    throw 'clgt'; // Error: clgt
});
stdSub(obs); */