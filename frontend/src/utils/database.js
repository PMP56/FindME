import axios from 'axios';

const deleteData = (id) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    axios.delete(`/api/database/${id}`, config).then((result) => console.log("Deleted")).catch(err => console.log(err.response.data));
}

const addData = (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify(data);
    axios.post('/api/database/', body, config)
        .then(
            (result) => console.log('Data added')
        ).catch(err => console.log(err.response.data))
}

export const updateData = (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify(data);
    //console.log(body);
    axios.post('/api/database/', body, config)
        .then(
            (result) => console.log('Data added')
        )
        .catch(err => {
            if (err.response.data['id']) {
                axios.all([deleteData(data.id), addData(data)]);
            }
        });
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