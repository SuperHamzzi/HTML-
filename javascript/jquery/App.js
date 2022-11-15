// 증가감소 버튼 : 맨마지막에 삽입
  import './App.css';
  import React from 'react';
  import Counter from './counter';
  //컴포넌트 만들기 - 부품화가 가능
  //컴포넌트 이름의 첫글자는 반드시 대문자로 처리
  //props : 속성,  {} : 표현식
  function Header(props){
    return( 
      <div className="header">
        <h1> {props.title} </h1>
        <p>{props.sub}</p>
      </div> 
   );
  }
  function Nav(props){
    // const list=[
    //   <li><a href="">저학년</a></li>,
    //   <li><a href="">중학년</a></li>,
    //   <li><a href="">고학년</a></li>
    // ]
  
    // const list=[];
    // for(let i=0; i<props.gradelist.length; i++){
    //   let arr=props.gradelist[i];
    //   list.push(<li key={arr.id}><a href={arr.id}>{arr.grade}</a></li>);
    // }
  
      const list=[];
      for(const arr of props.gradelist){
        let a=arr;
        list.push(<li key={a.id}><a href={a.id}>{a.grade}</a></li>);
      }
  
    return(
     <div className="nav">
        <ul>
            {list}
        </ul>
    </div>
   );
  }
  function Section(props){
    return(
      <div className="section">
        <h2>{props.recom}</h2>
        <p>{props.cont}</p>
      </div>
    );
  }
  function App() {
    const subtitle = "책으로 여는 세상";
    const gradelist=[
        {id:1, grade:"저학년"},
        {id:2, grade:"중학년"},
        {id:3, grade:"고학년"},
        {id:4, grade:"중1학년"},
        {id:5, grade:"중2학년"},
        {id:6, grade:"중3학년"}
      ]
     return ( 
      <div className="App">
        <Header title="그대 가는 길이 신화가 되다" sub="책으로 여는 세상"/>
        {/* <Header title="그대 발걸음이 머무는 곳에 길이 있다" sub="길이 머무는 곳" />
        <Header title="신화따라..." sub="책마을"/> */}
  
        <hr></hr> 
  
        <Nav gradelist={gradelist}/>  
  
        <hr></hr>  
  
        <Section recom="저학년 추천도서" cont="저학년 도서는 3권"/>
        <Section recom="중학년 추천도서" cont="중학년 도서는 5권"/>
        <Section recom="고학년 추천도서" cont="고학년 도서는 7권" />
  
        <div className="counter">
            <Counter />
  
        </div>
  
  
      </div>
    );
  }
  
  export default App;