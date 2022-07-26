import React from "react";
import ContentLoader from "react-content-loader";

interface SortButtonLoaderProps {
}

export function SortButtonLoader(props: SortButtonLoaderProps) {
    return (
        <div>
            <ContentLoader
                height={40}>
                <rect x="15" y="13" rx="5" ry="5" width="50" height="20"/>
            </ContentLoader>
        </div>
    );
}