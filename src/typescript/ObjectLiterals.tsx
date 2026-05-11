
interface Persona {
    age: number;
    firstName: string;
    lastName: string;
    address: {
        country: string;
        houseNo: number;
    }

}

const ObjectLiterals = () => {

    const persona: Persona = {
        age: 38,
        firstName: 'Fernando',
        lastName: 'Herrera',
        address: {
            country: 'Canada',
            houseNo: 615
        }
    }




    return (<>

        <h3>Objetos literales</h3>

        <pre>
            {JSON.stringify(persona, null, 2)}
        </pre>

    </>);

}

export default ObjectLiterals

