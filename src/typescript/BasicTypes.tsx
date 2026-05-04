export const BasicTypes = () => {
    const name: string = 'Daniel';
    const age: number =  38;
    const isActive: boolean = true;


    return (
        <>
            <h3>Tipos Básicos</h3>

            {name} - {age} - {isActive ? 'Activo' : 'Inactivo'} 
        </>
    );

};

export default BasicTypes;
