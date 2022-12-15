import React, {Fragment} from 'react';
import {FlatList, View} from 'react-native';
import chunk from 'lodash.chunk';
import {isEmpty} from './utils/helper';

export const FlatListExtra = ({
    id,
    data,
    numRows,
    renderItem,
    keyExtractor,
    ...props
}) => {
    let getData = data;
    let getRenderData = renderItem;

    if (numRows && props.horizontal) {
        getData = chunk(data, numRows);
        getRenderData = ({item: items, key}) => {
            const keys = keyExtractor
                ? items.map((item, row) => keyExtractor(item, row))
                : [];

            return (
                <View key={isEmpty(keys) ? keys.join('-') : key}>
                    {items.map((item, index) => {
                        let keyItem = index;
                        if (id) {
                            keyItem = item[id];
                        } else if (!isEmpty(keys)) {
                            keyItem = keys[index];
                        }
                        return (
                            <Fragment key={keyItem}>
                                {renderItem({item})}
                            </Fragment>
                        );
                    })}
                </View>
            );
        };
    }

    return (
        <FlatList
            data={getData}
            renderItem={getRenderData}
            keyExtractor={
                !numRows ? (item, key) => (id ? item[id] : key) : undefined
            }
            {...props}
        />
    );
};
