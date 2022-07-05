import {useEffect,useState} from 'react'
import { SafeAreaView,FlatList} from 'react-native'
import {API, graphqlOperation} from 'aws-amplify'
import Posts from './components/posts/posts'
import { listPosts } from '../../src/graphql/queries'

const PostScreen = props => {

    const [posts, setPosts] = useState([])

    const {guests} = props

    useEffect(() => {
        const fetchPosts = async () => {
            try{
                const postsResult = await API.graphql(graphqlOperation(listPosts,{
                    filter:{
                        maxGuests:{
                            ge:guests
                        }
                    }
                }))

                setPosts(postsResult.data.listPosts.items)
            }
            catch(e){
                console.log(e)
            }
        }

        fetchPosts();
    }, [])

    return(
        <SafeAreaView>
           <FlatList
           data={posts}
           renderItem = {({item}) => <Posts item = {item}/>}
           />
        </SafeAreaView>
    )
}
    
export default PostScreen