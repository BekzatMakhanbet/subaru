import React, { Component } from 'react';
import './Cars.css';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import {MDBBtn,MDBBtnGroup} from 'mdbreact';
import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from
"mdbreact";
import Gallery from './Gallery';
import axios from 'axios';


export class SubaruXV extends Component {
    state={
        file_list:[],
        color:"Sunshine Orange",
        value:"01",
        path:'orange',
        activeItemJustified: "1",
    }
    componentDidMount(){
        window.scrollTo(0,0);
        axios.get('http://78.40.109.172:5000/files/subaruxv').then(res=>{this.setState({file_list:res.data});});
      }
   
    render() {
        return (
            <div className="carinfo">
                <div>
                    <div className="comercial">
                        <h1>SUBARU XV</h1>
                        <p className="topp">Следуй за Тем, что Тебе Интересно.</p>
                        <p className="bottomp">Городской Стиль, Возможности за городом.</p>
                    </div>
                   <img style={{width:"100%"}} src={require('./images/subaruxv/header_img01.jpg')} alt=""/>
                </div>
                <div className="text-car">
                    <h2 className="titile">Все, что Вы Делаете, Теперь Весело Делать.</h2>
                    <p>Представляем веселую, совершенно новую SUBARU XV. Благодаря сочетанию стильного городского дизайна и прочного внешнего вида, а также новых возможностей, которыми вы можете быть в восторге, это вдохновение жить той жизнью, которую вы хотите. Будь то ночная прогулка по городу или незабываемый отдых на выходных, SUBARU XV поможет вам делать все, что вам нравится, стильно и комфортно. Каждый день может и должен быть радостным приключением.</p>
                    <hr />
                </div>
                <h1 style={{fontWeight:600}}>от 11 090 000 тг</h1>
                
                <div style={{height:"440px"}}><img style={{}} className="images" src={require('./images/subaruxv/'+this.state.path+'/'+this.state.value+'.jpg')} alt="SubaruXV"/></div>
                <Slider className="slid" value={this.state.value} onChange={(e)=>{if (e<10) {
                    this.setState({value:"0"+e})
                }else{this.setState({value:e})}}} style={{width:"70%"}}  min={1} max={36} />
                <h1 className="colorName fonts">{this.state.color}</h1>
                <MDBBtnGroup className="mr-2 pickers">

                 <MDBBtnGroup className="mr-2">
                    <MDBBtn onClick={()=>{this.setState({color:"Sunshine Orange",path:"orange"})}} color='deep-orange'>1</MDBBtn>
                    <MDBBtn onClick={()=>{this.setState({color:"Cool Grey Khaki",path:"khaki"})}} color="light-blue">2</MDBBtn>
                    <MDBBtn onClick={()=>{this.setState({color:"Crystal White Pearl",path:"white"})}} color="white">3</MDBBtn>
                    </MDBBtnGroup>

                    <MDBBtnGroup className="mr-2">
                    <MDBBtn  onClick={()=>{this.setState({color:"Ice Silver Metallic",path:"silver"})}}  color="blue-grey">4</MDBBtn>
                    <MDBBtn  onClick={()=>{this.setState({color:"Quartz Blue Pearl",path:"blue"})}} color="blue">5</MDBBtn>
                    <MDBBtn  onClick={()=>{this.setState({color:"Dark Blue Pearl",path:"darkblue"})}} color="indigo">6</MDBBtn>
                    </MDBBtnGroup>
                    <MDBBtnGroup className="mr-2">
                    <MDBBtn onClick={()=>{this.setState({color:"Pure Red",path:"red"})}}  color="red">7</MDBBtn>
                    <MDBBtn onClick={()=>{this.setState({color:"Dark Grey Metallic",path:"darkgrey"})}}  color="grey">8</MDBBtn>
                    <MDBBtn  onClick={()=>{this.setState({color:"Crystal Black Silica",path:"black"})}} color="black">9</MDBBtn>
                    </MDBBtnGroup>
                    </MDBBtnGroup>


              
                <h2 className="gradus">Вид на 360C°</h2>
                <MDBBtn className="credit-button" onClick={()=>{window.open('https://subarufinance.kz/')}} color="elegant">Выгодное кредитование с Subaru</MDBBtn>
                <div><Gallery  {...this.props}/></div>
                <div className="files">
                    {this.state.file_list.map(file=>{
                        return(
                            <div>
                                <a onClick={()=>{window.open("http://78.40.109.172:5000/"+file.filename)}}>{file.title_of_file}</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default SubaruXV;
