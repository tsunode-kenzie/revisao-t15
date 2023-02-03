import { useEffect, useState } from "react"

export function BroadcastModal() {
    const [channel, setChannel] = useState(null);

    useEffect(() => {
        if(!channel) {
            console.log('Canal vinculado')
            setChannel(new BroadcastChannel('revisao-t15'));
        } else {
            channel.onmessage = event => {
                console.log('Fui chamado', event)
            }
        }

        return () => {
            if(channel) {
                console.log('Canal desligado')
                channel.close();
            }
        }
    }, [channel])

    const sendMessage = () => {
        channel.postMessage('Olá');
    }

    return(
        <div>
            Modal

            <button onClick={sendMessage}>Enviar mensagem</button>
        </div>
    )
}