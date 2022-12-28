import { LightningElement } from 'lwc';
import USER_IMAGE from '@salesforce/resourceUrl/user_image'
import NEW_USER from '@salesforce/resourceUrl/new_user'

export default class StaticImages extends LightningElement {
    userImage = USER_IMAGE

    newUser = NEW_USER
}