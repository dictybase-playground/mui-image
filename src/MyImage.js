import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
const Image = ({ src, alt = "", height = "100%", width = "100%", fit = "cover", easing = "ease", duration, }) => {
    const [loaded, setLoaded] = useState(false);
    const styles = {
        root: {
            width,
            height,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
        },
        image: {
            width: "100%",
            height: "100%",
            "object-fit": fit,
            transitionProperty: "opacity",
            transitionTimingFunction: easing,
            transitionDuration: duration ? `${duration}ms` : "",
            opacity: loaded ? 1 : 0,
        },
    };
    return (_jsx("div", { style: styles.root, children: _jsx("img", { src: src, alt: alt, style: styles.image, onLoad: () => setLoaded(true) }) }));
};
export default Image;
