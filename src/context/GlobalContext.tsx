import {ReactNode, createContext, useState} from 'react';


interface initialValue {
  calculateBMI: (prop1: number, prop2: number, prop3: number) => void;
  bmiResult: number;
  age: number;
  height: number;
  weight: number;
}

interface contextProviderProp {
  children: ReactNode;
}

export const GlobalContext = createContext<initialValue>({
  calculateBMI: () => {},
  bmiResult: 0,
  age: 0,
  height: 0,
  weight: 0,
});

const ContextProvider = ({children}: contextProviderProp) => {
  const [bmiResult, setBmiResult] = useState<number>(0);
  const [age, setAge] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);

  const calculateBMI = (age: number, height: number, weight: number) => {
    const result = weight / (height * height);
    setAge(age);
    setHeight(height);
    setWeight(weight);
    setBmiResult(result);
  };
  return (
    <GlobalContext.Provider
      value={{calculateBMI, bmiResult, age, height, weight}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
