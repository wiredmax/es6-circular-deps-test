// This is module A
import B from "./moduleB";

let bInstance;

export function init(val) {
  bInstance = new B(val);
}

export function patateType(val) {
  return val + " douce"
}
