import spinnerImg from '../../assets/video/Spiner.gif'

async function handleLogin(e){
    e.preventDefault();

    if(validation){
        setValidationId('Invalido');
        return;
    }else{
        setValidationId('');

        try {

            const response = await api.post('session', { id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            await timeOutSpinner();

            history.push('/profile');

        } catch (err) {
            console.log(err);
            alert('Falha no login');
        }
    }

}

    function timeOutSpinner(){
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 8000);
    }