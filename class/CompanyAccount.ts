import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  loanMountant : Number | undefined

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }
  
  getLoan = (loanAmount: number | undefined): void => {
    if (this.validateStatus() === true && loanAmount) {
        this.balance += loanAmount; // Adiciona o valor do empréstimo ao saldo
        console.log("You received a loan of $", loanAmount);
        console.log("Your new balance is $", this.balance);
    }
}

  withdraw = (): void => {
    console.log('Voce sacou')
  }
}
