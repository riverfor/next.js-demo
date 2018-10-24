import Main from './Main'
import {connect} from 'react-redux'

const mapStateToProps = state =>{
    return{
      coverList: state.main.coverList,
      count: state.main.count
    }
}

const mapDispatchToProps = dispatch =>{
    return{
      loadCoverList:() =>{
          dispatch({type:'LOAD_COVER_LIST'})
        },
      searchCover:(content,page)=>{
        dispatch({type:'SEARCH_COVER',content,page})
      }
    }
}

const MainContainer  = connect(mapStateToProps,mapDispatchToProps)(Main)
export default MainContainer
