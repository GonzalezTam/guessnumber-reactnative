import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	buttonContainer: {
		flexDirection: "row",
		width: "70%",
		justifyContent: "space-around",
		marginTop: 20,
		paddingHorizontal: 15,
		paddingBottom: 10,
	},
});