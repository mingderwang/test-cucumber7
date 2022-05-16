import { Given, Then, When } from '@cucumber/cucumber'
import { CustomWorld } from '../../world'
import { SimpleOne } from '../../domains/eating/simple-one'
import expect from 'expect'

import { defineParameterType } from '@cucumber/cucumber'
// I have a {color} ball
defineParameterType({
  name: 'color',
  regexp: /red|blue|yellow/,
  transformer: (s: string | number | Date) => new Date(s),
})

Given('愛麗絲肚子有點餓', async function (this: CustomWorld) {
  this.instance = new SimpleOne()
})

When('她吃了/她又吃了 {int} 條小黃瓜(s)', async function (
  this: CustomWorld,
  _int,
) {
  console.log(`Eating ${_int} cucumbers.`)
  this.instance.eat(_int)
})

Then('她沒有飽', async function (this: CustomWorld) {
  expect(this.instance.isFull()).toBe(false)
})

Then('她飽了', async function (this: CustomWorld) {
  expect(this.instance.isFull()).toBe(true)
})
