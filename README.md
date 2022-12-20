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

Expo: https://snack.expo.dev/@legiaquan/flatlist-extra-expo

```js
import {Text, View} from 'react-native';
import {FlatListExtra} from 'flatlist-extra';

const NameComponent = () => {
    const data = [
        {idItem: 1, name: 'one'},
        {idItem: 2, name: 'two'},
        {idItem: 3, name: 'three'},
        {idItem: 4, name: 'four'},
        {idItem: 5, name: 'five'},
        {idItem: 6, name: 'six'},
        {idItem: 7, name: 'seven'},
        {idItem: 8, name: 'eight'},
        {idItem: 9, name: 'nine'},
    ];
    const renderItem = ({item}) => (
        <View style={{width: 100, height: 100, borderWidth: 1}}>
            <Text
                style={{
                    alignSelf: 'center',
                }}>
                {item.name}
            </Text>
        </View>
    );
    return (
        <FlatListExtra
            data={data}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            horizontal
            numRows={2}
            id={'idItem'}
        />
    );
};
```

### Props

Props are inherited form [flatlist](https://reactnative.dev/docs/flatlist), but with the following changes:

| Name    | Type                 | Default | Description                                                         |
| ------- | -------------------- | ------- | ------------------------------------------------------------------- |
| numRows | `integer`            | `null`  | Number of items in each column, `only` work with `horizontal` prop. |
| id      | `string & undefined` | `null`  | Id of item (only `keyExtractor` operation is undefined)             |
