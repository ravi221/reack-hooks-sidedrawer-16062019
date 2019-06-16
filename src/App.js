import React, { Component } from 'react';
import './App.css';
import { Route} from 'react-router-dom';
import Program from './components/program/program';
import Strategy from './components/strategy/strategy';
import Style from './components/style/style';
import Modal from './components/ui/modal/modal';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import SideDrawer from './components/ui/sideDrawer/sideDrawer';
import Main from './components/main/main';

class App extends Component {
  state = {
    isModalOpen: false,
    isSideDrawerOpen: false,
    selectedValue : '',
    data : [{"id": 1, "firstname": "ravi", "lastname": "Kothapalli", "email": "mrravi221@gmail.com", "phone": "7358565929"},{"id": 2, "firstname": "vasu", "lastname": "Kothapalli", "email": "vasuK@gmail.com", "phone": "9438489334"}]
  }

  openDrawerHandler = (event) => {
    this.setState({selectedValue: event.target.value, isSideDrawerOpen: true})
    /*switch(event.target.value) {
      case 'program' : 
        this.setState({isSideDrawerOpen: true})
        break;
      case 'strategy' : 
        this.setState({isSideDrawerOpen: true})
        break;
      case 'style' : 
        this.setState({isSideDrawerOpen: true})
        break;
      default:
        this.setState({isSideDrawerOpen: true})
        break;
    }*/
  }

  closeModalHandler = () => {
    this.setState({
      isModalOpen: false
    });
  }

  closeSideDrawerHandler = () => {
    this.setState({
      isSideDrawerOpen: false
    })
  }
  render() {
    var tempDate = new Date();
    var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
    let changeValue = '';
    if(this.state.selectedValue === 'program'){
      changeValue = <Program show={this.state.isSideDrawerOpen} sideDrawerClosed={this.closeSideDrawerHandler} />
    } else if(this.state.selectedValue === 'strategy'){
      changeValue = <Strategy show={this.state.isSideDrawerOpen} sideDrawerClosed={this.closeSideDrawerHandler} />
    }
    return (
      <div className="container">

        {changeValue}
        <header class="blog-header py-3">
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col-4 pt-1">
              <h3 class="font-weight-bold" href="#">Product Master</h3>
              <p>{date}</p>
            </div>
           
            <div class="col-4 d-flex justify-content-end align-items-center">
              <input type="search" className="form-control" placeholder="Search...."/>&nbsp;&nbsp;
              <select className="form-control" onChange={this.openDrawerHandler}>
                <option>select option</option>
                <option value="program" >Program</option>
                <option value="strategy">Strategy</option>
                <option value="style">Style</option>
              </select>
              {/*<Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Select
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/program">Program</Dropdown.Item>
                  <Dropdown.Item href="/strategy">Strategy</Dropdown.Item>
                  <Dropdown.Item href="/style">Style</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>*/}
            </div>
            
          </div>
        </header>
        <div class="card p-3 p-md-5 rounded">
          <div class="nav-scroller py-1 mb-5">
            <nav class="nav d-flex">
              <a class="p-2 text-muted" href="#">Program</a>
              <a class="p-2 text-muted" href="#">Strategy</a>
              <a class="p-2 text-muted" href="#">Style</a>
              <a class="p-2 text-muted" href="#">Benchmark</a>
              <a class="p-2 text-muted" href="#">Comments</a>
            </nav>
          </div>
          <div class="col-md-12 px-0">
              <Main data={this.state.data} />
          </div>
          
          
        </div>
      </div>
    );
  }
}

export default App;
