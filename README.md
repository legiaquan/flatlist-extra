[![NPM Version][npm-url]

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
import {FlatListExtra} from 'flatlist-extra';

const NameComponent = () => {
    const data = ['one', 'two', 'three', 'four', 'five', 'six'];

    const renderItem = ({item, row, col}) => {
        <Text>{item}</Text>;
    };
    return <FlatListExtra data={data} numRows={2} renderItem={renderItem} />;
};
```

## Props

Props are inherited form FlatListProps, but with the following changes:

```js
item => string;
```

-   **numRows** - Number of items in each column

[npm-url]: https://www.npmjs.com/package/flatlist-extra
