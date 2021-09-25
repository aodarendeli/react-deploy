import React, { useState } from 'react';
import { Card,CardDescription,Grid,Button, } from 'semantic-ui-react';
import DeleteButtons from '../deletebutton/deletebutton';

 
 function People({data}) {
     const [dataX,setDataX]=useState(data)
     console.log('renderlandım')
     const [z,setZ]=('red')
    return (
        <>
            <h1 style={{color:z}}>People Data</h1>
            <Grid columns={3}>
                {dataX.map((people,i)=>{
                    return(
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{people.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Height</strong>
                                        <p>{people.height}</p>
                                        <strong>Mass</strong>
                                        <p>{people.mass}</p>
                                        <strong>Hair Color</strong>
                                        <p>{people.hair_color}</p>
                                        <Button onClick={()=>{
                                            let tmp_index=dataX.indexOf(people)
                                            let a=dataX
                                            a.splice(tmp_index,1)
                                           setDataX(a)
                                            
                                        }}
                                        >Delete</Button>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </>
    );
}
export default  People;
