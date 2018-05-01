import React, {Component} from 'react';
import {connect} from 'react-redux';
import vesselsAction from '../redux/actions/VesselsAction';
import Table, {
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from 'material-ui/Table';
import Card, {CardHeader} from 'material-ui/Card';

export default connect( (state) => ({
    vessels : state.vessels
}))(class Vessels extends Component {

    componentDidMount() {
        vesselsAction.getVesselsList();
    }

    render() {
        const vessels = this.props.vessels.data.features ? this.props.vessels.data.features : [];
        return(
            <Card>
                <CardHeader title='Vessels'/>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Vessel name
                        </TableCell>
                        <TableCell>
                            Vessel id
                        </TableCell>
                        <TableCell>
                            Vessel time
                        </TableCell>
                    </TableRow>
                </TableHead>
                    <TableBody>
                        {vessels.map(vessel => {
                            return (
                              <TableRow key={'Row' + vessel.properties.id} hover onClick={this._onVesselClick(vessel)}>
                                  <TableCell key={'name' + vessel.properties.id}>
                                      {vessel.properties.name}
                                  </TableCell>
                                  <TableCell key={'id' + vessel.properties.id}>
                                      {vessel.properties.id}
                                  </TableCell>
                                  <TableCell key={'time' + vessel.properties.id}>
                                      {vessel.properties.time}
                                  </TableCell>
                              </TableRow>
                            );
                        })}
                        <TableRow>
                        </TableRow>
                    </TableBody>
            </Table>
            </Card>)
    }

    _onVesselClick(vessel) {
        return ( () => {
                vesselsAction.getVesselTracks(vessel);
            }
        )
    }
}

);