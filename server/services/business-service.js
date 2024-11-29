import createBusiness from "./business/create-business.js";
import deleteBusiness from "./business/delete-business.js";
import getBusiness from "./business/get-business.js";
import updateBusiness from "./business/update-business.js";

export default class BusinessService {
    static createBusiness = createBusiness;
    static deleteBusiness = deleteBusiness;
    static getBusiness = getBusiness;
    static updateBusiness = updateBusiness;
}