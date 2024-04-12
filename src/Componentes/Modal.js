import { View, TouchableOpacity, Modal } from "react-native";
import { styles } from "../style/Style";
// Importando componentes
import TxtComponents from "./TxtComponents";

export default function MdComponent({ md, setModal, Textos, funcao }) {
  return (
    <Modal visible={md} onRequestClose={setModal}>
      <View style={styles.containerModal}>
        <View style={styles.caixaModal}>
          {/* Titulo Modal */}
          <TxtComponents
            estilos={styles.tituloModal}
            Textos="Conversão para Fahrenheit"
          />

          {/* Texto de resultado */}
          <TxtComponents estilos={styles.resultado} Textos={Textos} />

          {/* Fechar Modal/Botão */}
          <TouchableOpacity style={styles.BtnModal} onPress={funcao}>
            {/* Titulo do botão */}
            <TxtComponents
              estilos={styles.TxtModal}
              Textos="CALCULAR NOVAMENTE"
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
