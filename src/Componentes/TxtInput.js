import { TextInput } from "react-native";

export default function TxtInput({styleinput, valor, texto, textochamar}){
    return(
        <TextInput style={styleinput} value={valor} placeholder={texto} onChangeText={textochamar} />
    )
}