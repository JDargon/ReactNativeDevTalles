export const BasicTypes = () => {
    const name: string = 'Daniel';
    const age: number =  38;
    const isActive: boolean = true;

    const powers:string[] = ['React', 'ReactNative', 'Atro'];


    return (
        <>
            <h3>Tipos Básicos</h3>

            {name} - {age} - {isActive ? 'Activo' : 'Inactivo'} 

            <p>
                {powers.join(', ')}
            </p>

        </>
    );

};

export default BasicTypes;
