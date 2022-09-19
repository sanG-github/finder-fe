import {useState} from 'react';


function Terminal() {
    const [commands, setCommands] = useState([]);
	const [cmd, setCmd] = useState("");

    const handleOnKeyDown = (e) => {
        if (e.key !== 'Enter') return;

		const newCommands = [...commands]
		newCommands.push(e.target.value);

		setCmd("");
		setCommands(newCommands);
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
                    commands.map((cmd, idx) => {
                        return (
							<p className="font cli" key={idx}>
								root@10.0.0.1:~$
								<input className="font" defaultValue={cmd} />
							</p>
						)
                    })
                }

				<p className="font cli">
					root@10.0.0.1:~$
					<input 
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