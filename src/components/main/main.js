import React from 'react';
import { Route} from 'react-router-dom';
import Program from '../../components/program/program';
import Strategy from '../../components/strategy/strategy';
import Style from '../../components/style/style';

const main = (props) => {
    console.log(props)
    return (
        <React.Fragment>
        <Route path="/tt" exact component={Program} />
            <Route exact path="/program" component={Program} />
            <Route exact path="/strategy" component={Strategy} />
            <Route exact path="/style" component={Style} />
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col"></th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">phone</th>
                  <th scope="col">email</th>
                </tr>
              </thead>
              <tbody>
                  {props.data.map(item => {
                     return  <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td><i class="fa fa-ellipsis-v"></i></td>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                    </tr>
                  })}
                
                
              </tbody>
            </table>
            </React.Fragment>
    );
}

export default main;