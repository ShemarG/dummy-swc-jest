import type { foo } from './module'
import { one } from './module'

export let object = {
  sayHello(): boolean {
    console.log('Hello')
    return true
  }
}

export function print (arg: foo): foo {
  return arg
}