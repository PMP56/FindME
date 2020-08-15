import axios from 'axios';

export const addData = (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify(data);
    axios.post('/api/database/', body, config)
        .then(
            (result) => console.log('Data added')
        )
        .catch(err => console.log(err));
}

export const getData = (id) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify(data);
    axios.get(`/api/database/${id}`, config)
        .then(
            (result) => console.log(result)
        )
        .catch(err => console.log(err));
}