/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Button,
  Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {

  state = {consumido: 0, status:'Ruim', pct: 0 };

  constructor(props){
    super(props);
    this.addCopo = this.addCopo.bind(this);
    this.atualizarDados = this.atualizarDados.bind(this);
    this.zerarDados = this.zerarDados.bind(this);
  }

  atualizarDados(){
    let s = this.state;
    //let meta = 2000;
    s.pct = ((s.consumido/2000)*100);

    if(s.pct < 50) {
      s.status = "Ruim"; 
    } else if (s.pct >= 50 && s.pct < 100) {
      s.status = "Bom";
    } else {
      s.status = "Ótimo"
    }

    this.setState(s);
  }

  addCopo () {
    let s = this.state;
    s.consumido += 200;
    this.setState(s);
    this.atualizarDados();
  }

  zerarDados (){
    let s = this.state;
    s.consumido = 0;
    this.setState(s);
    this.atualizarDados();
  }
  render(){
  return (
    <View style={styles.body}>
      <ImageBackground source={require('./images/fundoCopo2.jpg')}
      style={styles.bgImage}>
        <View>
          <View style={styles.infoArea}>
              <View style={styles.area}>              
                <Text style={styles.areaTitulo}>Meta diária </Text>
                <Text style={styles.areaDado}>2000ml</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Consumido </Text>
                <Text style={styles.areaDado}>{this.state.consumido}ml </Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Status % </Text>
                <Text style={styles.areaDado}>{this.state.status}</Text>
              </View>
          </View>
          <View style={styles.pctArea}>
                <Text style={styles.pctText}> {this.state.pct} % </Text>         
          </View>
          <View style={styles.btnArea}>
            <Button title ="Beber 200ml" onPress={this.addCopo}/>            
          </View>

          <View style={styles.btnArea}>
            <Button color="#ff5c5c" style={styles.buttonZerar} title ="Zerar Dados" onPress={this.zerarDados}/>
          </View>
      </View>
      </ImageBackground>
    </View>
  );
 }
};

const styles = StyleSheet.create({
    body:{
      flex: 1,
      paddingTop: 40
    },
    bgImage:{
      flex: 1,
      width: null
    },
    infoArea:{
      flex:1,
      flexDirection: 'row',
      marginTop: 70
    },
    area:{
      flex: 1,
      alignItems: 'center'
    },
    areaTitulo:{
      color: '#45b2fc'
    },
    areaDado:{
      color: '#2b4274',
      fontSize: 15,
      fontWeight: 'bold'
    },
    pctArea:{
      marginTop: 170,
      alignItems: 'center'
    },
    pctText:{
      fontSize: 70,
      color: 'black',
      backgroundColor:'transparent'
    },
    btnArea:{
      marginTop:30,
      alignItems: 'center'
    },
    buttonZerar:{
      marginTop:150,
      alignItems: 'center',
      backgroundColor: 'red'
    }
});
