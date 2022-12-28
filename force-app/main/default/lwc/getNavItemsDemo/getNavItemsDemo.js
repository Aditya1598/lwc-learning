import { LightningElement, wire } from 'lwc';
import {getNavItems} from 'lightning/uiListApi'

export default class GetNavItemsDemo extends LightningElement {
    result
    @wire(getNavItems, {
        navItemNames:['standard-Account'],
        pageSize:30
    })
    navItemsHandler({data}){
        if(data){
            console.log(data)
            this.result = data.navItemNames[0]
        }
    }
}