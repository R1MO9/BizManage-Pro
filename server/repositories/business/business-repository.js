import Business from '../../models/business-model.js';
import User from '../../models/user-model.js';
export default class BusinessRepository {
    static async create(business) {
        return await Business.create(business);
    }
    
    static async findById(id) {
        return await Business.findById(id);
    }

    static async findAll() {
        return await Business.find();
    }

    static async update(id, business) {
        return await Business.findByIdAndUpdate(id, business, { new: true });
    }

    static async delete(id) {
        return await Business.findByIdAndDelete(id);
    }

    static async findBusinessByEmail(email) {
        return await Business.findOne({ email });
    }

    static async verifyOwner(owner) {
        return await User.findById(owner);
    }
}