import React from 'react';
import { Menu,Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

//Başlıklarımı kolay olsun dıye dırekt menu ye ekleyerek yonlendırmesını verdım.
function Navbar() {
    return (
       <Menu inverted>
           <Container>
               <Link to='/'>
               <Menu.Item name="star wars api"/>
                </Link>
                <Link to='/people'>
                <Menu.Item name="people"/>
                </Link>
                <Link to='/planets'>
                <Menu.Item name="planets"/>
                </Link>
                <Link to='/species'>
                <Menu.Item name="species"/>
                </Link>
               
                
           </Container>
       </Menu>
    )
}
export default Navbar;
