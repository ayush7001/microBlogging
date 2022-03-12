import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
const SwitchToggle = props => {
    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <Typography>{props?.options[0]?.label}</Typography>
            <Switch checked={props?.initialValue === "grid"} inputProps={{ 'aria-label': 'ant design' }} onChange={e => props.handleChange(e)} />
            <Typography>{props?.options[1]?.label}</Typography>
        </Stack>
    )
}

export default SwitchToggle;