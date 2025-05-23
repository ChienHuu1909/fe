// src/components/SlideBanner.tsx
import React, { useRef, useEffect, useState } from 'react';
import { View, FlatList, Image, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const images = [
    'https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2019/04/Bamboo-Airways-Promotional-Material.jpg',
    'https://aivivu.com/wp-content/uploads/2022/04/km-bb-7-4.jpg',
    'https://data1.8trip.vn/newsTravellink/news/7f37b4a1d3bebb98bffbd00d1e872d6e.jpg',
    'https://static2.abay.vn/Images/AbayBanner/174.jpeg',
];

const SlideBanner = () => {
    const flatListRef = useRef<FlatList<any>>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= images.length) {
                nextIndex = 0;
            }
            flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
            setCurrentIndex(nextIndex);
        }, 3000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    });

    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={images}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged.current}
                viewabilityConfig={viewConfigRef.current}
                renderItem={({ item }) => (
                    <Image source={{ uri: item }} style={styles.image} />
                )}
            />
        </View>
    );
};

export default SlideBanner;

const styles = StyleSheet.create({
    container: {
        width,
        height: 200,
    },
    image: {
        width,
        height: 200,
        resizeMode: 'cover',
    },
});
