import Terminal from '../Terminal'

function HomePage() {
  return (
    <div>
        <div className="menu-bar">
            <div className="stripe">
                <div className="menu-items-left">
                    <div className="menu-wrapper">
                        <ul className="parent" id="main-nav-menu">
                            <li>
                                <a href="#" className="menu-items"><img src="images/logo.svg" alt="" id="apple-icon"/></a>
                                <ul id="menu-mac" className="child">
                                    <li>
                                        <div>About This Mac</div>
                                    </li>
                                    <li>
                                        <div>System Preferences...</div>
                                    </li>
                                    <li>
                                        <div>App Store...</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Recent Items</div>
                                        <div className="item-align-right">▸</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Force Quit</div>
                                        <div className="item-align-right">⌥⇧⌘⎋</div>
                                    </li>
                                    <li>
                                        <div>Sleep</div>
                                    </li>
                                    <li>
                                        <div>Restart...</div>
                                    </li>
                                    <li>
                                        <div>Shut Down...</div>
                                    </li>
                                    <li>
                                        <div>Lock Screen</div>
                                        <div className="item-align-right">⌃⌘Q</div>
                                    </li>
                                    <li>
                                        <div id="logout"><a href="logout.html">Log Out...</a></div>
                                        <div className="item-align-right">⇧⌘Q</div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="menu-items" id="finder-button"><strong>Finder</strong></a>
                                <ul id="menu-finder" className="child">
                                    <li>
                                        <div>About Finder</div>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li>
                                        <div>Preferences...</div>
                                        <div className="item-align-right">⌘,</div>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li>
                                        <div>Empty Bin...</div>
                                        <div className="item-align-right">⇧⌘⌫</div>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li className="ui-state-disabled">
                                        <div>Services</div>
                                        <div className="item-align-right">▸</div>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li>
                                        <div>Hide Finder</div>
                                        <div className="item-align-right">⌘H</div>
                                    </li>
                                    <li>
                                        <div>Hide Others</div>
                                        <div className="item-align-right">⌥⌘H</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Show All</div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="menu-items" id="file-button">File</a>
                                <ul id="menu-file" className="child">
                                    <li>
                                        <div className="item-align-left">New Finder Windows</div>
                                        <div className="item-align-right">⌘N</div>
                                    </li>
                                    <li>
                                        <div>New Folder</div>
                                        <div className="item-align-right">⇧⌘N</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>New Folder with Selection</div>
                                        <div className="item-align-right">⌃⌘N</div>
                                    </li>
                                    <li>
                                        <div>New Smart Folder</div>
                                    </li>
                                    <li>
                                        <div>New Tab</div>
                                        <div className="item-align-right">⌘T</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Open</div>
                                        <div className="item-align-right">⌘O</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Open With</div>
                                        <div className="item-align-right">▸</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Print</div>
                                        <div className="item-align-right">⌘P</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Close Window</div>
                                        <div className="item-align-right">⌘W</div>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li>
                                        <div>Get Info</div>
                                        <div className="item-align-right">⌘I</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Rename</div>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li className="ui-state-disabled">
                                        <div>Compres</div>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li className="ui-state-disabled">
                                        <div>Duplicate</div>
                                        <div className="item-align-right">⌘D</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Make Alias</div>
                                        <div className="item-align-right">⌃⌘A</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Quick Look</div>
                                        <div className="item-align-right">⌘Y</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Show Original</div>
                                        <div className="item-align-right">⌃⌥⌘A</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Add to Dock</div>
                                        <div className="item-align-right">⌃⇧⌘T</div>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li className="ui-state-disabled">
                                        <div>Move to Bin</div>
                                        <div className="item-align-right">⌘⌫</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Eject</div>
                                        <div className="item-align-right">⌘E</div>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li className="ui-state-disabled">
                                        <div>Find</div>
                                        <div className="item-align-right">⌘F</div>
                                    </li>
                                    <hr className="spacing-line"></hr>

                                </ul>
                            </li>
                            <li>
                                <a href="#" className="menu-items" id="edit-button">Edit</a>
                                <ul id="menu-edit" className="child">
                                    <li className="ui-state-disabled">
                                        <div className="item-align-left">Undo</div>
                                        <div className="item-align-right">⌘Z</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Redo</div>
                                        <div className="item-align-right">⇧⌘Z</div>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li className="ui-state-disabled">
                                        <div>Cut</div>
                                        <div className="item-align-right">⌘X</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Copy</div>
                                        <div className="item-align-right">⌘C</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Paste</div>
                                        <div className="item-align-right">⌘V</div>
                                    </li>
                                    <li>
                                        <div>Select All</div>
                                        <div className="item-align-right">⌘A</div>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li className="ui-state-disabled">
                                        <div>Show Clipboard</div>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li>
                                        <div>Start Dictation...</div>
                                        <div className="item-align-right">fn fn</div>
                                    </li>
                                    <li>
                                        <div>Emoji & Symbols</div>
                                        <div className="item-align-right">⌃⌘Space</div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="menu-items" id="view-button">View</a>
                                <ul id="menu-view" className="child">
                                    <li className="ui-state-disabled">
                                        <div>as Icons</div>
                                        <div className="item-align-right">⌘1</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>as List</div>
                                        <div className="item-align-right">⌘2</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>as Columns</div>
                                        <div className="item-align-right">⌘3</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>as Gallery</div>
                                        <div className="item-align-right">⌘4</div>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li>
                                        <div>Use Stacks</div>
                                        <div className="item-align-right">⌃⌘O</div>
                                    </li>
                                    <li>
                                        <div>Sort By</div>
                                        <div className="item-align-right">▸</div>
                                        <ul className="submenu" id="sub-menu">
                                            <li>
                                                <div><img src="images/checkbox.svg" alt="" id="checkbox"/>None</div>
                                                <div className="item-align-right">⌃⌥⌘O</div>
                                            </li>
                                            <li>
                                                <div>Snap to Grid</div>
                                            </li>
                                            <li>
                                                <div>Name</div>
                                                <div className="item-align-right">⌃⌥⌘1</div>
                                            </li>
                                            <li>
                                                <div>Kind</div>
                                                <div className="item-align-right">⌃⌥⌘2</div>
                                            </li>
                                            <li>
                                                <div>Date Last Opened</div>
                                                <div className="item-align-right">⌃⌥⌘3</div>
                                            </li>
                                            <li>
                                                <div>Date Added</div>
                                                <div className="item-align-right">⌃⌥⌘4</div>
                                            </li>
                                            <li>
                                                <div>Date Modified</div>
                                                <div className="item-align-right">⌃⌥⌘5</div>
                                            </li>
                                            <li>
                                                <div>Date Created</div>
                                            </li>
                                            <li>
                                                <div>Size</div>
                                                <div className="item-align-right">⌃⌥⌘6</div>
                                            </li>
                                            <li>
                                                <div>Tags</div>
                                                <div className="item-align-right">⌃⌥⌘7</div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div>Clean Up</div>
                                    </li>
                                    <li>
                                        <div>Clean Up By</div>
                                        <div className="item-align-right">▸</div>
                                        <ul className="submenu" id="sub-menu">
                                            <li>
                                                <div>Name</div>
                                                <div className="item-align-right">⌥⌘1</div>
                                            </li>
                                            <li>
                                                <div>Kind</div>
                                                <div className="item-align-right">⌥⌘2</div>
                                            </li>
                                            <li>
                                                <div>Date Modified</div>
                                                <div className="item-align-right">⌥⌘5</div>
                                            </li>
                                            <li>
                                                <div>Date Created</div>
                                            </li>
                                            <li>
                                                <div>Size</div>
                                                <div className="item-align-right">⌥⌘6</div>
                                            </li>
                                            <li>
                                                <div>Tags</div>
                                                <div className="item-align-right">⌥⌘7</div>
                                            </li>
                                        </ul>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li className="ui-state-disabled">
                                        <div>Hide Sidebar</div>
                                        <div className="item-align-right">⌥⌘S</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Hide Preview</div>
                                        <div className="item-align-right">⇧⌘P</div>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li className="ui-state-disabled">
                                        <div>Hide Toolbar</div>
                                        <div className="item-align-right">⌥⌘T</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Show All Tabs</div>
                                        <div className="item-align-right">⇧⌘\</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Hide Tab Bar</div>
                                        <div className="item-align-right">⇧⌘T</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Hide Path Bar</div>
                                        <div className="item-align-right">⌥⌘P</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Hide Status Bar</div>
                                        <div className="item-align-right">⌘/</div>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li className="ui-state-disabled">
                                        <div>Customize Toolbar...</div>
                                    </li>
                                    <li>
                                        <div>Customize Touch Bar...</div>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li>
                                        <div>Show View Options</div>
                                        <div className="item-align-right">⌘J</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Show Preview Options</div>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li className="ui-state-disabled">
                                        <div>Enter Full Screen</div>
                                        <div className="item-align-right">⌃⌘F</div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="menu-items" id="go-button">Go</a>
                                <ul id="menu-go" className="child">
                                    <li className="ui-state-disabled">
                                        <div>Back</div>
                                        <div className="item-align-right">⌘[</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Forward</div>
                                        <div className="item-align-right">⌘]</div>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li>
                                        <div><img src="images/menu/recents.png" alt="" className="sidebar-icons"/> Recents
                                        </div>
                                        <div className="item-align-right">⇧⌘F</div>
                                    </li>
                                    <li>
                                        <div><img src="images/menu/documents.png" alt="" className="sidebar-icons"/>
                                            Documents</div>
                                        <div className="item-align-right">⇧⌘O</div>
                                    </li>
                                    <li>
                                        <div><img src="images/menu/desktop.png" alt="" className="sidebar-icons"/> Desktop
                                        </div>
                                        <div className="item-align-right">⇧⌘D</div>
                                    </li>
                                    <li>
                                        <div><img src="images/menu/download.png" alt="" className="sidebar-icons"/> Downloads
                                        </div>
                                        <div className="item-align-right">⌥⌘L</div>
                                    </li>
                                    <li>
                                        <div><img src="images/menu/home.png" alt="" className="sidebar-icons"/> Home</div>
                                        <div className="item-align-right">⇧⌘H</div>
                                    </li>
                                    <li>
                                        <div><img src="images/menu/laptop.png" alt="" className="sidebar-icons"/> Computer
                                        </div>
                                        <div className="item-align-right">⇧⌘C</div>
                                    </li>
                                    <li>
                                        <div><img src="images/menu/airdrop.png" alt="" className="sidebar-icons"/> File system
                                        </div>
                                        <div className="item-align-right">⇧⌘R</div>
                                    </li>
                                    <li>
                                        <div><img src="images/menu/network.png" alt="" className="sidebar-icons"/> Network
                                        </div>
                                        <div className="item-align-right">⇧⌘K</div>
                                    </li>
                                    <li>
                                        <div><img src="images/menu/icloud.png" alt="" className="sidebar-icons"/> iCloud
                                            Drive</div>
                                        <div className="item-align-right">⇧⌘I</div>
                                    </li>
                                    <li>
                                        <div><img src="images/menu/apps.png" alt="" className="sidebar-icons"/> Applications
                                        </div>
                                        <div className="item-align-right">⇧⌘A</div>
                                    </li>
                                    <li>
                                        <div><img src="images/menu/utilities.png" alt="" className="sidebar-icons"/>
                                            Utilities</div>
                                        <div className="item-align-right">⇧⌘U</div>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li className="ui-state-disabled">
                                        <div>Recent Folders</div>
                                        <div className="item-align-right">▸</div>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li>
                                        <div>Go to Folder...</div>
                                        <div className="item-align-right">⇧⌘G</div>
                                    </li>
                                    <li>
                                        <div>Connect to Server...</div>
                                        <div className="item-align-right">⌘K</div>
                                    </li>

                                </ul>
                            </li>
                            <li>
                                <a href="#" className="menu-items" id="window-button">Window</a>
                                <ul id="menu-window" className="child">
                                    <li className="ui-state-disabled">
                                        <div>Minimise</div>
                                        <div className="item-align-right">⌘M</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Zoom</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Move Window to Left Side of Screen</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Move Window to Right Side of Screen</div>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li className="ui-state-disabled">
                                        <div>Move to iPad</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Cycle Through Windows</div>
                                        <div className="item-align-right">⌘`</div>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li className="ui-state-disabled">
                                        <div>Show Previous Tab</div>
                                        <div className="item-align-right">⌃⇧⇥</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Show Next Tab</div>
                                        <div className="item-align-right">⌃⇥</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Move Tab to New Window</div>
                                    </li>
                                    <li className="ui-state-disabled">
                                        <div>Merge All Windows</div>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li>
                                        <div>Bring All to Front</div>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li>
                                        <div>images</div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="menu-items" id="help-button">Help</a>
                                <ul id="menu-help" className="child">
                                    <li id="search-input" className="ui-state-disabled">
                                        <div>Search</div>
                                        <form action=""><input type="text"/></form>
                                    </li>
                                    <li>
                                        <div>macOS Help</div>
                                    </li>
                                    <hr className="spacing-line"></hr>
                                    <li>
                                        <div>See What's New in macOS</div>
                                    </li>
                                    <li>
                                        <div>New to Mac? Tour the Basics</div>
                                    </li>
                                    <li>
                                        <div>Get to know your MacBook Pro</div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="menu-items-right">
                    <a href="#" id="battery-level">100%</a>
                    <a href="#" className="menu-items"><img src="images/battery.svg" alt="" width="22px"/></a>
                    <a href="#" className="menu-items"><span id="current-time"></span></a>
                    <a href="#" className="menu-items"><img src="images/launcher2.svg" alt=""/></a>
                </div>
            </div>
        </div>
        <div className="desktop-folders">
            <div id="position-box" className="ui-widget-content folder-style"><img src="images/folder-icon.png" alt=""
                    className="folder-icon"/>
                <span className="icon-font">Web Development</span>
            </div>
            <div id="position-box2" className="ui-widget-content folder-style"><img src="images/folder-icon.png" alt=""
                    className="folder-icon"/>
                <span className="icon-font">My Projects</span>
            </div>
        </div>
        <div className="resizable-windows">
            <div id="resizable-box" className="ui-widget-content resizable">
                <div className="box-header">
                    <div className="control-buttons">
                        <div className="buttons">
                            <img src="images/finder/red.png" alt="" id="red-cross"/>
                            <img src="images/finder/yellow.png" alt=""/>
                            <img src="images/finder/green.png" alt=""/>
                        </div>
                        <div className="folder-name">
                            <img src="images/folder-icon.png" alt=""/><span> finder</span>
                        </div>
                    </div>
                    <div className="control-buttons2">
                        <div className="buttons-left">
                            <button><img src="images/finder/left-arrow.svg" alt=""/></button>
                            <button><img src="images/finder/right-arrow.svg" alt=""/></button>
                        </div>
                        <div className="buttons-right">
                            <div className="menu-icon-buttons">
                                <div className="sort-button">
                                    <button><img src="images/finder/menu1.svg" alt=""/></button>
                                    <button><img src="images/finder/menu2.svg" alt=""/></button>
                                    <button><img src="images/finder/menu3.svg" alt=""/></button>
                                    <button><img src="images/finder/menu4.svg" alt=""/></button>
                                </div>
                                <div className="setting-button">
                                    <button><img src="images/finder/menu5.svg" alt=""/><span><img
                                                src="images/finder/expand.svg" alt=""/></span></button>
                                    <button><img src="images/finder/settings.svg" alt=""/><span><img
                                                src="images/finder/expand.svg" alt=""/></span></button>
                                    <button><img src="images/finder/export.svg" alt=""/></button>
                                    <button><img src="images/finder/tag.png" alt=""/></button>
                                </div>
                            </div>
                            <div className="search-menu-bar">
                                <input type="text" placeholder="Search"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-body">
                    <div className="box-sidebar ">
                        <div className="sidebar-background">
                            <div className="sidebar-items">
                                <div className="item-category">
                                    Favourites
                                </div>
                                <div className="item-selected">
                                    <img src="images/menu/airdrop.png" alt=""/><a href="#">File system</a>
                                </div>
                                <div className="item-selected">
                                    <img src="images/menu/recents.png" alt=""/><a href="#">Recents</a>
                                </div>
                                <div className="item-selected" name="applications">
                                    <img src="images/menu/apps.png" alt=""/><a href="#">Applications</a>
                                </div>
                                <div className="item-selected">
                                    <img src="images/menu/folder.png" alt=""/><a href="#">Google Drive</a>
                                </div>
                                <div className="item-selected">
                                    <img src="images/menu/desktop.png" alt=""/><a href="#">Desktop</a>
                                </div>
                                <div className="item-selected">
                                    <img src="images/menu/documents.png" alt=""/><a href="#">Documents</a>
                                </div>
                                <div className="item-selected">
                                    <img src="images/menu/download.png" alt=""/><a href="#">Downloads</a>
                                </div>
                                <div className="item-selected">
                                    <img src="images/menu/pictures.png" alt=""/><a href="#">Pictures</a>
                                </div>
                                <div className="item-category">
                                    iCloud
                                </div>
                                <div className="item-selected">
                                    <img src="images/menu/icloud.png" alt=""/><a href="#">iCloud Drive</a>
                                </div>
                                <div className="item-category">
                                    Locations
                                </div>
                                <div className="item-selected">
                                    <img src="images/menu/laptop.png" alt=""/><a href="#">Your MacBook Pro</a>
                                </div>
                                <div className="item-category">
                                    Tags
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box-main" id="main-box">
                        <div id="sidebar-file-system" className="app-layout hide">
                            <div className="align-center"><img src="images/folder-icon.png" alt=""/>File system</div>
                            <div className="align-center"><img src="images/folder-icon.png" alt=""/>File system</div>
                            <div className="align-center"><img src="images/folder-icon.png" alt=""/>File system</div>
                            <div className="align-center"><img src="images/folder-icon.png" alt=""/>File system</div>
                        </div>
                        <div id="sidebar-recents" className="app-layout hide">
                            <div className="align-center"><img src="images/apps/recents/camera.svg" alt=""/>Camera</div>
                            <div className="align-center"><img src="images/apps/recents/notes.png" alt=""/>Notes</div>
                            <div className="align-center"><img src="images/apps/recents/office.svg" alt=""/>Office</div>
                            <div className="align-center"><img src="images/apps/recents/settings.png" alt=""/>Settings</div>
                            <div className="align-center"><img src="images/apps/recents/window.png" alt=""/>Window</div>
                        </div>

                        <div id="sidebar-applications" className="app-layout hide">
                            <div className="align-center"><img src="images/apps/ae.png" alt=""/>Adobe After Effects CC 2019
                            </div>
                            <div className="align-center"><img src="images/apps/air.png" alt=""/>File system</div>
                            <div className="align-center"><img src="images/apps/backup.png" alt=""/>Time Machine</div>
                            <div className="align-center"><img src="images/apps/bitcoin.png" alt=""/>Bitcoin</div>
                            <div className="align-center"><img src="images/apps/book.png" alt=""/>Books</div>
                            <div className="align-center"><img src="images/apps/calculator.png" alt=""/>Calculator</div>
                            <div className="align-center"><img src="images/apps/calendar.png" alt=""/>Calendar</div>
                            <div className="align-center"><img src="images/apps/chrome.png" alt=""/>Google Chrome</div>
                            <div className="align-center"><img src="images/apps/mail.png" alt=""/>Mail</div>
                            <div className="align-center"><img src="images/apps/messages.png" alt=""/>Messages</div>
                            <div className="align-center"><img src="images/apps/music.png" alt=""/>Music</div>
                            <div className="align-center"><img src="images/apps/onedrive.png" alt=""/>Google One Drive</div>
                            <div className="align-center"><img src="images/apps/pics.png" alt=""/>Pictures</div>
                            <div className="align-center"><img src="images/apps/ps.png" alt=""/>Adobe Photoshop CC 2019</div>
                            <div className="align-center"><img src="images/apps/safari.png" alt=""/>Safari</div>
                            <div className="align-center"><img src="images/apps/spotify.png" alt=""/>Spotify</div>
                            <div className="align-center"><img src="images/apps/stockmarket.png" alt=""/>Stockmarket</div>
                            <div className="align-center"><img src="images/apps/stocks.png" alt=""/>Stocks</div>
                            <div className="align-center"><img src="images/apps/textedit.png" alt=""/>TextEdit</div>
                            <div className="align-center"><img src="images/apps/tv.png" alt=""/>Apple Tv</div>
                            <div className="align-center"><img src="images/apps/twitter.png" alt=""/>Twitter</div>
                            <div className="align-center"><img src="images/apps/xcode.png" alt=""/>Xcode</div>
                        </div>
                        <div id="sidebar-google-drive" className="app-layout hide">
                            <div className="align-center"><img src="images/folder-icon.png" alt=""/>My Documents</div>
                        </div>
                        <div id="sidebar-desktop" className="app-layout hide">
                            <div className="align-center"><img src="images/folder-icon.png" alt=""/>Web Development</div>
                            <div className="align-center"><img src="images/folder-icon.png" alt=""/>My Projects</div>
                        </div>
                        <div id="sidebar-documents" className="app-layout hide">
                            <div className="align-center"><img src="images/folder-icon.png" alt=""/>My Local Documents</div>
                        </div>
                        <div id="sidebar-pictures" className="app-layout hide">
                            <div className="align-center"><img src="images/apps/photos.png" alt=""/>Photos</div>
                        </div>
                        <div id="sidebar-your-macbook-pro" className="app-layout hide">
                            <div className="align-center"><img src="images/disk.png" alt=""/>Macintosh HD</div>
                            <div className="align-center"><img src="images/globe.png" alt=""/>Network</div>
                        </div>
                    </div>
                </div>
                <div className="box-footer"></div>
            </div>
        </div>
        <Terminal />
        <div className="dock-menu">
            <div className="background-dock">
                <nav className="main-nav">
                    <ul className="main-nav-list">
                        <li className="dock-icons"><img src="images/apps/finder.png" alt="Finder" title="Finder"/></li>
                        <li className="dock-icons"><img src="images/apps/launchpad.png" alt="launchpad" title="Launchpad"/>
                        </li>
                        <li className="dock-icons"><img src="images/apps/safari.png" alt="Safari" title="Safari"/></li>
                        <li className="dock-icons"><img src="images/apps/spotify.png" alt="Spotify" title="Spotify"/></li>
                        <li className="dock-icons"><img src="images/apps/photos.png" alt="Photos" title="Photos"/></li>
                        <li className="dock-icons"><img src="images/apps/calendar.png" alt="Calendar" title="Calendar"/></li>
                        <li className="dock-icons"><img src="images/apps/appstore.png" alt="Appstore" title="Appstore"/></li>
                        <li className="dock-icons"><img src="images/apps/messages.png" alt="Messages" title="Messages"/></li>
                        <li className="dock-icons"><img src="images/apps/mail.png" alt="Mail" title="Mail"/></li>
                        <li className="dock-icons"><img src="images/apps/trash.png" alt="Trash" title="Trash"/></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  );
}

export default HomePage;
