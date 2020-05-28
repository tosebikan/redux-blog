import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts } from '../actions';
import Post from '../components/Post';

const PostsPage = ({posts, dispatch, loading, hasErrors}) => {
    
  React.useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const renderPosts = () => {
    if(loading) return <p>LoadingPosts...</p>
    if(hasErrors) return <p>Unable to display posts</p>
    return posts.map(post => <Post key={post.id} post={post}/>)
  }

  return (
  <section>
    <h1>Posts</h1>
    {renderPosts()}
  </section>
)
}

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors

})
export default connect(mapStateToProps)(PostsPage)
