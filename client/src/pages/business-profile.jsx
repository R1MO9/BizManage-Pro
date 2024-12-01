import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/common/button';
import LabeledTextInput from '../components/common/labeled-text-input';
import Chart from '../components/common/graph';
import { chartData, chartOptions } from '../lib/data';
import Cookies from 'js-cookie';
import getBusiness from '../actions/business/getBusiness';
import notify from '../components/common/notify';
import { useNavigate } from 'react-router-dom';

const BusinessProfile = () => {
    const [businessInfo, setBusinessInfo] = useState({
        businessName: "Business Name",
        businessEmail: "contact@business.com",
        businessPhone: "+1234567890",
        businessAddress: "123 Business St, City, Country",
        businessLogo: "https://via.placeholder.com/50",
        businessGST: "GST123456789"
    });

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(businessInfo);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchBusinessInfo = async () => {
            const token = Cookies.get('token');
            if (!token) {
                notify('Unauthorized', 'error');
                navigate('/login');
                return;
            }

            try {
                const decodedToken = JSON.parse(atob(token.split('.')[1]));
                const res = await getBusiness(decodedToken.id); // Assuming 'decodedToken.id' is the business ID.
                
                setBusinessInfo({
                    businessName: res.businessName,
                    businessEmail: res.businessEmail,
                    businessPhone: res.businessPhone,
                    businessAddress: res.businessAddress,
                    businessLogo: res.businessLogo || "https://via.placeholder.com/50", // Ensure a default image if missing
                    businessGST: res.businessGST,
                });

                setFormData({
                    businessName: res.businessName,
                    businessEmail: res.businessEmail,
                    businessPhone: res.businessPhone,
                    businessAddress: res.businessAddress,
                    businessGST: res.businessGST,
                });
            } catch (error) {
                console.error('Error decoding token or fetching business info:', error);
                notify('An error occurred while fetching business info', 'error');
            }
        };

        fetchBusinessInfo();
    }, [navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setBusinessInfo(formData);
        setIsEditing(false); // Hide form after saving
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-300 relative">
            {!isEditing && (
                <button
                    onClick={() => setIsEditing(true)}
                    className="absolute top-4 right-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Edit Business Info
                </button>
            )}

            <section id="about" className={`py-16 text-center ${isEditing ? 'hidden' : 'visible'}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white">About Our Business</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                        We provide cutting-edge services to help businesses grow and succeed. Our focus is on innovation, excellence, and customer satisfaction. Whether you’re looking to scale your operations or streamline your processes, we’re here to help.
                    </p>
                    <div className="mt-10">
                        <p className="text-lg font-semibold">Business Info:</p>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            <strong>Business Name:</strong> {businessInfo.businessName}
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            <strong>Email:</strong> {businessInfo.businessEmail}
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            <strong>Phone:</strong> {businessInfo.businessPhone}
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            <strong>Address:</strong> {businessInfo.businessAddress}
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            <strong>GST:</strong> {businessInfo.businessGST}
                        </p>
                    </div>
                </div>
            </section>

            {isEditing && (
                <section id="edit-business" className="py-16 bg-gray-100 dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Edit Business Info</h2>
                        <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md space-y-4">
                            <input
                                type="text"
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                                placeholder="Business Name"
                            />
                            <input
                                type="email"
                                name="businessEmail"
                                value={formData.businessEmail}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                                placeholder="Business Email"
                            />
                            <input
                                type="tel"
                                name="businessPhone"
                                value={formData.businessPhone}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                                placeholder="Business Phone"
                            />
                            <input
                                type="text"
                                name="businessAddress"
                                value={formData.businessAddress}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                                placeholder="Business Address"
                            />
                            <input
                                type="text"
                                name="businessGST"
                                value={formData.businessGST}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                                placeholder="GST Number"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                            >
                                Save Changes
                            </button>
                        </form>
                    </div>
                </section>
            )}

            <section>
                <div className="p-6">
                    <Chart chartData={chartData} chartOptions={chartOptions} />
                </div>
            </section>
        </div>
    );
};

export default BusinessProfile;
