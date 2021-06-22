import React from 'react'
import {render} from '@testing-library/react'
import CityInfo from './CityInfo'

test("CityInfo render", async () => {
    const city = "Buenos Aires"
    const country = "Argentina"
    const{findAllByRole} = render(<CityInfo city={city} country={country}/>)
    //findAllByRole nos va a buscar(en este caso) todos los componentes
    // que sean de tipo "heading" => h1,h2 ,h3... etc
    const cityAndCountryComponents = await findAllByRole("heading")
    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)
})