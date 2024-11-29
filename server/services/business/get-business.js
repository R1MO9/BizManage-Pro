import BusinessRepository from "../../repositories/business/business-repository.js";

const getBusiness = async (id) => {
    try {
        const business = await BusinessRepository.findById(id);

        if (!business) {
            return { error: 'Business not found' };
        }

        return { business };
    } catch (error) {
        return { error: error.message };
    }
};

export default getBusiness;