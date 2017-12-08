import React, {Component} from 'react';
import {Text, View, TouchableHighlight, Image} from 'react-native';

class LoginButton extends Component {
  constructor(props){
    super(props);
  }

  getViewComponent = () => {
  if(this.props.iconSource){
    return(
      <View style= {[this.props.buttonViewStyle, viewStyles.buttonViewStyle]}>
        <Image
          resizeMode={'contain'}
          style={[{width: 30, height: 30}, this.props.iconStyle]}
          source={this.props.iconSource}
        />
        <Text style={[this.props.buttonViewStyle, {backgroundColor:'transparent', marginLeft: 20}]}>{this.props.children}</Text>
      </View>
    );
  }
// this is for if the button has no icon
  else {
    <View style= {[this.props.buttonViewStyle, viewStyles.buttonViewStyle]}>
      <Text style={[this.props.buttonViewStyle, {backgroundColor:'transparent'}]}>{this.props.children}</Text>
    </View>
  }
  }
    render(){
      return(
        <TouchableHighlight>
            underlayColor={'transparent'}
            activeOpacity={this.props.activeOpacity}
            style={[this.props.touchableHighlightStyle, viewStyle.touchableHighlightStyle]}
            onPress={this.props.buttonTapped}
          <View style= {[this.props.buttonViewStyle, viewStyles.buttonViewStyle]}>
            <Text style={[this.props.buttonViewStyle, {backgroundColor:'transparent'}]}>{this.props.children}</Text>
          </View>
        </TouchableHighlight>
      )
  }

}
const viewStyles =  {
  TouchableHighlightStyle:{
    justifyContent: 'center',
    alighItems:'center'
  },
  buttonViewStyle:{
    flexDirection: 'row',
    justifyContent: 'center',
    alighItems:'center'
  }

};

const textStyles = {


};
export default LoginButton;
