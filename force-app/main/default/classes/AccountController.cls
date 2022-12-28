public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [SELECT ID, Name, Type, Industry from Account LIMIT 7];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccountTypeType(String type){
        return [SELECT ID, Name, Type from Account where Type=:type LIMIT 7];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchKey){
        String key = '%' + searchKey + '%';
        return [SELECT ID, Name, Type, Industry from Account 
        WHERE Name LIKE :key LIMIT 7];
    }
}
