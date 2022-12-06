import { StyleSheet, Dimensions, PixelRatio } from "react-native";
import colors from "../../constants/colors";

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
	title: {
		fontSize: 20,
		fontFamily: "Lato-Bold",
	},
	buttonContainer: {
		flexDirection: "row",
		width: width * 0.6,
		justifyContent: "space-around",
		marginTop: 20,
		paddingHorizontal: 15,
		paddingBottom: 10,
	},
	selectedNumber: {
		paddingHorizontal: 12,
		paddingVertical: 8,
		marginVertical: 10,
	},
	selectedNumberText: {
		fontSize: 18,
	},
	gameInfo: {
		marginBottom: 14,
		fontSize: 12,
		fontStyle: "italic",
		color: colors.secondary,
	},
});