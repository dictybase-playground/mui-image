import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from "@mui/material/styles";
import { createSvgIcon } from "@mui/material/utils";
const BrokenImageIcon = createSvgIcon(_jsx("path", { d: "M21 5v6.59l-2.29-2.3c-.39-.39-1.03-.39-1.42 0L14 12.59 10.71 9.3a.9959.9959 0 0 0-1.41 0L6 12.59 3 9.58V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42 3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l2.29 2.29c.39.39 1.02.39 1.41 0l3.3-3.3 3.29 3.29c.39.39 1.02.39 1.41 0l3.3-3.28z" }), "BrokenImageIcon");
const Img = styled("img")({
    "@keyframes materialize": {
        "0%": {
            filter: "saturate(20%) contrast(50%) brightness(120%)",
        },
        "75%": {
            filter: "saturate(60%) contrast(100%) brightness(100%)",
        },
        "100%": {
            filter: "saturate(100%) contrast(100%) brightness(100%)",
        },
    },
});
export default function Image({ src, alt, height, width, }) {
    const styles = {
        root: {
            width,
            height,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        image: {
            width: "100%",
            height: "100%",
            // objectFit: fit,
        },
        icons: {
            width: "100%",
            marginLeft: "-100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    };
    return (_jsx("div", { style: styles.root, className: `mui-image-wrapper`, children: _jsx(Img, { src: src, alt: alt, style: styles.image }) }));
}
