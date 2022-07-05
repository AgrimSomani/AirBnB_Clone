import React, {useState, useRef, useEffect} from  'react'
import {View,FlatList} from 'react-native'
import MapView , { PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './styles';
import CustomMarker from '../CustomMarker/CustomMarker';
import CarouselItem from '../PlaceCarousel';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import {API, graphqlOperation} from 'aws-amplify'
import { listPosts } from '../../../../src/graphql/queries';


const SearchResultMap = props => {
    const width = useWindowDimensions().width;
    const [selectedId,setSelectedId] = useState(null)
    const flatList = useRef()
    const map = useRef()
    const viewConfig = useRef({itemVisiblePercentThreshold:70,minimumViewTime: 200})
    const [flatListChanged,changeValue] = useState(false)
    const onViewableItemsChanged  = useRef(({viewableItems})=> {
        if (viewableItems.length > 0){
            setSelectedId(viewableItems[0].item.id)
        }
    })

    const [places,setPlaces] = useState([])
    const {guests} = props

    useEffect(() => {
        const fetchPosts = async () => {
            try{
                const postsResult = await API.graphql(graphqlOperation(listPosts,{
                    filter:{
                        maxGuests:{
                            ge: guests
                        }
                    }
                }))

                setPlaces(postsResult.data.listPosts.items)
            }
            catch(e){
                console.log(e)
            }
        }

        fetchPosts();
    }, [])

    useEffect(() => {
        if (selectedId && flatList){
            const index = places.findIndex(place => place.id === selectedId)
            flatList.current.scrollToIndex({index:index})
            const region = {
                latitude:places[index].latitude,
                longitude:places[index].longitude,
                latitudeDelta:0.8,
                longitudeDelta:0.8
            }
            map.current.animateToRegion(region)
        }
        
    },[selectedId])  

 
    return(
        <View style={{width:'100%',height:'100%'}}>
            <MapView
                ref={map}
                provider={PROVIDER_GOOGLE}
                style ={styles.mapView}
                initialRegion={{
                    latitude: 28.3279822,
                    longitude: -16.5124847,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }}
            >
            {places.map(place => (
                <CustomMarker 
                    coordinate={{longitude:place.longitude, latitude:place.latitude}} 
                    price={place.newPrice} 
                    key={place.key} 
                    onPress ={()=> setSelectedId(place.id)} 
                    selected={selectedId===place.id}
                />))
            }
            </MapView>
            <View style ={styles.listContainer}>
                <FlatList
                    ref = {flatList}
                    data={places}
                    renderItem={({item}) => <CarouselItem item ={item}/>}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToAlignment='center'
                    snapToInterval={325}
                    decelerationRate={'fast'}
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewableItemsChanged.current}
                />
            </View>
        </View>
        
    )
}

export default SearchResultMap 