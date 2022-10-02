
interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string,
    casaNo: string
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Orlando',
        edad: 41,
        direccion: {
            'pais': 'Cuba',
            'casaNo': '3917 Int A'
        }
    }

    persona.nombreCompleto = "Orlando";

    return (
        <>
            <h1>Objetos Literales</h1>
            <code>
                <pre>
                {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}
