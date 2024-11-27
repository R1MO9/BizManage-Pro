import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BusinessProfile = () => {
    // Params id
    const { id } = useParams();
    console.log('Business ID:', id);

    useEffect(() => {
        // Fetch business data using the ID
    }, [id]);
    
    const [businessInfo, setBusinessInfo] = useState({
        businessName: "Business Name",
        businessEmail: "contact@business.com",
        businessPhone: "+1234567890",
        businessAddress: "123 Business St, City, Country",
        businessLogo: "https://via.placeholder.com/50",
        businessGST: "GST123456789"
    });

    return (
        <div className='min-h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-300'>

            {/* About Section */}
            <section id="about" className="py-16 text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white">About Our Business</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                        We provide cutting-edge services to help businesses grow and succeed. Our focus is on innovation, excellence, and customer satisfaction. Whether you’re looking to scale your operations or streamline your processes, we’re here to help.
                    </p>
                    <div className="mt-10">
                        <p className="text-lg font-semibold">Business Info:</p>
                        <p className="text-lg text-gray-600 dark:text-gray-300"><strong>Email:</strong> {businessInfo.businessEmail}</p>
                        <p className="text-lg text-gray-600 dark:text-gray-300"><strong>Phone:</strong> {businessInfo.businessPhone}</p>
                        <p className="text-lg text-gray-600 dark:text-gray-300"><strong>Address:</strong> {businessInfo.businessAddress}</p>
                        <p className="text-lg text-gray-600 dark:text-gray-300"><strong>GST:</strong> {businessInfo.businessGST}</p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 bg-gray-100 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Our Services</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">We offer a wide range of professional services tailored to your business needs.</p>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Service Item */}
                        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Consulting</h3>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">Expert business consulting services to guide your growth and help you navigate complex challenges.</p>
                        </div>
                        {/* Service Item */}
                        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Digital Marketing</h3>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">Leverage the power of SEO, PPC, and social media strategies to boost your brand visibility and engagement.</p>
                        </div>
                        {/* Service Item */}
                        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Software Development</h3>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">Custom software solutions to optimize your workflows and increase operational efficiency.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-16 bg-gray-50 dark:bg-gray-900 text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white">What Our Clients Say</h2>
                    <div className="mt-10 flex justify-center space-x-8">
                        {/* Testimonial 1 */}
                        <div className="w-1/3 max-w-xs bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                            <p className="text-lg text-gray-600 dark:text-gray-300">"The team at Business Name transformed our digital presence. Their marketing strategies brought us more customers than we could ever imagine!"</p>
                            <p className="mt-4 font-semibold text-gray-800 dark:text-white">John Doe</p>
                            <p className="text-gray-500 dark:text-gray-400">CEO, Company XYZ</p>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="w-1/3 max-w-xs bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                            <p className="text-lg text-gray-600 dark:text-gray-300">"Their custom software solutions were exactly what our company needed to streamline operations. The results have been phenomenal!"</p>
                            <p className="mt-4 font-semibold text-gray-800 dark:text-white">Jane Smith</p>
                            <p className="text-gray-500 dark:text-gray-400">CTO, Tech Innovators</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Contact Us</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Have any questions or want to get started? Reach out to us below.</p>
                    {/* Contact Form */}
                    <form className="mt-8 max-w-xl mx-auto bg-white dark:bg-darkbg p-6 rounded-lg shadow-md space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                            rows="4"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default BusinessProfile;
