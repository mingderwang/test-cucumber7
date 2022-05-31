import { Given, Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "../world";
import { SimpleOne } from "../domains/eating/simple-one";
import expect from "expect";

import { defineParameterType } from "@cucumber/cucumber";
// I have a {color} ball
defineParameterType({
  name: "color",
  regexp: /red|blue|yellow/,
  transformer: (s: string | number | Date) => new Date(s),
});

Then("她飽了", async function (this: CustomWorld) {
  expect(this.instance.isFull()).toBe(true);
});
