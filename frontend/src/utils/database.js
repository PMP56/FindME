import axios from 'axios';


export const updateData = async (username, data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify(data);
    return axios.put(`/api/database/${username}/`, body, config)
        .then(
            (result) => { console.log('Data updated'); /*console.clear()*/ }
        ).catch(err => console.log(err.response.data))
}

export const updateEmployerData = async (username, data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify(data);
    return axios.put(`/api/employer/${username}/`, body, config)
        .then(
            (result) => { console.log('Data updated'); /*console.clear()*/ }
        ).catch(err => console.log(err.response.data))
}

const deleteData = (username) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    return axios.delete(`/api/database/${username}`, config).then((result) => console.log("Deleted")).catch(err => console.log(err.response.data));
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
            if (err.response.data['id'] || err.response.data['userName']) {
                updateData(data.userName, data);
                //deleteData(data.userName).then((result) => addDataSeparately(data)).catch(err => console.log(err.response.data))
            }
        });
}

export const getData = async (username) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    return await axios.get(`/api/database/${username}`, config)
        .then((result) => result)
        .catch(err => {
            if (err.response.data['detail'] = "Not found.") {
                //console.log('Not found');
                return null;

            }
        });
}

export const getEmployerData = async (username) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    return await axios.get(`/api/employer/${username}`, config)
        .then((result) => result)
        .catch(err => {
            if (err.response.data['detail'] = "Not found.") {
                //console.log('Not found');
                return null;

            }
        });
}

export const getAllData = async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    return await axios.get(`/api/database/`, config)
        .then((result) => result)
        .catch(err => {
            if (err.response.data['detail'] = "Not found.") {
                //console.log('Not found');
                return null;
            }
        });
}

export const getAllEmployerData = async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    return await axios.get(`/api/employer/`, config)
        .then((result) => result)
        .catch(err => {
            if (err.response.data['detail'] = "Not found.") {
                //console.log('Not found');
                return null;
            }
        });
}

//get all jobs
export const getAllJobs = async (id) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    if (id) {
        return await axios.get(`/api/jobs/?work_field=${id}`, config)
            .then((result) => result)
            .catch(err => {
                if (err.response.data['detail'] = "Not found.") {
                    //console.log('Not found');
                    return null;
                }
            });
    } else {
        return await axios.get(`/api/jobs/`, config)
            .then((result) => result)
            .catch(err => {
                if (err.response.data['detail'] = "Not found.") {
                    //console.log('Not found');
                    return null;
                }
            });
    }

}


//Get all skills
export const getAllSkills = async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    return await axios.get(`/api/database/`, config)
        .then((result) => result)
        .catch(err => {
            if (err.response.data['detail'] = "Not found.") {
                //console.log('Not found');
                return null;
            }
        });
}

//Get all workfields
export const getAllWorkfields = async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    return await axios.get(`/api/workfield/`, config)
        .then((result) => result)
        .catch(err => {
            if (err.response.data['detail'] = "Not found.") {
                //console.log('Not found');
                return null;
            }
        });
}

//get particular workfield
export const getWorkfield = async (id) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    return await axios.get(`/api/workfield/${id}`, config)
        .then((result) => result)
        .catch(err => {
            if (err.response.data['detail'] = "Not found.") {
                //console.log('Not found');
                return null;
            }
        });
}

//add a job
export const addJob = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify(data);
    return axios.post(`/api/jobs/`, body, config)
        .then(
            (result) => { console.log('Data updated'); /*console.clear()*/ }
        ).catch(err => console.log(err.response.data))
}
