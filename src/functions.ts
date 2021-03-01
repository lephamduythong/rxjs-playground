import { fromEvent, Observable } from "rxjs";

export function stdSub<T>(obs: Observable<T>, optionalText?: string) {
  optionalText = optionalText ? optionalText : "";
  let ret = obs.subscribe(
    (result) => console.log(optionalText + " Result: " + result),
    (error) => console.log(optionalText + " Error: " + error),
    () => console.log(optionalText + " Completed")
  );
  return ret;
}

export function createClickObs(btn: HTMLButtonElement) {
  return fromEvent(btn, "click");
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
