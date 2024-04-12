import { View, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { styles } from "./src/style/Style";
// Importando componentes
import TxtComponents from "./src/Componentes/TxtComponents";
import TxtInput from "./src/Componentes/TxtInput";
import MdComponent from "./src/Componentes/Modal";

export default function App() {
  //Variaveis de estado de valores
  const [celsius, setCelsius] = useState("");
  const [resultado, setResultado] = useState("");
  const [modal, setModal] = useState(false);

  //Função de calculo e alerta para campo vazio
  const conversao = () => {
    const fahrenheit = (celsius * 9) / 5 + 32;
    if (celsius === "") {
      alert("Preencha o campo para realizar o cálculo!");
    } else {
      //Função do resultado
      setResultado(fahrenheit);
      setModal(true);
    }
  };

  // Função para fechar modal e apagar o valor
  const calcularNovamente = () => {
    setCelsius("");
    setModal(false);
  };

  return (
    <View style={styles.container}>
      {/* View para caixa de fundo (css) */}
      <View style={styles.caixa}>
        {/* Titulo da pagina */}
        <TxtComponents
          estilos={styles.titulo}
          Textos="Conversão de Temperatura"
        />

        {/* TextInput para colocar a valor para realizar o calculo */}
        <TxtInput
          styleinput={styles.TextInput}
          valor={celsius}
          texto="VALOR"
          textochamar={setCelsius}
        />

        {/* Botão para calculo */}
        <TouchableOpacity style={styles.Btn} onPress={conversao}>
          {/* Titulo do botão */}
          <TxtComponents estilos={styles.Txt} Textos="CALCULAR" />
        </TouchableOpacity>
      </View>

      {/* Abrir modal */}
      <MdComponent
        md={modal}
        setModal={setModal}
        Textos={resultado}
        funcao={calcularNovamente}
      />
    </View>
  );
}
