import React from "react";
import ContentLoader from "react-content-loader";

export function RadioButtonLoader() {
    return <ContentLoader
        height={80}
    >
        <circle cx="10" cy="20" r="10"/>
        <rect x="30" y="15" rx="5" ry="5" width="150" height="12"/>
        <circle cx="10" cy="60" r="10"/>
        <rect x="30" y="55" rx="5" ry="5" width="150" height="12"/>
    </ContentLoader>;
};


