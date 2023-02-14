import { print, object } from '../src/index'
console.log(object)

test('example', () => {
  expect(print('foo')).toBe('foo')
})

test('spyOnTest', () => {
  const spy = jest.spyOn(object, 'sayHello')
  console.log(object)
  const hello = object.sayHello()
  expect(spy).toHaveBeenCalled()
  expect(hello).toBe(true)
})