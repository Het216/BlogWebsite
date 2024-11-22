import conf from "../config/config";
import { Client, Account, ID } from "appwrite";


export class AuthService{
    client=new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProject);
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
        try {
           const userAccount= await this.account.create(ID.unique(),email,password,name);
          
           if (userAccount) {
            return userAccount;
           } else {
            
           }

        } catch (error) {
            throw error;
        }
    }
}

const authservice=new AuthService();

export default authservice

