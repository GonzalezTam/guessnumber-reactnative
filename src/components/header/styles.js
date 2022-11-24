import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.header,
		height: 80,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 10,
	},
	title: {
		color: colors.white,
		fontSize: 20,
		fontFamily: "Lato-Bold",
	},
});