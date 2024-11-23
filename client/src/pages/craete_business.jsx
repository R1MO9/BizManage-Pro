import React, { useState } from "react";
import LabeledTextInput from "../components/common/labeled-text-input";
import Button from "../components/common/button";

const CreateBusiness = () => {
    const [formData, setFormData] = useState({
        businessName: "",
        businessEmail: "",
        businessPhone: "",
        businessAddress: "",
        businessLogo: null,
        businessGST: "",
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "businessLogo") {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data:", formData);
        // Form submission logic goes here
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg bg-white dark:bg-gray-800 shadow-md rounded-lg p-8"
            >
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
                    Business Information
                </h2>

                {/* Business Name */}
                <LabeledTextInput
                    id="businessName"
                    label="Business Name"
                    type="text"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Enter your business name"
                    required
                    className="bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Business Email */}
                <LabeledTextInput
                    id="businessEmail"
                    label="Business Email"
                    type="email"
                    value={formData.businessEmail}
                    onChange={handleChange}
                    placeholder="Enter your business email"
                    required
                    className="bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Business Phone */}
                <LabeledTextInput
                    id="businessPhone"
                    label="Business Phone"
                    type="tel"
                    value={formData.businessPhone}
                    onChange={handleChange}
                    placeholder="Enter your business phone"
                    required
                    className="bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Business Address */}
                <LabeledTextInput
                    id="businessAddress"
                    label="Business Address"
                    type="text"
                    value={formData.businessAddress}
                    onChange={handleChange}
                    placeholder="Enter your business address"
                    required
                    className="bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Business Logo */}
                <div className="mb-4">
                    <label htmlFor="businessLogo" className="block text-sm font-semibold text-gray-800 dark:text-white mb-1">
                        Business Logo (Optional)
                    </label>
                    <input
                        id="businessLogo"
                        name="businessLogo"
                        type="file"
                        onChange={handleChange}
                        className="bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Business GST */}
                <LabeledTextInput
                    id="businessGST"
                    label="Business GST"
                    type="text"
                    value={formData.businessGST}
                    onChange={handleChange}
                    placeholder="Enter your business GST"
                    className="bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Submit Button */}
                <Button
                    type="submit"
                    className="w-full mt-6 bg-blue-600 dark:bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-700 dark:hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default CreateBusiness;
