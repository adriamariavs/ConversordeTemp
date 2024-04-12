import { Text } from "react-native";

export default function TxtComponents({Textos, estilos}){
    return(
        <Text style={estilos}> {Textos} </Text>
    )
}