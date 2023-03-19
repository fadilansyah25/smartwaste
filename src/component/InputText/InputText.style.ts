import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';

export const style = StyleSheet.create({
  inputSection: {
    marginTop: 20,
  },
  labelInput: {
    marginBottom: 8,
  },
  textInputContainer: {
    borderRadius: 5,
    borderWidth: 2,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.white,
    color: colors.T900,
    fontSize: 14,
    fontWeight: '500',
  },
});
