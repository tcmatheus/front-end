const getTokenAuth = async (authorizationCode) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: authorizationCode })
    };

    try {
        const response = await fetch('http://localhost:4004/api/oauth/code', requestOptions);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
       console.error("Erro na obtenção do Token: ", error); 
    }
}   