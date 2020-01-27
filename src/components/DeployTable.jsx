import React, { Component } from 'react';
//Table
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import { ArrowDropUp, ArrowDropDown } from '@material-ui/icons'
import { filter as Filter } from 'lodash';

const headers = 
  [
    {name: "" , prop: "img"}, 
    {name: "Webservice" , prop: "webservice"}, 
    {name: "Endpoint", prop: "endpoint"},
    {name: "Application", prop: "application"}, 
    {name: "sLayer", prop: "sLayer"}, 
  ];

export default class CreateTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            selectedRow: null, 
            selected: '',
            open: false,
            interfaces: []
        }
        this.handleInterface = this.handleInterface.bind(this)
    }
componentWillMount(){
    
}
togglePanel(e){
        this.setState({ 
            open: !this.state.open,
            selected : e.target.id
        }, (e) => {
           return this.state.open === true ? this.handleInterface(this.state.selected) : null
        })
}
handleInterface(e){
    let filteredInterfaces = new Array(); 
    console.log(`event: \n` , e)
    const filtered = Filter(this.props.allData, {'webservice': e})
    filtered.map(i => {
        filteredInterfaces.push(i.interface)
    })
    this.setState({
        open: true, 
        interfaces: filteredInterfaces
    }, ()=>{
        console.log(`interfaces for ${e}: \n`, this.state.interfaces)
    })
}
render(){
    const itemRows = this.props.data
    console.log(itemRows)
return(
<div> 
<Paper 
style={{width: '100%', overflowX:'auto',  justifyContent: 'center'}}>
<Table 
style={{minWidth: 650}} aria-label="simple table">
{
/*
* 
* TABLE HEADERS
*
*/}

<TableHead 
align="center">
  
    <TableRow>
        <TableCell key="expand/collapse">
            <div style ={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
            {this.state.open ? "Collapse" : "Expand"}
            </div>
        </TableCell>
      {headers.map((x, i) => {
       return (
        
          <TableCell  key={`thc-${i}`} id = {`thc-${i}`}>
         <div style ={{display:'flex', alignItems: 'center', justifyContent: 'center'}} onClick = {() => this.props.handleSort(x.prop)}>
         {(x.name)}
         <br/>
         {this.props.columnToSort === x.prop ? (
          this.props.sortDirection === 'asc' ? <ArrowDropUp /> : <ArrowDropDown/>
         ) : null}
         </div>
        {/**/}
        </TableCell>
      
        
      )})}
   {this.state.open && this.state.selected ? 
   <TableCell>
    <div style ={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
       Interface
    </div>
    </TableCell>
    : null}
        </TableRow>
</TableHead>

{
/*
* 
    * TABLE BODY
*
*/}
<TableBody className="row">
    {console.log(this.props.data)}
{/* {this.props.data.map(e => console.log(e))} */}
{/*{itemRows.map((row,i) => {
const highlighted = this.state.selectedRow && this.state.selectedRow.id === row.id
return (
<TableRow
key = {`${row.id}`}
onClick = {()=>{
    console.log('click')
    if(!highlighted || !this.state.open){
        this.setState({
            selectedRow: highlighted ? null : row
        })
    }
}}
style = {{ 
    backgroundColor: highlighted ? 'lightblue' : 'white' 
    }}
>
    <TableCell align="center" className = "row" component="th" scope="row">
    <Paper 
    id={`${row.webservice}`}
    onClick={ this.togglePanel } >
        <div id={`${row.webservice}`}>
        { (this.state.open && this.state.selected === row.webservice ) ?
        "-"
        : 
        "+" 
        }
        </div>
    </Paper>
    </TableCell>
            <TableCell align="center" className = "row" component="th" scope="row" onClick = {() => (this.handleInterface(row.webservice))}>
                {row.webservice}
            </TableCell>
            <TableCell className = "row"align="center" onClick = {() => (this.handleInterface(row.webservice))}> 
                {row.endpoint}
            </TableCell>
            <TableCell align="center" onClick = {() => (this.handleInterface(row.webservice))}> 
                {row.application}
            </TableCell>
            <TableCell align="center" onClick = {() => (this.handleInterface(row.webservice))}> 
                {row.sLayer}
            </TableCell>
  <TableCell>
      {highlighted && (
          <DialogButton
          open={this.state.open}
          interfaces={this.state.interfaces}
          />
      )}
  </TableCell>
        </TableRow>
      )})}*/}
        
</TableBody>

</Table>
</Paper>
</div>
        )
    }
}