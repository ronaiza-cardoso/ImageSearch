import React, { Component } from 'react'
import {
    TextInput,
    TouchableHighlight,
    Text,
    View,
    StyleSheet
} from 'react-native'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: ' '
        }
    }
    render() {
        return(
            <View style={{ alignSelf: 'stretch', flexDirection: 'row' }}>
                <TextInput style={style.searchText} 
                           value={this.state.keyword}
                           onChangeText={searchText => this.setState({ searchText })} />
                <TouchableHighlight style={style.searchButton} onPress={() => null}>
                    <Text>Buscar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const style = StyleSheet.create({
    searchButton: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 4,
        padding: 6
    },
    searchText: {
        flex: 3,
        borderWidth: 1,
        borderRadius: 4,
        padding: 4,

    }
})

export default SearchBar 
