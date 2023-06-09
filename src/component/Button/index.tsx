import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {colors} from '../../const/colors';

interface Props extends TouchableOpacityProps {
  label: string;
  type: 'fill' | 'outline';
}

const CustomButton = (props: Props) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        style.button,
        props.type == 'fill' ? style.fill : style.outline,
        props.style,
      ]}>
      <Text
        style={[
          style.label,
          {color: props.type == 'fill' ? colors.white : colors.T500},
        ]}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

export const style = StyleSheet.create({
  button: {
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 100,
  },
  outline: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.T500,
  },
  fill: {
    backgroundColor: colors.T500,
  },
  label: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
});
