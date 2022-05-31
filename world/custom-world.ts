import { SimpleOne } from "../domains/eating/simple-one";

export interface CucumberWorldConstructorParams {
  parameters: { [key: string]: string };
}

export class CustomWorld {
  public instance: SimpleOne = new SimpleOne();
  public parameters;

  /**
   *
   */
  constructor({ parameters }: CucumberWorldConstructorParams) {
    this.parameters = parameters;
  }
}
