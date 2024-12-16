import React from "react";
import Template0 from "../Pages/DonationTemplates/Template0";
import Template1 from "../Pages/DonationTemplates/Template1";
import Template2 from "../Pages/DonationTemplates/Template2";
import Template3 from "../Pages/DonationTemplates/Template3";


const TemplateManager = ({ templateId, pageData }) => {
    switch (templateId) {
        case 0:
            return <Template0 pageData={pageData} />;
        case 1:
            return <Template1 pageData={pageData} />;
        case 2:
            return <Template2 pageData={pageData} />;
        case 3:
            return <Template3 pageData={pageData} />;
        default:
            return <Template0 pageData={pageData} />; // Fallback to Template0
    }
};

export default TemplateManager;
