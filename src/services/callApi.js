
import axios from 'axios'
import parseCommand from './parseCommand'

const baseApi = process.env.REACT_APP_BASE_API;

function failureMessage(message) {
    return (
        <p className='text-error'>{message}</p>
    )    
}

function successMessage(message) {
    return (
        <p className='text-success'>{message}</p>
    )    
}

function responseGetRequest(command, data) {
    const cmd_prefix = command.split(' ')[0];

    if (cmd_prefix === 'ls'){
        return (
            <div className='response-wrapper'>
                <p className='size'>Total size: {data.size}</p>
                {
                    data.sub_folders?.map(folder => (
                        <div className='folder'>
                            <p>Folder</p>
                            <p className='name'>{folder.name}</p>
                            <p className='size'>{folder.size}</p>
                        </div>
                    ))
                }
                {
                    data.files?.map(file => (
                        <div className='file'>
                            <p>File</p>
                            <p className='name'>{file.name}</p>
                            <p className='size'>{file.data.length}</p>
                        </div>
                    ))
                }
            </div>
        )
    } else if (cmd_prefix == 'cat'){
        return (
            <div className='response-wrapper'>
                <p className='content'>{data.data}</p>
            </div>
        )
    }
}

async function callApi(command) {
    const api_info = parseCommand(command);

    if(!api_info) return failureMessage("Invalid command");

    const response = await axios({
        method: api_info.method,
        url: baseApi + api_info.url,
        data: {
            cmd: command
        },
        params: {
            cmd: command
        },
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    }).then(res => {
        const message = res.data?.message;
        
        if(message) return successMessage(message);
        else return responseGetRequest(command, res.data);
    }).catch(err => {
        const message = err.response?.data?.message;
        
        return failureMessage(message);
    })

    return response;
}

export async function fetchFolder(folder_name, isSearch = false) {
    let command = '';
    let api_info = {};
    
    if(isSearch) command = "find " + folder_name + " /";
    else command = "ls " + folder_name

    if(!folder_name){
        api_info = parseCommand("roots");
    } else {
        api_info = parseCommand(command);
    }

    const response = await axios({
        method: api_info.method,
        url: baseApi + api_info.url,
        params: {
            cmd: command
        },
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    }).then(res => {
        return res.data;
    }).catch(err => {
        const message = err.response?.data?.message;
        
        return failureMessage(message);
    })

    return response;
}

export default callApi;