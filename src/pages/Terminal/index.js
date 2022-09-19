import {useState, useRef} from 'react';
import callApi from '../../services/callApi';

function Terminal() {
    const [commands, setCommands] = useState([]);
	const [cmd, setCmd] = useState("");
    const inputRef = useRef();

    const handleOnKeyDown = async (e) => {
        if (e.key !== 'Enter') return;
		setCmd("");

        const cmd = e.target.value;
        const result = await callApi(cmd);
		const newCommands = [...commands]
        const newCommand = {cmd: cmd, result: result};
		
        newCommands.push(newCommand);
        setCommands(newCommands);

        window.scrollTo(inputRef)
    }

	const handleOnChange = (e) => {
		setCmd(e.target.value);
	}
    
    return (
        <div className="terminal">
            <div id="bar">
                <div id="red">
                </div>
                <div id="yellow">
                </div>
                <div id="green">
                </div>
            </div>
            <div id="screen">
                {
                    commands.map((obj, idx) => {
                        return (
                            <div key={idx} className="font">
                                <p className="cli">
                                    root@10.0.0.1:~$
                                    <input className="font" defaultValue={obj.cmd} disabled />
                                </p>
                                {obj.result}
                            </div>
						)
                    })
                }

				<p className="font cli">
					root@10.0.0.1:~$
					<input
                        ref={inputRef}
						className="font" 
						autoFocus={true} 
						onChange={(e) => handleOnChange(e)} 
						onKeyDown={(e) => handleOnKeyDown(e)}
						value={cmd}
					/>
				</p>
            </div>
        </div>
    )
}

export default Terminal;