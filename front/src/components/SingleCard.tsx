import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {connect} from "react-redux";
import {setCoordsSuccess} from "../redux/map-reducer";
import {ISingleCard} from "../types/types";


const SingleCard: React.FC<ISingleCard> =  ({cords, name, setCoordsSuccess}) => {

    const useStyles = makeStyles({
        card: {
            minWidth: 275,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });
    const classes = useStyles();
    return (


        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {`'${cords.lat}  ${cords.lng}`}

                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" style={{marginLeft: '5px'}}
                            onClick={() => {
                                setCoordsSuccess(cords)
                            }}>go there</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default connect(null, {setCoordsSuccess})(SingleCard)



