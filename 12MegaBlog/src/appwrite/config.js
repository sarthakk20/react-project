import config from '../appwrite/config'
import {Client, Account, ID} from 'appwrite';

export class Service{
    client = new Client();

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

                }
            }