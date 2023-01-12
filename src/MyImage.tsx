import { useState } from "react"

type ImageProperties = {
	src: string
	alt?: string
	height: string
	width: string
	fit: string
	duration: number
	easing: string
}

const Image = ({
	src,
	alt,
	height = "100%",
	width = "100%",
	fit = "cover",
	easing = "ease",
	duration,
}: ImageProperties) => {
	const [loaded, setLoaded] = useState(false)
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
	}

	return (
		<div style={styles.root}>
			<img
				src={src}
				alt={alt}
				style={styles.image}
				onLoad={() => setLoaded(true)}
			/>
		</div>
	)
}

export default Image
