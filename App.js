import React, {Component} from 'react';
import { ImageBackground, Image, Text, View, StatusBar, ScrollView } from 'react-native';
import Dimensions from 'Dimensions'

const windowSize = Dimensions.get('window');
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
      width: (0.45 * windowSize.width),
      height: (0.15 * windowSize.width),
      marginBottom: 25,
      alignSelf: 'center'
  },
  scrollViewStyle: {
    paddingTop: '38%'
  }
}
