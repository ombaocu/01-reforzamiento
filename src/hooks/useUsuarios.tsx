import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const useUsuarios = (currentPage: number = 1) => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    
    const paginaRef = useRef(currentPage);

     useEffect(() => {
        console.log("Entro al useEffect");
        return () => {
            console.log("Se ejecuto el cargar usuarios");
            cargarUsuarios();
          }
    }, [])


    const cargarUsuarios = async () => {
        //   Llamando a la api
        try {
            const res = await reqResApi
          .get<ReqResListado>("/users", {
              params:{
                  page: paginaRef.current
              }
          })
            if (res.data.data.length > 0){
                setUsuarios(res.data.data);
            }
            else{
                paginaRef.current --;
                alert("No hay mas registros");
            }
        } catch (error) {
          console.error(error);
        }
    };

    const paginaSiguiente = () => {
        paginaRef.current ++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if (paginaRef.current > 1)
        {
            paginaRef.current --;
            cargarUsuarios();
        }
    }
    
    return {
        usuarios, 
        paginaSiguiente,
        paginaAnterior,
        paginaActual: paginaRef.current
    }
      
}
