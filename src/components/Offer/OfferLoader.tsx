import React from "react";
import ContentLoader from "react-content-loader";
import { Container, Row } from "./Offer.styles";

interface OfferLoaderProps {
}

export function OfferLoader(props: OfferLoaderProps) {
    return (
        <Container>
            <Row>
                <ContentLoader
                    height={40}>
                    <rect x="0" y="15" rx="5" ry="5" width="400" height="20"/>
                </ContentLoader>
            </Row>
            <Row>
                <ContentLoader
                    height={40}>
                    <rect x="0" y="15" rx="5" ry="5" width="400" height="14"/>
                </ContentLoader>
            </Row>
        </Container>
    );

}