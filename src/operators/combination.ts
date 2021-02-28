/* ------------ Popular ------------  */

// combineLasted: gộp nhiều obs lại, lấy phần mới nhất (lasted) của mỗi obs
// phải click đủ 3 btn thì event fire, không cần theo thứ tự
/* const btn1$ = createClickObs(btn1);
const btn2$ = createClickObs(btn2);
const btn3$ = createClickObs(btn3);
const cL$ = Observable.combineLatest(btn1$, btn2$, btn3$);
stdSub(cL$);
 */

// concat: đợi obs1 thì mới tạo một obs mới gồm các thành phần obs1 nối đuôi obs2, chú ý obs1 phải complete nhé :v
/* const obs1$ = new Observable((observer) => {
  (async () => {
    await delay(500);
    observer.next("1-1");
    await delay(500);
    observer.next("1-2");
    await delay(500);
    observer.complete();
  })();
});
const obs2$ = new Observable((observer) => {
  (async () => {
    await delay(250);
    observer.next("2-1");
    await delay(250);
    observer.next("2-2");
    await delay(250);
    observer.complete();
  })();
});
const concat$ = obs1$.concat(obs2$);
stdSub(concat$); // 1-1 -> 1-2 -> 2-1 -> 2-2 */

// merge: trộn chung obs1 và obs2 vào chung một obs, ko quan tâm nào trước nào sau
/* const obs1$ = new Observable((observer) => {
  (async () => {
    await delay(500);
    observer.next("1-1");
    await delay(500);
    observer.next("1-2");
    await delay(500);
    observer.complete();
  })();
});
const obs2$ = new Observable((observer) => {
  (async () => {
    await delay(250);
    observer.next("2-1");
    await delay(250);
    observer.next("2-2");
    await delay(250);
    observer.complete();
  })();
});
const concat$ = obs1$.merge(obs2$);
stdSub(concat$); // 2-1 -> 1-1 -> 2-2 -> 1-2 */

// startWith: khởi tạo một thành phần dc thêm vào ở đầu obs
/* const obs1$ = new Observable((observer) => {
  (async () => {
    await delay(500);
    observer.next("1-1");
    await delay(500);
    observer.next("1-2");
    await delay(500);
    observer.complete();
  })();
});
const startWith$ = obs1$.startWith('start');
stdSub(startWith$); // start -> 1-1 -> 1-2 */

// withLastedFrom: khá giống combineLasted, tuy nhiên thành phần obs1 chỉ combine với obs2 khi có một thành phần của obs1 mới nhất dc bắn ra và không thể lặp lại lần sau nếu có thành phần mới của obs2 dc bắn ra

/* ------------ Unpopular ------------  */

// combineAll: gộp obs giống combineLasted nhưng xảy ra trong cả pipe

// zip: khá giống withLastedFrom, nhưng thay vì lấy thành phần mới nhất thì nó lấy thành phần đã chưa có ai bắt cặp với nó mới nhất

// concatAll

// mergeAll:

// endWith: ngược với startWith

// forkJoin:

// pairWise:

// race: lụm toàn bộ obs cho thằng nào có thành phần tới trước tiên, ko quan tâm các obs còn lại
