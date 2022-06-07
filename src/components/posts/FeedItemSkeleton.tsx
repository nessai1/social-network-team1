import styles from "./PostList.module.scss";
import ContentLoader from "react-content-loader";
import React from "react";

export const FeedItemSkeleton = () => {
    return (
        <div>
            <ContentLoader
                speed={2}
                width={980}
                height={400}
                viewBox="0 0 980 400"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="77" y="18" rx="3" ry="3" width="178" height="12" />
                <rect x="76" y="43" rx="3" ry="3" width="92" height="11" />
                <rect x="13" y="94" rx="3" ry="3" width="538" height="11" />
                <rect x="11" y="116" rx="3" ry="3" width="540" height="9" />
                <rect x="12" y="136" rx="3" ry="3" width="312" height="11" />
                <circle cx="39" cy="38" r="31" />
                <rect x="13" y="167" rx="0" ry="0" width="215" height="170" />
                <rect x="244" y="169" rx="0" ry="0" width="322" height="170" />
            </ContentLoader>
        </div>
    );
};
