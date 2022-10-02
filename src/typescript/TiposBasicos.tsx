
export const TiposBasicos = () => {

    const nombre: string | number = 'Orlando';
    const edad = 35;
    const estaActivo: boolean = true;

    const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua'];

    return (
        
        <>
            <h3>Tipos basicos</h3>
            {nombre}, {edad} {estaActivo ? 'activo' : 'no activo'}
            <br />

            { poderes.join(', ')}
        </>
    )
}
