import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
    root: {
        height: (styleProps) => styleProps.height,
        width: (styleProps) => styleProps.width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
    image: {
        width: "100%",
        height: "100%",
        "object-fit": (styleProps) => styleProps.fit,
        transitionProperty: "opacity",
        transitionTimingFunction: (styleProps) => styleProps.easing,
        transitionDuration: (styleProps) => styleProps.duration ? `${styleProps.duration}ms` : "",
        opacity: (styleProps) => (styleProps.loaded ? 1 : 0),
    },
});
const Image = ({ src, alt, height = "100%", width = "100%", fit = "cover", easing = "cubic-bezier(0.7, 0, 0.6, 1)", duration = 3000, }) => {
    const [loaded, setLoaded] = useState(false);
    const { root, image } = useStyles({
        height,
        width,
        fit,
        easing,
        duration,
        loaded,
    });
    return (_jsx("div", { className: root, children: _jsx("img", { src: src, alt: alt, className: image, onLoad: () => setLoaded(true) }) }));
};
export default Image;
