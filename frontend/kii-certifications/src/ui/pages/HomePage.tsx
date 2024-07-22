import React from "react";
import CertificationList from "../components/CertificationList";
import CertificationForm from "../components/CertificationForm";

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen">
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-spacing-1 border-gray-200 rounded-sm">
                            <div className="flex items-center justify-between bg-slate-950 mb-4  rounded-lg shadow-md">
                                <img src="./src/assets/logo-gradient.svg" alt="Logo" className="h-10 ml-4" />
                                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                    <h1 className="text-3xl font-bold text-white">Certifications</h1>
                                </div>
                            </div>
                            <CertificationList />
                            <CertificationForm />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
