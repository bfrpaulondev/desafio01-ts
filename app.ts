import { CompanyAccount } from './class/CompanyAccount' 
import { PeopleAccount } from './class/PeopleAccount'
import { PetFoundAccount} from './class/PetFoundAccount';

/* 
const companyAccount: CompanyAccount = new CompanyAccount('Amanda' , 10)
companyAccount.getLoan(2000)
console.log(companyAccount)
 

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Bruno', 10)
console.log(peopleAccount)
peopleAccount.withdraw(200) */


const petFoundAccount: PetFoundAccount = new PetFoundAccount("zeze", 12)
console.log(petFoundAccount)
petFoundAccount.deposit(200)