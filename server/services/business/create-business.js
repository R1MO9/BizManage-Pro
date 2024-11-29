import BusinessRepository from "../../repositories/business/business-repository.js";

const createBusiness = async (business) => {
    const { name, email, phone, address, logo, gstin, owner } = business;

    try {
        const businessExists = await BusinessRepository.findBusinessByEmail(email);

        if (businessExists) {
            return { error: 'Business already exists' };
        }

        const ownerExists = await BusinessRepository.verifyOwner(owner);

        if (!ownerExists) {
            return { error: 'Owner does not exist' };
        }

        const newBusiness = await BusinessRepository.create({
            name,
            email,
            phone,
            address,
            logo,
            gstin,
            owner
        });

        return { message: 'Business created successfully', business: newBusiness };
    }
    catch (error) {
        return { error: error.message };
    }
}

export default createBusiness;