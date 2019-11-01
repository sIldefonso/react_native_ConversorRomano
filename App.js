import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity
} from 'react-native';

export default class ConversorRomano extends Component {

  //Construtor
  constructor(props) {
    super(props);
    this.state = {
      romanNumber: '',
      arabicNumber: ''
    }
  }

  //Render
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View>
              <Text style={styles.titleText}>Conversor Romano</Text>
            </View>
            <View style={styles.view}>
              <Text style={styles.subtitleText}>Romano para Árabe</Text>
              <TextInput
                style={styles.text}
                autoCapitalize='characters'
                onChangeText={text => this.setState({ romanNumber: text })}>
              </TextInput>
            </View>
            <View style={styles.view}>
              <TextInput
                editable={false}
                value={this.state.arabicNumber}
                style={styles.resultText}
              >

              </TextInput>
            </View>
            <View>
              <TouchableOpacity
                style={styles.okButton}
                onPress={
                  () => {
                    //Calcular resultado
                    this.Converter();
                  }
                }
              >
                <Text style={styles.buttontext}> CONVERTER </Text>
              </TouchableOpacity>
            </View>

          </ScrollView>
        </SafeAreaView>
      </>
    );
  }

  Converter() {
    var str = this.state.romanNumber;
    var previousChar = '0';
    let result = 0;
    
    for (let i = 0; i < str.length; i++) {
      //Obter o caracter anterior
      if (i > 0) {
        previousChar = str.charAt(i - 1);
      }
      if (str.charAt(i) === 'M') {
        if (previousChar === 'C') {
          result -= 100;
        }
        result += 1000;
      }
      else if (str.charAt(i) === 'D') {
        if (previousChar === 'C') {
          result -= 100;
        }
        result += 500;
      }
      else if (str.charAt(i) === 'C') {
        if (previousChar === 'X') {
          result -= 10;
        }
        result += 100;
      }
      else if (str.charAt(i) === 'L') {
        if (previousChar === 'X') {
          result -= 10;
        }
        result += 50;
      }
      else if (str.charAt(i) === 'X') {
        if (previousChar === 'I') {
          result -= 1;
        }
        result += 10;
      }
      else if (str.charAt(i) === 'V') {
        if (previousChar === 'I') {
          result -= 1;
        }
        result += 5;
      }
      else if (str.charAt(i) === 'I') {
        result += 1;
      }
    }
    this.setState({ arabicNumber: '' + result });
  }
}


//Styles
const styles = StyleSheet.create({
  titleText: {
    color: '#36213E',
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: '#63768D',
    fontWeight: 'bold',
  },
  subtitleText: {
    color: '#EEE3AB',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    textAlign: 'center'
  },
  resultText: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#8BE8CB',
    borderRadius: 20,
    textAlign: 'center'
  },
  view: {

    marginBottom: 5,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  okButton: {
    marginLeft: 80,
    marginRight: 80,
    marginTop: 5,
    marginBottom: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#EEE3AB',
    alignItems: 'center'
  },
  scrollView: {
    backgroundColor: '#303633',
  }

});

