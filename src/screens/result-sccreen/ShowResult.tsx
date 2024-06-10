import React, {useContext} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {ABSOLUTE_VALUE, IMAGE_PATH} from '~/constants';
import {UserInputs, NoteAboutBMI} from '~/components';
import {GlobalContext} from '~/context/GlobalContext';

interface showResultProps {
  navigation: any;
}

const ShowResult = ({navigation}: showResultProps) => {
  const {
    container,
    titleContainer,
    imageWrapper,
    imageStyle,
    pressableStyle,
    titleWrapper,
    titleStyle,
    scoreCardContainer,
    scoreTitleText,
    bmiScore,
    bmiResultText,
    userInputsWrapper,
  } = styles;

  const {bmiResult, age, height, weight} = useContext(GlobalContext);
  let fixedHeight = Number(height.toFixed(2));

  let bmiCategory =
    bmiResult < 18.5
      ? 'Underweight'
      : bmiResult >= 18.5 && bmiResult <= 24.9
      ? 'Normal'
      : bmiResult >= 25.0 && bmiResult <= 29.9
      ? 'Overweight'
      : 'Obesity';

  return (
    <View style={container}>
      <View style={titleContainer}>
        <View style={imageWrapper}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={({pressed}) => pressed && pressableStyle}>
            <Image source={IMAGE_PATH.BACK_BUTTON} style={imageStyle} />
          </Pressable>
        </View>
        <View style={titleWrapper}>
          <Text style={titleStyle}>{ABSOLUTE_VALUE.TITLE}</Text>
        </View>
      </View>
      <View style={scoreCardContainer}>
        <Text style={scoreTitleText}>{ABSOLUTE_VALUE.BMI_SCORE}</Text>
        <Text style={bmiScore}>{bmiResult?.toFixed(2)}</Text>
        <Text style={bmiResultText}>{bmiCategory}</Text>
        <View style={userInputsWrapper}>
          <UserInputs title="Age" value={age} />
          <UserInputs title="Height" value={fixedHeight} unit="m" />
          <UserInputs title="Weight" value={weight} unit="kg" />
        </View>
        <NoteAboutBMI/>
      </View>
    </View>
  );
};

export default ShowResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
  },
  titleContainer: {
    height: '10%',
    width: '100%',
    justifyContent: 'center',
  },
  imageWrapper: {
    height: 30,
    width: 30,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    tintColor: '#16375F',
  },
  pressableStyle: {
    opacity: 0.2,
  },
  titleWrapper: {
    position: 'absolute',
    left: '35%',
  },
  titleStyle: {
    color: '#16375F',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scoreCardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreTitleText: {
    color: '#16375F',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bmiScore: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#00CC00',
    marginTop: 30,
  },
  bmiResultText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00CC00',
  },
  userInputsWrapper: {
    width: '100%',
    marginVertical: 30,
    alignItems: 'center',
  },
});
