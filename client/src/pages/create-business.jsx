import React, { useState } from "react";
import LabeledTextInput from "../components/common/labeled-text-input.jsx";
import Button from "../components/common/button.jsx";
import createBusiness from "../actions/business/createBusiness.js";
import notify from "../components/common/notify.jsx";
import Notification from "../components/common/notification.jsx";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const CreateBusiness = () => {
    const navigate = useNavigate();
    
    const [businessName, setBusinessName] = useState("");
    const [businessEmail, setBusinessEmail] = useState("");
    const [businessPhone, setBusinessPhone] = useState("");
    const [businessAddress, setBusinessAddress] = useState("");
    const [businessLogo, setBusinessLogo] = useState(null);
    const [businessGST, setBusinessGST] = useState("");

    // Handle input changes
    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
    };

    // Handle file input change
    const handleFileChange = (e) => {
        setBusinessLogo(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!businessName || !businessEmail || !businessPhone || !businessAddress || !businessGST) {
            notify('Please fill in all fields', 'error');
            return;
        }

        const token = Cookies.get('token');
        if (!token) {
            notify('Unauthorized', 'error');
            return;
        }

        const decodedToken = JSON.parse(atob(token.split('.')[1]));

        const res = await createBusiness({
            name: businessName,
            email: businessEmail,
            phone: businessPhone,
            address: businessAddress,
            logo: businessLogo,
            gst: businessGST,
            owner: decodedToken.id,
        });
        console.log(res);
        
        if (res.status === 'error') {
            notify(res.message, 'error');
        } else {
            notify('Business created successfully', 'success');

            setTimeout(() => {
                navigate('/');
            }, 1500);
        }

        setBusinessName('');
        setBusinessEmail('');
        setBusinessPhone('');
        setBusinessAddress('');
        setBusinessLogo(null);
        setBusinessGST('');
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
                    value={businessName}
                    onChange={handleInputChange(setBusinessName)}
                    placeholder="Enter your business name"
                    className="bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Business Email */}
                <LabeledTextInput
                    id="businessEmail"
                    label="Business Email"
                    type="email"
                    value={businessEmail}
                    onChange={handleInputChange(setBusinessEmail)}
                    placeholder="Enter your business email"
                    className="bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Business Phone */}
                <LabeledTextInput
                    id="businessPhone"
                    label="Business Phone"
                    type="tel"
                    value={businessPhone}
                    onChange={handleInputChange(setBusinessPhone)}
                    placeholder="Enter your business phone"
                    className="bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Business Address */}
                <LabeledTextInput
                    id="businessAddress"
                    label="Business Address"
                    type="text"
                    value={businessAddress}
                    onChange={handleInputChange(setBusinessAddress)}
                    placeholder="Enter your business address"
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
                        onChange={handleFileChange}
                        className="bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Business GST */}
                <LabeledTextInput
                    id="businessGST"
                    label="Business GST"
                    type="text"
                    value={businessGST}
                    onChange={handleInputChange(setBusinessGST)}
                    placeholder="Enter your business GST"
                    className="bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Submit Button */}
                <Button
                    type="submit"
                    className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition"
                >
                    Submit
                </Button>
            </form>
            <Notification />
        </div>
    );
};

export default CreateBusiness;
