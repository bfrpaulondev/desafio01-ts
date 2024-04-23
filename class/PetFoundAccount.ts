import { DioAccount } from "./DioAccount";

export class PetFoundAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getName = (): string => {
    return this.getName();
  };

  getAccount = (): number => {
    return this.getAccount();
  };

  deposit = (valueDeposit: number): void => {
    if (this.validateStatus()) {
      this.newBalance = this.balance + valueDeposit + this.bonus;
      console.log('Você depositou', this.newBalance);
    }
  };
}
