import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Menu from './components/Menu/Menu';

function App() {
    const menuRef = React.useRef();

    const handleChangeSection = (section) => {
        menuRef && menuRef.current && menuRef.current.updateStyle(section);
    }
    return (
    <div className="main">
        <Menu ref={menuRef}/>
        <Switch>
            <Route exact path="/" component={() => {return (<Home changeSection={handleChangeSection} />)}} />
        </Switch>
    </div>
    );
}

export default App;
