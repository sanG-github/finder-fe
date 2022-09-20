import {useState, useEffect} from 'react';
import {fetchFolder} from '../../services/callApi';

function SystemSideBar(props) {
    const [folders, setFolders] = useState(props.folders || []);
    const [files, setFiles] = useState(props.files || []);
    const [currentPath, setCurrentPath] = useState("");

    const fetchDirectory = async () => {
        const data = await fetchFolder(currentPath);

        if(data instanceof Array){
            setFolders(data)
            setFiles([]);
        } else {
            setFolders(data.sub_folders)
            setFiles(data.files)
        }
    }

    const formatFolderPath = (folder) => {
        return folder.current_path || folder.path + '/' + folder.name;
    }

    useEffect(() => {
        if(props.keyword) return;

        console.log('FetchFolder', currentPath)
        fetchDirectory();
    }, [currentPath]);

    return (
        <div id="sidebar-file-system" className="app-layout hide">
            {
                folders?.map(folder => (
                    <div 
                        key={formatFolderPath(folder)} 
                        className="align-center" 
                        onClick={() => setCurrentPath(formatFolderPath(folder))}>
                            <img src="images/folder-icon.png" title={folder.path}/>
                            {folder.name}
                    </div>
                ))
            }
            {
                files?.map(file => (
                    <div className="align-center" key={file.name}>
                        <img src="images/apps/textedit.png" title={file.data}/>
                        {file.name}
                    </div>
                ))
            }
        </div>
    )
}

export default SystemSideBar;