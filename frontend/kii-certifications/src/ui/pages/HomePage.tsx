import React from "react";
import CertificationList from "../components/CertificationList";
import CertificationForm from "../components/CertificationForm";

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen">
            <header className="dark:bg-slate-100 shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Certifications</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg">
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
