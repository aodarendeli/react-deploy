import React from 'react';
import { Card,CardDescription,Container,Grid } from 'semantic-ui-react';
import style from './planet.css';

 function Planets({data}) {
    return (
        <Container className={style.container}>
            <h1>Planets Data</h1>
            <Grid columns={3}>
                {data.map((planets,i)=>{
                    return(
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{planets.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Name</strong>
                                        <p>{planets.name }</p>
                                        <strong>Climate</strong>
                                        <p>{planets.climate}</p>
                                        <strong>Population</strong>
                                        <p>{planets.population}</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    );
                })}
            </Grid>
        </Container>
    )
}
export default Planets;
