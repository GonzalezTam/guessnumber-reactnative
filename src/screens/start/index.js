import React, { useState, useEffect } from "react";
import { View, Text, Button, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Card, Input } from "../../components";
import colors from "../../constants/colors";
import { styles } from "./styles";

const Start = () => {
	const [enteredValue, setEnteredValue] = useState("");

	const onHandleChange = (value) => {
		setEnteredValue(value.replace(/[^0-9]/g, ""));
	};

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<Text style={styles.title}>Start Game</Text>
				<Card style={styles.inputContainer}>
					<Input
						onHandleChange={onHandleChange}
						value={enteredValue}
						placeholder="Enter a Number"
						maxLength={2}
						keyboardType="number-pad"
						style={styles.input} />
					<View style={styles.buttonContainer}>
						<Button title="Reset" onPress={() => {}} color={colors.secondary} />
						<Button title="Confirm" onPress={() => {}} color={colors.primary} />
					</View>
				</Card>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default Start;