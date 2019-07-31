import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import {styles} from './styles'

class Card extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
    render() {
      return (
        <View style={styles.cardStyle}>
          <CardGrid iconFlex={this.props.iconFlex} width={this.props.width} textFlex={this.props.textFlex} img={this.props.img}>
            {this.props.children}
          </CardGrid>
        </View>
      );
    }
  }
  
  export class CardGrid extends Component {
    render() {
      return (
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <View style={{ flex: this.props.iconFlex, padding: 10 }}>
            <Image source={this.props.img} style={{ flex: 1, width: this.props.width, height: undefined }} />
          </View>
  
          <View style={{ flex: this.props.textFlex, margin: 10, marginLeft: 15 }}>
            {this.props.children}
          </View>
        </View>
      )
    }
  }

export default Card;
