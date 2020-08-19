import axios from 'axios';

const deleteData = (id) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    return axios.delete(`/api/database/${id}`, config).then((result) => console.log("Deleted")).catch(err => console.log(err.response.data));
}

const addDataSeparately = (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify(data);
    return axios.post('/api/database/', body, config)
        .then(
            (result) => { console.log('Data added'); /*console.clear()*/ }
        ).catch(err => console.log(err.response.data))
}

export const addData = (data) => {
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
            console.log(err.response.data);
            if (err.response.data['id']) {
                deleteData(data.id).then((result) => addDataSeparately(data)).catch(err => console.log(err.response.data))
            }
        });
}

export const getData = async (id) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    return await axios.get(`/api/database/${id}`, config)
        .then((result) => result)
        .catch(err => {
            if (err.response.data['detail'] = "Not found.") {
                //console.log('Not found');
                return null;

            }
        });
}
