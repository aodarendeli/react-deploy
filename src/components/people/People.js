import React, { useState } from 'react';
import { Card, CardDescription, Grid, Button } from 'semantic-ui-react';

//Use state ile verilerimizi kullanarak , daha önceden apiden cekmıs oldugumuz dataların
//index degerlerını tutarak editleyebilmek ıcın splice fonksiyonu kullandım.
//Update edebilme özelliğimiz mevcut ve onblur ozellıgı kullanarak ınput a gırdıgım degerden cıktıgım anda ıstedıgım karddakı degerın uzerıne gelıp
//input a yazdıgım degısken ıle degısmesını sagladım :).


// Silme işlemindede index degerlerini baz alarak aynı prensıp ile ilerledim.

//Bu hafta yogun oldugum ıcın uzerınde fazla stil duzenlemelerı yapamadım. 

//Firebase kullanabılırsınız demıstınız fakat  veritabanı kısmını javascript ile halletmeye çalıştım :)

function People({ data }) {
    const [dataX, setDataX] = useState(data)
    console.log('renderlandım')
    const [text, setText] = useState('none')
    return (
        <>
            <h1>People Data</h1>
            <Grid columns={3}>
                {dataX.map((people, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{people.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Height</strong>
                                        <p style={{ color: 'red' }}
                                            onClick={() => {
                                                let tmp_index = dataX.indexOf(people)
                                                let tmp_arr = dataX
                                                tmp_arr[tmp_index].height = text
                                                setDataX([...tmp_arr])
                                            }}>Edit</p>
                                        <p>{people.height}</p>
                                        <strong>Mass</strong>
                                        <p style={{ color: 'red' }}
                                            onClick={() => {
                                                let tmp_index = dataX.indexOf(people)
                                                let tmp_arr = dataX
                                                tmp_arr[tmp_index].mass = text
                                                setDataX([...tmp_arr])
                                            }}>Edit</p>
                                        <p>{people.mass}</p>
                                        <strong>Hair Color</strong>
                                        <p style={{ color: 'red' }}
                                            onClick={() => {
                                                let tmp_index = dataX.indexOf(people)
                                                let tmp_arr = dataX
                                                tmp_arr[tmp_index].hair_color = text
                                                setDataX([...tmp_arr])
                                            }}>Edit</p>
                                        <p>{people.hair_color}</p>
                                        <Button onClick={() => {
                                            let tmp_index = dataX.indexOf(people)
                                            let a = dataX
                                            a.splice(tmp_index, 1)
                                            setDataX([...a])

                                        }}
                                        >Delete</Button>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
            <input placeholder='Write To Edit' onBlur={(e) => { setText(e.target.value) }}></input>

        </>
    );
}
export default People;
