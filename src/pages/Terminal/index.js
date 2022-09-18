function Terminal() {
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
                <p class="font">root@10.0.0.1:~$</p>
            </div>
        </div>
    )
}

export default Terminal;