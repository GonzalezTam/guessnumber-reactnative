import { StyleSheet, Dimensions, PixelRatio } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
	containerScroll: {
		flex: 1,
	},
	container: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		paddingTop: PixelRatio.getPixelSizeForLayoutSize(20),
	},
	content: {
		width: 300,
		maxWidth: "80%",
		alignItems: "center",
	},
	buttonContainer: {
		flexDirection: "row",
		width: width * 0.7,
		justifyContent: "space-around",
		marginTop: 20,
		paddingHorizontal: 15,
		paddingBottom: 10,
	},
	generatedNumber: {
		fontSize: 32,
		marginVertical: 10,
	},
	selectedNumberText: {
		paddingHorizontal: 12,
		marginVertical: 20,
		fontSize: 18,
	},
	rounds: {
		fontSize: 18,
	},
	image: {
		width: '100%',
		height: 180,
	},
});