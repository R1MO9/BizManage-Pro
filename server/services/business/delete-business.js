import BusinessRepository from "../../repositories/business/business-repository.js";

const deleteBusiness = async (id) => {
    try {
        const businessExists = await BusinessRepository.findById(id);

        if (!businessExists) {
            return { error: 'Business not found' };
        }

        const deletedBusiness = await BusinessRepository.delete(id);

        if (!deletedBusiness) {
            return { error: 'Error deleting business' };
        }

        return { message: 'Business deleted successfully' };
    } catch (error) {
        return { error: error.message };
    }
};

export default deleteBusiness;