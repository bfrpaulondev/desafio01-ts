export abstract class DioAccount {
  protected name: string
  protected readonly accountNumber: number
  balance: number = 100
  withdrawMontant: number | undefined 
  private status: boolean = true
  protected newBalance: number = 0;
  protected readonly bonus: number = 10;
  valueDeposit: number | undefined
  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  withdraw = (withdrawAmount: number): void => {
    if (this.validateStatus() === true && withdrawAmount <= this.balance) {
        this.balance -= withdrawAmount;
        console.log("Withdrawal successful. Remaining balance:", this.balance);
    } else {
        console.log("Invalid transaction: Insufficient funds or invalid status");
    }
}

}
