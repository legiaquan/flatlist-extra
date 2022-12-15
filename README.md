![npm](https://img.shields.io/npm/v/flatlist-extra)

# React Native Horizontal FlatList

<h3>Improved horizontal FlatList for React Native</h3>

Provides the ability to specify number of rows to a horizontal React Native FlatList

## Installation

yarn:

```bash
$ yarn add flatlist-extra
```

npm:

```bash
$ npm i flatlist-extra
```

## Usage

```js
import {Text, View} from 'react-native';
import {FlatListExtra} from 'flatlist-extra';

const NameComponent = () => {
    const data = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
    ];
    const renderItem = ({item}) => (
        <View style={{width: 100, height: 100, borderWidth: 1}}>
            <Text
                style={{
                    alignSelf: 'center',
                }}>
                {item}
            </Text>
        </View>
    );
    return (
        <View style={{flex: 1}}>
            <FlatListExtra
                data={data}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                horizontal
                numRows={2}
            />
        </View>
    );
};
```

## Props

Props are inherited form FlatListProps, but with the following changes:

```js
item => string;
```

-   **numRows** - Number of items in each column
