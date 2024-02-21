import React, {useState} from "react";
import { TextInput, View, ImageBackground, StyleSheet, Text, Button} from "react-native";


const Chat = () => {
    const [prompt, setPrompt] = useState('')
    const [result, setResult] = useState('')

    const getResultFromOpenApi = async () => {
        try {
            const response = await fetch('http://localhost:9004/openapi', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({prompt})
            })
            const jsonData = await response.json()
            setResult(`${jsonData.result} y los token utilizados fueron 32 `)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <ImageBackground source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QDPRXhpZgAASUkqAAgAAAABAA4BAgCtAAAAGgAAAAAAAABBSSwgTWFjaGluZSBsZWFybmluZywgSGFuZHMgb2Ygcm9ib3QgYW5kIGh1bWFuIHRvdWNoaW5nIG9uIGJpZyBkYXRhIG5ldHdvcmsgY29ubmVjdGlvbiBiYWNrZ3JvdW5kLCBTY2llbmNlIGFuZCBhcnRpZmljaWFsIGludGVsbGlnZW5jZSB0ZWNobm9sb2d5LCBpbm5vdmF0aW9uIGFuZCBmdXR1cmlzdGljLv/hBctodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iPgoJPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KCQk8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOklwdGM0eG1wQ29yZT0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcENvcmUvMS4wL3htbG5zLyIgICB4bWxuczpHZXR0eUltYWdlc0dJRlQ9Imh0dHA6Ly94bXAuZ2V0dHlpbWFnZXMuY29tL2dpZnQvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwbHVzPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3htcC8xLjAvIiAgeG1sbnM6aXB0Y0V4dD0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcEV4dC8yMDA4LTAyLTI5LyIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgcGhvdG9zaG9wOkNyZWRpdD0iR2V0dHkgSW1hZ2VzL2lTdG9ja3Bob3RvIiBHZXR0eUltYWdlc0dJRlQ6QXNzZXRJRD0iMTIwNjc5NjM2MyIgeG1wUmlnaHRzOldlYlN0YXRlbWVudD0iaHR0cHM6Ly93d3cuaXN0b2NrcGhvdG8uY29tL2xlZ2FsL2xpY2Vuc2UtYWdyZWVtZW50P3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsIiA+CjxkYzpjcmVhdG9yPjxyZGY6U2VxPjxyZGY6bGk+aXBvcGJhPC9yZGY6bGk+PC9yZGY6U2VxPjwvZGM6Y3JlYXRvcj48ZGM6ZGVzY3JpcHRpb24+PHJkZjpBbHQ+PHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5BSSwgTWFjaGluZSBsZWFybmluZywgSGFuZHMgb2Ygcm9ib3QgYW5kIGh1bWFuIHRvdWNoaW5nIG9uIGJpZyBkYXRhIG5ldHdvcmsgY29ubmVjdGlvbiBiYWNrZ3JvdW5kLCBTY2llbmNlIGFuZCBhcnRpZmljaWFsIGludGVsbGlnZW5jZSB0ZWNobm9sb2d5LCBpbm5vdmF0aW9uIGFuZCBmdXR1cmlzdGljLjwvcmRmOmxpPjwvcmRmOkFsdD48L2RjOmRlc2NyaXB0aW9uPgo8cGx1czpMaWNlbnNvcj48cmRmOlNlcT48cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz48cGx1czpMaWNlbnNvclVSTD5odHRwczovL3d3dy5pc3RvY2twaG90by5jb20vcGhvdG8vbGljZW5zZS1nbTEyMDY3OTYzNjMtP3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsPC9wbHVzOkxpY2Vuc29yVVJMPjwvcmRmOmxpPjwvcmRmOlNlcT48L3BsdXM6TGljZW5zb3I+CgkJPC9yZGY6RGVzY3JpcHRpb24+Cgk8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJ3Ij8+Cv/tAPZQaG90b3Nob3AgMy4wADhCSU0EBAAAAAAA2hwCUAAGaXBvcGJhHAJ4AK1BSSwgTWFjaGluZSBsZWFybmluZywgSGFuZHMgb2Ygcm9ib3QgYW5k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ASACQAAgAAAAAwAoCAEgoAABAGAgBoIBgIAICABAAAgIAgAAQIAgBAEAAIAwCACAACAQAAAAACAAQAQAAAABBIkCJAgQIUCARADAEACBkwCIAEgAAcEAKgAMAAGAwFAACAABAACADAEFAEgCAAAgAwAIAANAAAAIgAgAAAAAEAAgBAAACRKYEABgBAIAMAAABBkCxAQAAEAAICAAaEAFEAIQCAACAAEAAAEBAAwgCYEDAoG/gAAABAAAgSACAAQABgACQARCAIABIAgCCCQoQAASJEgABAACiACgAAQAA9MLASSRAEEMAEAAAOAgFAAkAAAAOAJAAACgICBABAAQAACAQADAAAAgAIAIAgDADAAUAAERIAAQUADQACAQAQIECBEgAAAAEWBCgABAAAfZQNyAASJEgYQIAQAAICAAAgAAAAjA4EBoRMBBhCggJCCAiAAAEgAAARABQgAKAABAAAEAAgGyIAkAABIhQBKAAAAAAEIBAQABAUAAQCAQEABoAIBAAASEAAgAAGgkQIACQSAAYACAABgADAgCBAgABEBQAGggD0uQAA3ACUIAkgABsqAIBRAeCACwAAAAgIEAAACAAGAAACJAAEICAQAgIACAAAABABAKAAGgAgDAUBsyDAIAwAkBoFABAAIABoIAIAAAYAAAAAAEAgAAEAAIBAA0EAAABGIEAIAAAQAAAAAANACAAgISSSCYAABs8lACAAAgRAAgJSGBAIACCANgiEAGggAMCAAAoJAAABEAAgAwAAQAIAEAAgYAoQAYAAEAACAEgGgAGgAGgDAAKAAIAABQAAABAUAgYAwCABoAFAAgEYAAkiSBAKQaACAENAAAAAASIEiRoIAgIAAkYAAGgDAgAABAIIAaEAAAQgAEhAAICBAABoAIAAABAAABgACQAABAAAgEABAEAAwBIUAAAYAAAgACQA0EBoICACAgQHAAAAAAwAgAkAQBQAggEAAoACgAASAAEAAAAyhAD2gggAACBEgQIECIgAAAAAgA9eUEjgsAAOokSAAFgAAwAADEhAJAQAAUAAFAAIAgAoIAgAAAAAAEAABut/FoBQANAAQADAQABBIANAAMAAoTAAAAAAAoAgASANAAAEACAggAAAAAAA8m4QAAYAAEAAAEAEQAQIAAAiQIBAgAUAjAAJABhAANAAYAIIACAADQQCAgBgBAAAAEABAABAACAAAKCRBgAAEAQBQAQAQgAIBAAAgAACABQAIANCCQCAMAIAYAANAAIAEAAEBgKAEAAIAABgAAICEAAHxUQCGAAChAAAAgSEAUEgQNDAQAAQBAAIEAQAAAQUAAAAEAAGgAAAAQQAAkBACJBoCAAADAgABAAAKACAAEAAACAAgAEAAAEAAAAAAADAQAAGhAEAgAAKAAIBoAQAAgACAgAGDCIEAECQQBBAkSMBIBAIAEBAABgAAAOOAIAAAMABAAAAAAAAAAAAIAYABABIBDQAAKAAAoAAwAgAAADOGADDRQANAAYAAAAQAAAAAUAAAAEGAKAAAJAAAUAAAA6AgCQCA0A0AAEAJBIAQYgABoAwCgEAAAAEAABQAGECAgIADRGSBoAqAhQBAhgACAUAggAEABgNBDqcYfiSAMASQgAAaCgYIAABAAAoAADAIAIACAAABQAICBiAAaAAQACAIAEgAAA0AAIAAAAEaAAAAwAAAAGAgAAAAAAAAUCAMAAAQAAEAAAAAAAKAgBQIAEBAAGgCAxDLYsIEQHAAYAoAQAADAAEgAAYAMACAAACQSEwAA0AhAAwACAEBAwAgBgAAwQIIEBADAYQCDAB7cQGAAezkEAJAAECJAEAQAAgIEAAAgAAQRIAMHQgAQlIAABFqpDuXAWAAAgIAPSmAANYIAgAAAFAADzcAAAAWAACAAAAQAYADAQYAAKIBoAAABoEAYAAgMBAAgKJIAQCDQGRABgBoQECgAAgIAAAABQggDAQoAAEBYQKAgNYAEGhgEAEAAEAgIACkADAASAQAAIAAGgACkMIkCAAEAAAAAQAAAAQYgB4gEEAADBAQBQBBAgAgDAEQCQGAAAAEAAGBuSAAAYJOkCQggwAJADAYAAaAwAgFAIFAAACQFAYCQAAgANAGAAMAABhEAAQAgAANAAACIAPcAAQiIY6CgBAAB4ENABRAA7ARQEAARokBAsIABYIwEASAkNAigEIAQ8mRAAAIBQAAANAAIAwQAgAEgg0ABABJBAMAaAAEBQgAAbAA8CBoAQG2YQABUAgASABoAAACAoIABAAAMDAEBAAoAAIAA0AAQACRAIAAoAAAZgAACAYYQDABAqIAAAABABAEIAgEAAAAQAAACAJjAQBQoQMEgADHBEACgAIgMZAAEABvDICgCAAAAKACAI0JAAsAagQIEAAkAAgjDASkOaNON9sdqoYdgPhQnBASGDRtD/9k=' }} style={styles.container}>
            <Text style={styles.text}>
                {'Ingrese El numero que desea convertir a binario'}
            </Text>
            <TextInput style={styles.input} value={prompt} onChangeText={setPrompt} />
            <Button title={'Enviar'} onPress={getResultFromOpenApi} />
            <Text style={styles.text}>
                {result}
            </Text>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default Chat