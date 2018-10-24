import React,{Component} from 'react'

import { Button,Grid, Row, Col, Container, Pagination, Card,InputGroup, FormControl ,Form } from 'react-bootstrap';
import Head from 'next/head'
import Masonry from 'react-masonry-component';


const imagesLoadedOptions = { background: '.my-bg-image-el' }

class Main extends Component{

  constructor(props){
    super(props)
    this.state={
      search:''
    }
  }

  loadData=()=>{
    this.timer = setTimeout(()=> {
      this.props.loadCoverList();
      this.loadData();
    }, 5000);
  }

  renderPaginationItem=()=>{
    const list=[];
    console.log('page---->1',this.props.count);
    for(let i=1;i<=this.props.count;i++){
      // return (
      //   <Pagination.Item active={false} onClick={()=>{
      //   }}>{i}</Pagination.Item>
      // )
      list.push('a')
    }
    console.log('aaa---->',list)
  return  list.map((value,index)=>{
      return (
          <Pagination.Item active={false} onClick={()=>{
              this.props.searchCover(this.state.search,index+1);
          }}>{index+1}</Pagination.Item>
      )
    })
  }

  componentDidMount(){
    this.props.loadCoverList()
    this.loadData()
  }

  render(){
    console.log('count0----->',this.props.count);
    const {coverList} = this.props
    return (
      <Container style={{display:'flex',flexDirection:'column'}}>
      <Head>
        <title>Funny Giphy Images</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
    </Head>
    <h2 style={{textAlign:'center',marginTop:20}}>Funny Giphy Images</h2>

    <InputGroup className="mb-3" style={{marginTop:20}}>
        <FormControl
          placeholder="Keyword"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={this.state.search}
          onChange={(e)=>{
            this.setState({search:e.target.value})
          }}
        />
        <InputGroup.Prepend style={{cursor:'pointer'}} onClick={()=>{
            this.props.searchCover(this.state.search,1);
            this.timer && clearTimeout(this.timer);
          }}>
          <InputGroup.Text id="basic-addon1">SEARCH</InputGroup.Text>
        </InputGroup.Prepend>
        <InputGroup.Prepend style={{cursor:'pointer'}} onClick={()=>{
            this.setState({search:''})
            this.loadData()
          }}>
          <InputGroup.Text id="basic-addon1">RESET</InputGroup.Text>
        </InputGroup.Prepend>
      </InputGroup>
      {coverList.length === 0?(
        <p>{'NO DATA'}</p>
      ):(
        <div>
          <Row>
          {coverList.map((item)=>{
            return (
              <Col xl={4} lg={6} md={6} sm={8} xs={12} style={{paddingTop:20}}>
              <Card>
                <div style={{height:260}}>
                <Card.Img variant="top" src={item.url} style={{height:260}}/>
                </div>
                <Card.Body>
                  <Card.Title style={{textOverflow:'ellipsis',overFlow:'hidden'}}>{item.title}</Card.Title>
                </Card.Body>
              </Card>
              </Col>
            )
          })}
          </Row>
          <div style={{display:'flex',justifyContent:'center'}}>
          <Pagination size="sm" style={{marginTop:40}}>
          {
            this.renderPaginationItem()
          }
          </Pagination>
        </div>
        </div>
      )}

      </Container>
    )
  }
}

export default Main
