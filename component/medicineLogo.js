import React from 'react';
import LottieView from 'lottie-react-native';

export default class medicineLogo extends React.Component {
  render() {
    return <LottieView source={require('../assets/medicine.json')} 
                       style={{width: '60%'}}
                       autoPlay loop />;
  }
}