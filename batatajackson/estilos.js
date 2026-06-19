import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(177, 172, 172)",
  },
  texto: {
    fontSize: 50,
    marginBottom: 20,
    marginTop: 30,
    fontStyle: "Bold",
  },

  BoxIcones: {
    // width: "100%",
    // alignItems: "center",
  },

  boxTitulo:{
    fontSize: 20,
    marginTop: 15,
    marginBottom: 0,
    fontStyle: "Bold",
    backgroundColor: "white",
    width: 350,
    padding: 10,
    textAlign: "left",
    borderRadius: 5,
  },

  IconesLista:{
    display: "flex",
    flexDirection: "row",
    width: 350,
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    marginTop: -10,
  }

});

export default estilos;