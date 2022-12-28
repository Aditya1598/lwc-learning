import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    
    // Data Binding Example
    fullname = "Zero to Hero"
    title = "aura"

    changeHandler(event){
        this.title = event.target.value
    }

    // track binding example
    @track address = {
        city: 'Barcelona',
        postcode: 1222,
        country:'Spain'
    }
 
    trackHandler(event){
        this.address.city = event.target.value
      
    }

    // getter example
    users = ["john","smith","nick"]
    num1 = 10
    num2 = 20

    //this.firstUser = this.users[0]

    get firstUser(){
        return this.users[0].toUpperCase()
    }

    get multiply(){
        return this.num1 * this.num2
    }

}