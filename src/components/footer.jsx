import React from 'react';
import styled from 'styled-components';

const Rodape=styled.p`
color:blue;
font-size:15px;
`;

const Footer = () => (
    <footer>
        <Rodape>Obrigado pela sua visita.<br/>
            Endereço: Rua João chaves, 122, Jardim Europa, Morro Agudo / SP.
        </Rodape>
    </footer>
);

export default Footer;