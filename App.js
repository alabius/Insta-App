import React, {Component} from 'react';

import { ImageBackground, Image, Text, View, StatusBar, ScrollView, Linking } from 'react-native';

import Dimensions from 'Dimensions';

//import custom Component
import LoginButton from './src/components/LoginButton';

//import TappableText
import TappableText from './src/components/TappableText';

//create responsive diments for all devices
const windowSize = Dimensions.get('window');

//size definistions HERE
const standardComponentWidth = (0.82 * windowSize.width)

import CellUserDataBar from './src/components/CellUserDataBar';

const colors= {
  facebook:'rgb(59, 89, 152)',
  text: 'rgba(255, 255, 255, 0.7)',
  socialMediaButtonBorderColor: 'rgba(255, 255, 255, 0.35)'
}

const sizes = {

  buttonHeight: 45,
  pageFontSize: 12,
  borderWidth: 0.8,
  borderRadius: 5,
  twitterIcon: 25
}
const urls = {
  forgotInstagramLogin: 'https://www.instagram.com/accounts/password/reset',
  twitterLogin: 'https://twitter.com/login?lang=en',
  instagramSignUp: 'https://www.instagram.com/accounts/emailsignup/?hl=en',
  instagramAuthLogin: 'https://api.instagram.com/oauth/authorize/?client_id=cda6dee7d8164a868150910407962f52&redirect_uri=http://www.kaitechconsulting.com&response_type=token&scope=basic+follower_list+comments+likes',
  instagramLogout: 'https://instagram.com/accounts/logout',
  instagramBase: 'https://www.instagram.com/',
};
export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }
  buttonTapped = () =>{
    console.log ('Button succesfully tapped');
  }

  signUpFooterComponent = () => {
    return(
      <View style={viewStyles.signUpFooter}>
       {this.forgotLoginDetailsComponent('Dont have an account', 'Sign up', urls.instagramSignUp)}
      </View>
    );
  }

  loginWithTwitterComponent = () =>{
    return(
      <View style={viewStyles.twitterLogin}>
        <Image
          resizeMode={'contain'}
          style={viewStyles.twitterIcon}
          source={require('./src/images/icons/twitter_bird.png')}
        />
        <TappableText
          textStyle={[textStyles.forgotLoginDetails, textStyles.forgotLoginDetailsBold, {fontSize: 12}]}
          textTapped={() => Linking.openURL(urls.twitterLogin) }
        >
          Login with Twitter
        </TappableText>
      </View>
    );

  }

  forgotLoginDetailsComponent = (normalText, boldText, url) =>{
    return(
      <View style={viewStyles.forgotLoginDetails}>
        <Text style={textStyles.forgotLoginDetails}>{normalText}</Text>
        <TappableText
          textStyle={[textStyles.forgotLoginDetails, textStyles.forgotLoginDetailsBold]}
          textTapped={ () => Linking.openURL(url) }
        >
        {boldText}
        </TappableText>
      </View>
    );
  }
  orSepratorComponent = () =>{
    return(
      <View style={viewStyles.orSeparatorContainer}>
        <View style={viewStyles.orSeparatorLine}/>
        <Text style={textStyles.orSeparatorTextStyle}>OR</Text>
        <View style={viewStyles.orSeparatorLine}/>
      </View>
    );
  }

  loginScreenComponent = () =>{
    return(
      <ImageBackground
        style={viewStyles.container}
        resizeMode={'cover'}
        source={require('./src/images/Instabackground.jpg')}
        >
        <StatusBar
          backgroundColor={'transparent'}
          barStyle={'light-content'}
        />
        <ScrollView  style ={viewStyles.scrollViewStyle}>
          <Image
            style={viewStyles.instagramLogo}
            resizeMode={'contain'}
            source={require('./src/images/instagram-text-logo.png')}
          />

          <LoginButton
            buttonViewStyle={viewStyles.instagramLoginButtonView}
            buttonTextStyle={textStyles.instagramLoginButtonTextStyle}
            buttonTapped={this.buttonTapped}
            touchableHighlightStyle={viewStyles.instagramLoginButtonTouchableHighlightStyle}
            activeOpacity={0.75}
          >
            Log In (Via instagram)
          </LoginButton>

          <LoginButton
            buttonViewStyle={[viewStyles.instagramLoginButtonView, viewStyles.facebookLoginButtonView]}
            buttonTextStyle={textStyles.instagramLoginButtonTextStyle}
            buttonTapped={this.buttonTapped}
            touchableHighlightStyle={[viewStyles.instagramLoginButtonTextStyle, viewStyles.facebookHighlightView]}
            activeOpacity={0.75}
            iconSource={require('./src/images/facebook-white-logo.png')}
          >
            acebook
          </LoginButton>

          {this.forgotLoginDetailsComponent('Having issues logging in,', 'Get help here', urls.forgotInstagramLogin)}
          {this.orSepratorComponent()}
          {this.loginWithTwitterComponent()}

        </ScrollView>

        {this.signUpFooterComponent()}

      </ImageBackground>
    );

  }

  render() {
    return (
      this.loginScreenComponent()
    );
  }
}

const viewStyles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  instagramLogo:{
      width: (0.50 * windowSize.width),
      height: (0.15 * windowSize.width),
      marginBottom: 25,
      alignSelf: 'center'
  },
  scrollViewStyle: {
    paddingTop: '38%'
  },
  instagramLoginButtonView:{
    backgroundColor: 'transparent',
    borderColor: colors.socialMediaButtonBorderColor,
    borderWidth:sizes.borderWidth,
    borderRadius: sizes.borderRadius,
    width: standardComponentWidth,
    height: sizes.buttonHeight
  },
  instagramLoginButtonTouchableHighlightStyle:{
    width: standardComponentWidth,
    height: sizes.buttonHeight
  },
  facebookLoginButtonView:{
    backgroundColor: colors.facebook
  },
  facebookHighlightView:{
    marginTop: 20,
    marginBottom:10
  },
  forgotLoginDetails:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop:10
  },
  orSeparatorContainer:{
    flexDirection:'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12
  },
  orSeparatorLine:{
    height: 1,
    flex: 5,
    backgroundColor: colors.socialMediaButtonBorderColor,
    borderColor: colors.socialMediaButtonBorderColor,
    borderWidth:0.5,
    marginHorizontal:5
  },
  twitterLogin:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop:10
  },
  twitterIcon:{
    width: sizes.twitterIcon,
    height: sizes.twitterIcon,
    marginHorizontal:5
  },
  signUpFooter:{
    flex:0.3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderColor: 'rgba(255, 255, 255, 0.25)',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5.5},
    width: '100%'
  }
};
const textStyles = {
  instagramLoginButtonTextStyle:{
    color: colors.text,
    fontWeight: '500'
  },
  forgotLoginDetails:{
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: sizes.pageFontSize,
    marginRight: 3
  },
  forgotLoginDetailsBold:{
    fontWeight: 'bold'
  },
  orSeparatorTextStyle:{
    color:'white',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    fontSize: 13
  }

}
