import React, {useState} from "react";
import 'semantic-ui-css/semantic.min.css';
import Dropdown from "./components/Dropdown";




const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Shade of Blue',
        value: 'blue'
    }
]

export default () => {

    const [selected, setSelected] = useState(options[0])

    return (
        <div>
            <Dropdown
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
            />
        </div>
    )
}
