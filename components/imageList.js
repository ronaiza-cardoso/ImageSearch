import React, { Component } from 'react'
import {
    ListView,
    View

} from 'react-native'

import ImageListItem from './imageListItem'

class ImageList extends Component {
    render() {
        return(
            <View>
                <ImageListItem />
                <ImageListItem />
                <ImageListItem />
                <ImageListItem />
                <ImageListItem />
                <ImageListItem />
                <ImageListItem />
                <ImageListItem />
                <ImageListItem />
            </View>
        )
    }
}

export default ImageList