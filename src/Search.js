import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';


export default function Search() {
    const [searchText, setSearchText] = useState('');

    const onChangeText = query => setSearchText(query);

    return (
        <SearchBar
            platform="ios"
            placeholder="Search"
            onChangeText={onChangeText}
            value={searchText} />
    );
}
