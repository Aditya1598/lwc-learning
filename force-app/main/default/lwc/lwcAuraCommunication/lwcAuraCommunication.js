import { LightningElement, api } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {
    @api 
    
    callAura(){
        const event = new CustomEvent('sendmsg',{
            detail:{
                "msg":"Hello From LWC"
            }
        })
        this.dispatchEvent(event)
    }
}