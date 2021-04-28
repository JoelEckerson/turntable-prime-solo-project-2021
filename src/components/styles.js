import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    icon: {
        marginRight: '20px',
    },
    buttons: {
        marginTop: '40px',
    },
    cardGrid: {
        padding: '20x 0'
    },
    card:{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia:{
        paddingTop: '100%' //16:9 ratio
    },
    cardContent:{
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0'
    },
    root: {
        width: '100%',
        '& > * + *': {
        marginTop: theme.spacing(2),
        },
    },
    drawer: {
        width: '190px'
    },
    form1: {
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: '25px'
    },
    app: {
        marginBottom: '30px',
        backgroundColor: '#eb4034'
    },
    logoutButton: {
        marginRight: 'auto',
        marginLeft: 'auto'
    }
}));

export default useStyles;