![npm](https://img.shields.io/npm/v/flatlist-extra)

# React Native Horizontal FlatList

<h3>Improved horizontal FlatList for React Native</h3>

This is a custom FlatList component in React Native, which is a component for rendering lists of items in a scrollable view. It has a few extra features compared to the basic FlatList component.

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

| Name    | Type                 | Default | Description                                                                                                                                                     |
| ------- | -------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| numRows | `integer`            | `null`  | It allows you to specify the number of rows to render in each chunk of data (numRows). If numRows is not provided, the entire list of data is rendered at once. |
| id      | `string & undefined` | `null`  | A string that specifies the key to use for each item in the list. This is used to determine the key prop for each item when rendering them in the list.         |

In addition to these props, the component also accepts any other props that the FlatList component supports. The component uses the chunk function from the lodash library to divide the data array into chunks of the specified size, and then passes each chunk to the renderItem function wrapped in a View component. The keyExtractor function is used to generate a unique key for each item, which is used as the key prop when rendering the item. If no keyExtractor function is provided, a default key extractor is used that generates a key based on the item's id prop or the item's index in the array, if no id prop is available.
