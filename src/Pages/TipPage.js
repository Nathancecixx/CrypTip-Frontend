import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Data/Firebase";
import TemplateManager from "../Controllers/TemplateManager";

const DonationPage = () => {
    const { pageId } = useParams();
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPageData = async () => {
            try {
                const docRef = doc(db, "tippages", pageId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setPageData(docSnap.data());
                } else {
                    setError("Page not found!");
                }
            } catch (err) {
                console.error("Error:", err);
                setError("Failed to load the page.");
            } finally {
                setLoading(false);
            }
        };

        fetchPageData();
    }, [pageId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return <TemplateManager templateId={pageData.templateId} pageData={pageData} />;
};

export default DonationPage;
