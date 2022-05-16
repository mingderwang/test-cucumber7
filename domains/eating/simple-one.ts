export class SimpleOne implements TheOne {
  private amount = 0
  public eat(value: number): TheOne {
    this.amount += value
    return this
  }
  public isFull(): boolean {
    return this.amount > 3 ? true : false
  }
}

export interface TheOne {
  isFull: () => boolean
  eat: (value: number) => TheOne
}
