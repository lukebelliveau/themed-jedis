import React from 'react';

export default React.createContext({
    primaryColor: 'black',
    secondaryColor: 'gray',
    changePrimaryColor: () => {},
    changeSecondaryColor: () => {},
});