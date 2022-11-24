import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		paddingTop: 70,
	},
	title: {
		fontSize: 20,
		fontFamily: "Lato-Bold",
	},
	card: {
		width: 300,
		maxWidth: "80%",
		alignItems: "center",
	},
	buttonContainer: {
		flexDirection: "row",
		width: "80%",
		justifyContent: "space-around",
		marginTop: 20,
		paddingHorizontal: 15,
		paddingBottom: 10,
	},
	thinkingEmoji: {
		fontSize: 38,
	},
	generatedNumber: {
		fontSize: 32,
		marginVertical: 20,
	},
	selectedNumber: {
		paddingHorizontal: 12,
		paddingVertical: 8,
		marginVertical: 10,
	},
	selectedNumberText: {
		fontSize: 18,
	},
});