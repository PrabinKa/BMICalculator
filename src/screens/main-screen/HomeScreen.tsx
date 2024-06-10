import React, {useState, useContext} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {ABSOLUTE_VALUE, IMAGE_PATH} from '~/constants';
import {Button, ErrorMessage, InputForm} from '~/components';
import {GlobalContext} from '~/context/GlobalContext';

interface homeScreenProps {
  navigation: any;
}

type inputIdentifier = string;
type inputValue = string;

const HomeScreen = ({navigation}: homeScreenProps) => {
  const {
    container,
    titleWrapper,
    buttonWrapper,
    textBMI,
    calculatorOuterWrapper,
    calculatorInnerWrapper,
    textCalculator,
    calculationFactorText,
  } = styles;

  const [userInputs, setUserInputs] = useState({
    ageValue: '',
    heightValue: '',
    weightValue: '',
  });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const {calculateBMI} = useContext(GlobalContext);

  //assign user inputed values to userInputs state
  const inputChangeHandler = (
    identifier: inputIdentifier,
    value: inputValue,
  ) => {
    setUserInputs(curInput => {
      return {
        ...curInput,
        [identifier]: value,
      };
    });
  };

  //function to close error box
  const handleOnClose = () => {
    setIsVisible(!isVisible);
  };

  const handleClaculation = () => {
    const {ageValue, heightValue, weightValue} = userInputs;

    if (ageValue && heightValue && weightValue) {
      const absoluteAge = Math.abs(Number(ageValue));
      const absoluteHeight = Math.abs(Number(heightValue));
      const absoluteWeight = Math.abs(Number(weightValue));
      const feetToMeter = (30.48 * absoluteHeight) / 100;
      calculateBMI(absoluteAge, feetToMeter, absoluteWeight);
      navigation.navigate('ResultScreen');
    } else {
      setMessage('Fill all the fields.');
      setIsVisible(!isVisible);
    }

    setUserInputs({
      ageValue: '',
      heightValue: '',
      weightValue: '',
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={container}>
      <View style={titleWrapper}>
        <Text style={textBMI}>{ABSOLUTE_VALUE.BMI}</Text>
        <Text style={textCalculator}>{ABSOLUTE_VALUE.CALC}</Text>
      </View>
      <View style={calculatorOuterWrapper}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Image
            source={IMAGE_PATH.man}
            resizeMode="contain"
            style={{height: '100%'}}
          />
        </View>
        <View style={calculatorInnerWrapper}>
          <View>
            <Text style={calculationFactorText}>{ABSOLUTE_VALUE.AGE}:</Text>
            <InputForm
              placeholder="Enter Age"
              onChangeText={inputChangeHandler.bind(this, 'ageValue')}
              value={userInputs.ageValue}
            />
          </View>
          <View>
            <Text style={calculationFactorText}>{ABSOLUTE_VALUE.HEIGHT}:</Text>
            <InputForm
              placeholder="Height in foot"
              onChangeText={inputChangeHandler.bind(this, 'heightValue')}
              value={userInputs.heightValue}
            />
          </View>
          <View>
            <Text style={calculationFactorText}>{ABSOLUTE_VALUE.WEIGHT}:</Text>
            <InputForm
              placeholder="Weight in KG"
              onChangeText={inputChangeHandler.bind(this, 'weightValue')}
              value={userInputs.weightValue}
            />
          </View>
        </View>
      </View>
      <View style={buttonWrapper}>
        <Button onPress={() => handleClaculation()}>Calculate</Button>
      </View>
      <ErrorMessage
        message={message}
        isVisible={isVisible}
        onClose={handleOnClose}
      />
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  calculatorOuterWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  calculatorInnerWrapper: {
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
  },
  textBMI: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#16375F',
    letterSpacing: 2,
  },
  textCalculator: {
    fontSize: 16,
    fontWeight: '500',
    color: '#16375F',
    marginTop: -10,
  },
  calculationFactorText: {
    color: '#16375F',
    fontSize: 20,
    fontWeight: '700',
  },
});
