import React, { useState, useEffect } from "react";
import { View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { Card, Input } from "../../components";
import colors from "../../constants/colors";
import { styles } from "./styles";

const Start = ({ onStartGame }) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [selectedValue, setSelectedValue] = useState("");
	const [confirmed, setConfirmed] = useState(false);

	const onHandleChange = (value) => {
		setEnteredValue(value.replace(/[^0-9]/g, ""));
	};

	const onHandleResetValue = () => {
		setEnteredValue("");
		setConfirmed(false);
	};

	const onHandleConfirmValue = () => {
		const parsedNumber = parseInt(enteredValue, 10);
		if (isNaN(parsedNumber) || parsedNumber <= 0 || parsedNumber > 99) {
			Alert.alert("Invalid number!", "Insert a number between 1 and 99.", [{ text: "Okay", style: "destructive", onPress: onHandleResetValue }]);
			return;
		} else {
			setConfirmed(true);
			setSelectedValue(parsedNumber);
			setEnteredValue("");
		}
	};

	const confirmedOutput = () => confirmed ? (
		<Card style={styles.summaryContainer}>
			<Text>You selected number</Text>
			<View style={styles.selectedNumber}>
				<Text style={styles.selectedNumberText}>{selectedValue}</Text>
			</View>
			<Text style={styles.gameInfo}>The bot will try to guess that number..</Text>
			<Button title="START GAME" onPress={() => onStartGame(selectedValue)} color={colors.third} />
		</Card>
	) : null;

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
						<Button title="Reset" onPress={onHandleResetValue} color={colors.secondary} />
						<Button title="Confirm" onPress={onHandleConfirmValue} color={colors.primary} />
					</View>
				</Card>
				{confirmedOutput()}
			</View>
		</TouchableWithoutFeedback>
	);
};

export default Start;