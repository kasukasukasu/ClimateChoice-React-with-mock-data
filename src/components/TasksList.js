import React, {Component} from "react";
import {fetchall} from "../RestFunctions"
import Buttons from "./SwipeButtons";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class TasksList extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks: []};
        console.log("Propsit tulee!!!!");
        console.log(this.props.user);
    }

    componentDidMount() {
        this.getAll();
    }

    getAll() {
        fetchall(this.allFetched)
    }

    //sets fetched tasks to this.state
    allFetched = (data) => {
        this.setState({tasks: data});
        console.log(this.state.tasks);
    };

    render() {

        var tasks = this.state.tasks.map(function (task) {
            return (
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography key = {task.id}>{task.title}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            {task.content1}<br/>

                            {task.content2}<br/>

                            {task.rating}<br/>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            );
        });
        return (
            <div>
                {tasks}
                <Buttons userid={this.props.user}/>
            </div>

        )

    }
}

export default TasksList;

