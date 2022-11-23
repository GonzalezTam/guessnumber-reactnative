import React from "react";
import { TextInput } from "react-native";
import { styles } from "./styles";

const Input = ({ value, onHandleChange, style, placeholder, maxLength, keyboardType }) => {
	return (
		<TextInput
			onChangeText={onHandleChange}
			value={value}
			placeholder={placeholder}
			keyboardType={keyboardType}
			maxLength={maxLength}
			autoCapitalize="none"
			autoCorrect={false}
			blurOnSubmit
			style={{ ...styles.input, ...style }} />
	);
};

export default Input;