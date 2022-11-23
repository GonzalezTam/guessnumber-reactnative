import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
	inputContainer: {
		width: 300,
		marginTop: 20,
		marginBottom: 10,
		maxWidth: "70%",
		alignItems: "center",
		shadowColor: colors.black,
		shadowRadius: 6,
		shadowOpacity: 0.26,
		backgroundColor: colors.white,
		elevation: 1,
		padding: 10,
		borderRadius: 10,
	},
});