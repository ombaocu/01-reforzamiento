import { useUsuarios } from '../hooks/useUsuarios';
import {  Usuario } from '../interfaces/reqRes';


export const Usuarios = () => {

   const {usuarios, paginaAnterior, paginaSiguiente, paginaActual} = useUsuarios();

    const renderItem = ({id, first_name, last_name, email, avatar}: Usuario) => {
        return (
            <tr key={id}>
                <td>
                    <img 
                        src={ avatar } 
                        alt={ first_name }
                        style ={{
                            width: 50,
                            borderRadius: 100,
                        }}
                    />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
            );
    }
    return (
        <>
            <h3>Usuarios</h3>

            <table className="table">
                <thead>
                    <tr>
                        <td>Avatar</td>
                        <td>Nombre</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(usuario => renderItem(usuario))
                    }
                </tbody>
            </table>
            <button 
                type="button" 
                className="btn btn-primary"
                onClick={paginaAnterior}
            >
                    Anteriores
            </button>
            &nbsp; {paginaActual} &nbsp;
            <button 
                type="button" 
                className="btn btn-primary"
                onClick={paginaSiguiente}
            >
                    Siguientes
            </button>
        </>
    )
}
