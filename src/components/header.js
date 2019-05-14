import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    const { headerText } = props;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{headerText}</Text>
      </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        height: 80,
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0, height: 2
        },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
};

export default Header;
