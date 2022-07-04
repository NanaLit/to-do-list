import EmployeersListItem from "../employeers-list/employeers-list";

import './employeers-list.css';

const EmployeersList = ({data, onDelete, onToggleIncrease, onToggleLike}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeersListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleIncrease={() => onToggleIncrease(id)}
            onToggleLike={() => onToggleLike(id)}/>
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeersList;