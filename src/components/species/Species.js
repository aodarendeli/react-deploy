import React from 'react';
import { Card,CardDescription,Grid } from 'semantic-ui-react';
 
 function Species({data}) {
    return (
        <>
            <h1>Species Data</h1>
            <Grid columns={3}>
                {data.map((species,i)=>{
                    return(
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{species.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Name</strong>
                                        <p>{species.name }</p>
                                        <strong>Classification</strong>
                                        <p>{species.classification }</p>
                                        <strong>Designation</strong>
                                        <p>{species.designation}</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    );
                })}
            </Grid>
        </>
    );
}
export default  Species;
