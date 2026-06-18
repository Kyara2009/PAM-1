import React from "react";
import { Text, View } from "react-native";
import {FontAwesome, Entypo, MaterialIcons} from '@expo/vector-icons';

import estilos from "./estilos";

export default function App () {
  return (
    <View style={ estilos.container }>
      {/* <View style={estilos.BoxIcones}> */}
      <Text style={ estilos.boxTitulo }>FontAwesome</Text>

      <View style={estilos.IconesLista}>
      <FontAwesome name="heart" size={40} color="red" />
      <FontAwesome name="glass" size={40} color="#b5ece3ff" />
      <FontAwesome name="music" size={40} color="yellow" />
      <FontAwesome name="search" size={40} color="blue" /> 
      <FontAwesome name="envelope-o" size={40} color="purple" />
      <FontAwesome name="user" size={40} color="green" />
      <FontAwesome name="check" size={40} color="cyan" />
      </View>

      {/* </View> */}

      {/* <View style={estilos.BoxIcones}> */}
      <Text style={estilos.boxTitulo}>Entypo</Text>

      <View style={estilos.IconesLista}>
      <Entypo name="address" size={40} color="gray" />
      <Entypo name="500px" size={40} color="pink" />
      <Entypo name="add-user" size={40} color="blue" />
      <Entypo name="adjust" size={40} color="yellow" />
      <Entypo name="aircraft" size={40} color="green" />
      <Entypo name="app-store" size={40} color="purple" />
      </View>
      {/* </View> */}
      
      {/* <View style={estilos.BoxIcones}> */}
      <Text style={estilos.boxTitulo}>MaterialIcons</Text>

      <View style={estilos.IconesLista}>
     <MaterialIcons name="123" size={40} color="pink" />
     <MaterialIcons name="360" size={40} color="red" />
     <MaterialIcons name="10k" size={40} color="purple" />
     <MaterialIcons name="10mp" size={40} color="yellow" />
     <MaterialIcons name="11mp" size={40} color="blue" />
     <MaterialIcons name="12mp" size={40} color="green" />
      </View>
      {/* </View> */}
    </View>
  )
};