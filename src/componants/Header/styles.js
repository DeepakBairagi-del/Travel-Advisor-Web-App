import {alpha,makeStyles} from '@material-ui/core/styles'
export default makeStyles((theme) => ({
    tittle:{
        display: 'none',
        [theme.breakpoints.up('sm')]:{
            display: 'block',
            paddingLeft: '10px',
        },
        
    },
    search:{
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {backgroundColor: alpha(theme.palette.common.white,0.25)},
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {marginLeft: theme.spacing(3), width: 'auto'},
    },
    logoAndName:{
        display: 'flex',
        alignItems: 'center',
    },
    toolbar:{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'indigo',
    },
    searchicon:{
        padding: theme.spacing(0,1),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',

    },
    inputRoot:{
        color: 'inherit',
        
    },
    inputInput:{
        padding: theme.spacing(1,1,1,0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width:'100%',
        [theme.breakpoints.up('md')]:{width:'20ch'},
    }
}))