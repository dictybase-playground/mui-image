import * as React from "react"

import PropTypes from "prop-types"

import { styled } from "@mui/material/styles"
import { createSvgIcon } from "@mui/material/utils"
import CircularProgress from "@mui/material/CircularProgress"

const BrokenImageIcon = createSvgIcon(
	<path d="M21 5v6.59l-2.29-2.3c-.39-.39-1.03-.39-1.42 0L14 12.59 10.71 9.3a.9959.9959 0 0 0-1.41 0L6 12.59 3 9.58V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42 3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l2.29 2.29c.39.39 1.02.39 1.41 0l3.3-3.3 3.29 3.29c.39.39 1.02.39 1.41 0l3.3-3.28z" />,
	"BrokenImageIcon",
)

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
})

type ImageProperties = {
	src: string
	alt: string
	height: string
	width: string
	// fit: string
}

export default function Image({
	src,
	alt,
	height,
	width,
}: // fit,
ImageProperties) {
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
	}

	return (
		<div style={styles.root} className={`mui-image-wrapper`}>
			<Img src={src} alt={alt} style={styles.image} />
		</div>
	)
}

// Image.defaultProps = {
// 	alt: "",
// 	height: "100%",
// 	width: "100%",
// 	position: "relative",
// 	fit: "cover",
// 	showLoading: false,
// 	errorIcon: true,
// 	shift: false,
// 	distance: 100,
// 	shiftDuration: null,
// 	bgColor: "inherit",
// 	duration: 3000,
// 	easing: "cubic-bezier(0.7, 0, 0.6, 1)", // "heavy move" from https://sprawledoctopus.com/easing/
// 	className: "",
// 	wrapperClassName: "",
// 	iconWrapperClassName: "",
// }

// Image.propTypes = {
// 	src: PropTypes.string.isRequired,
// 	alt: PropTypes.string,
// 	height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// 	width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// 	style: PropTypes.object,
// 	className: PropTypes.string,
// 	showLoading: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
// 	errorIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
// 	shift: PropTypes.oneOf([false, null, "top", "bottom", "left", "right"]),
// 	distance: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// 	shiftDuration: PropTypes.number,
// 	bgColor: PropTypes.string,
// 	wrapperStyle: PropTypes.object,
// 	iconWrapperStyle: PropTypes.object,
// 	wrapperClassName: PropTypes.string,
// 	iconWrapperClassName: PropTypes.string,
// 	duration: PropTypes.number,
// 	easing: PropTypes.string,
// 	onLoad: PropTypes.func,
// 	onError: PropTypes.func,
// 	position: PropTypes.oneOf([
// 		"static",
// 		"relative",
// 		"absolute",
// 		"fixed",
// 		"sticky",
// 		"inherit",
// 		"initial",
// 		"revert",
// 		"unset",
// 	]),
// 	fit: PropTypes.oneOf([
// 		"contain",
// 		"cover",
// 		"fill",
// 		"none",
// 		"scale-down",
// 		"inherit",
// 		"initial",
// 		"revert",
// 		"unset",
// 	]),
// }
