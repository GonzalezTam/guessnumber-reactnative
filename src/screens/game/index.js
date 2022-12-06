import React, { useState, useEffect, useRef } from "react";
import { View, Text, Button, Alert, ScrollView } from "react-native";
import { Card } from '../../components';
import colors from '../../constants/colors';
import { styles } from "./styles";

const generateRandomNumber = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const randomNumber = Math.floor(Math.random() * (max - min) + min);
	if (randomNumber === exclude) {
		return generateRandomNumber(min, max, exclude);
	} else {
		return randomNumber;
	}
};

const Game = ({selectedNumber, onGameOver}) => {
	const [current, setCurrent] = useState(generateRandomNumber(1, 100, selectedNumber));
	const [rounds, setRounds] = useState(0);
	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	const onHandleDirection = (direction) => {
		if ((direction === "lower" && current < selectedNumber) || (direction === "greater" && current > selectedNumber)) {
			Alert.alert("Don't lie!", "You know that this is wrong...", [{ text: "Sorry!", style: "cancel" }]);
			return;
		}
		if (direction === "lower") {
			currentHigh.current = current;
		} else {
			currentLow.current = current;
		}

		const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, current);
		setCurrent(nextNumber);
		setRounds((currentRounds) => currentRounds + 1);
	};

	useEffect(() => {
		if (current === selectedNumber) {
			onGameOver(rounds);
		}
	}, [current, selectedNumber, onGameOver]);

	return (
		<ScrollView style={styles.containerScroll}>
			<View style={styles.container}>
				<Text style={styles.title}>Is it.. ?</Text>
				<Card style={styles.card}>
					<Text style={styles.thinkingEmoji}>🤔 🤨</Text>
					<Text style={styles.generatedNumber}>{current}</Text>
					<View style={styles.buttonContainer}>
						<Button title="LOWER 👇🏻" color={colors.third} onPress={() => onHandleDirection('lower')} />
						<Button title="GREATER 👆🏻" color={colors.third} onPress={() => onHandleDirection('greater')} />
					</View>
				</Card>
			</View>
		</ScrollView>
	);
};

export default Game;