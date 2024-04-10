import { View, Text, TextInput, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { styles } from "./src/style/Style";

export default function App() {
  //Estado de valores
  const [celsius, setCelsius] = useState("");
  const [resultado, setResultado] = useState("");
  const [modal, setModal] = useState(false);

  //Função de calculo
  const conversao = () => {
    const fahrenheit = (celsius * 9) / 5 + 32;

    //Chamando resultado
    setResultado(fahrenheit);
    setModal(true);
  };

  // Const para fechar modal e apagar o valor
  const calcularNovamente = () => {
    setCelsius("");
    setModal(false);
  }

    return (
      <View style={styles.container}>
        {/* View para caixa de fundo (css) */}
        <View style={styles.caixa}>
          {/* Titulo da pagina */}
          <Text style={styles.titulo}> Conversão de Temperatura </Text>

          {/* TextInput para colocar a valor para realizar o calculo */}
          <TextInput
            style={styles.TextInput}
            placeholder="VALOR"
            value={celsius}
            onChangeText={setCelsius}
          />

          {/* Botão para calculo */}
          <TouchableOpacity style={styles.Btn} onPress={conversao}>
            {/* Titulo do botão */}
            <Text style={styles.Txt}> CALCULAR </Text>
          </TouchableOpacity>

          {/* Texto de resultado */}
          <Text style={styles.resultado}> {resultado} </Text>
        </View>

        {/* Abrir modal */}
        <Modal visible={modal} onRequestClose={setModal}>
          <View>
            <TouchableOpacity
              style={styles.BtnModal}
              onPress={calcularNovamente}
            >
              {/* Titulo do botão */}
              <Text style={styles.TxtModal}> CALCULAR NOVAMENTE </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
}
