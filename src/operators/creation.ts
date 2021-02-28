import { Observable } from "rxjs";
import { stdSub } from '../functions'

// ajax: XMLHttpRequest using rxjs
// const myUrl = 'https://jsonplaceholder.typicode.com/todos/1';
// const users$ = Observable.ajax({
//   url: myUrl,
//   method: 'GET',
//   headers: {
//     /*some headers*/
//   },
//   body: {
//     /*in case you need a body*/
//   }
// });
// const subscribe = users$.subscribe(
//   res => console.log(res), // data: res.response
//   err => console.error(err)
// );

// from: input từ array
/* const obs$ = Observable.from([1, 2, 3, 4]);
stdSub(obs$); */

// of: input dạng ...params
const obs$ = Observable.of(1, 2, 3, 4);
stdSub(obs$);

// create

// defer

// empty

// fromEvent

// generate

// interval

// range

// throw

// timer

// never

// empty