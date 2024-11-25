import BusinessRepository from "../../repositories/business/business-repository.js";

const updateBusiness = async (id, business) => {
    try {
        const businessExists = await BusinessRepository.findById(id);

        if(!businessExists) {
            return { error: 'Business not found' };
        }

        const updatedBusiness = await BusinessRepository.update(id, business);

        if (!updatedBusiness) {
            return { error: 'Error updating business' };
        }

        return { message: 'Business updated successfully', business: updatedBusiness };
    } catch (error) {
        return { error: error.message };
    }
};

export default updateBusiness;