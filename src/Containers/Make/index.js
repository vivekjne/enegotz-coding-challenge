import React,{ Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMakeData } from '../../actions/ApiActions';
import classes from "./make.module.css"
class Make extends Component{


    componentDidMount=()=>{
        const {getMakeData} = this.props
        getMakeData()
    }

    render(){
        const {isLoading,data,make} = this.props.api
        const itemStyle={width:"32%",minWidth:"250px",margin:"auto",marginBottom:"1.5rem",display:"flex",alignItems:"center",justifyContent:"center"}
        console.log("Make=",make)
        return(
            <div  className={"container"}>
               <div className={classes.items}>
                   {make.map((d,i)=>(<div key={i} className={classes.item}>
                     <img  src={d.logo} className={classes.logo} />
                     <div className={classes.overlay}>{d.make.toUpperCase()}</div>
                   </div>))}
                  


               </div>
            </div>
        )
    }
}


  
  const mapStateToProps = state => ({
    api: state.api,
  
  });
  

  const mapDispatchToProps=dispatch=>({
      getMakeData:()=>dispatch(getMakeData())
  })
  export default connect(mapStateToProps,mapDispatchToProps)(Make);