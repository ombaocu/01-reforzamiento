import { useForm } from "../hooks/useForm";

export const Formularios = () => {

   const {email, password, state, onChange} = useForm({
        email: 'test@gmail.com',
        password: '12345'
    });

  return (
    <>
        <h3>Formularios</h3>

        <input 
            className="form-control" 
            type="text"
            placeholder="Email"
            value={email}
            onChange={  ({target})  => onChange(target.value, 'email')}
            />


        <input 
            className="form-control mt-2 mb-2" 
            type="text"
            placeholder="Password"
            value={password}
            onChange={  ({target})  => onChange(target.value, 'password')}
            />

            <code>
                <pre>
                    {JSON.stringify(state, null, 2)}
                </pre>
            </code>
    </>
  )
}
