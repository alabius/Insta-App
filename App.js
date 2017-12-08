import React, {Component} from 'react';
import { ImageBackground, Image, Text, View, StatusBar, ScrollView } from 'react-native';
import Dimensions from 'Dimensions';
//import custom Component
import LoginButton from './src/components/LoginButton';

const windowSize = Dimensions.get('window');

//size definistions HERE
const standardComponentWidth = (0.82*windowSize.width)

const colors= {
  facebook:'rgb(59, 89, 152)',
  text: 'rgba(255, 255, 255, 0.7)',
  socialMediaButtonBorderColor: 'rgba(255, 255, 255, 0.35)'
}

const sizes = {

  buttonHeight: 45,
  pageFontSize: 12,
  borderWidth: 0.8,
  borderRadius: 5
}
export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  loginScreenComponent = () =>{
    return(
      <ImageBackground
        style={viewstyles.container}
        resizeMode={'cover'}
        source={require('./src/images/Instabackground.jpg')}
        >
        <StatusBar
          backgroundColor={'transparent'}
          barStyle={'light-content'}
        />
        <ScrollView  style ={viewstyles.scrollViewStyle}>
          <Image
            style={viewstyles.instagramLogo}
            resizeMode={'contain'}
            source={require('./src/images/instagram-text-logo.png')}
          />
        </ScrollView>

      </ImageBackground>
    );

  }

  render() {
    return (
      this.loginScreenComponent()
    );
  }
}

const viewstyles = {
  container: {
    flex: 1,
    alignItems: 'center',
  },
  instagramLogo:{
      width: (0.50 * windowSize.width),
      height: (0.15 * windowSize.width),
      marginBottom: 25,
      alignSelf: 'center'
  },
  scrollViewStyle: {
    paddingTop: '38%'
  }
}
