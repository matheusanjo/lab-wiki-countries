import { Link } from 'react-router-dom';
import countries from '../countries.json';
import { useParams } from 'react-router-dom';

export default function CountryDetails() {
  const params = useParams();
  let country = countries.find(
    (currentCountry) => currentCountry.cca3 === params.cca3
  );

  // Tem que mostrar a capital do país, área total e lista de países fronteiriços (ul)

  return (
    <div key={country.name.official} className="col-7">
      {' '}
      {/* Nome do país */}
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}> Capital</td>
            {/* Nome da capital */}
            {country.capital.map((currentCapital) => {
              return <td key={currentCapital}>{currentCapital}</td>;
            })}
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {/* Área em km² */}
              {country.area}km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {/* Lista de países fronteiriços */}
                {country.borders.map((currentBorder) => {
                  return (
                    <li key={currentBorder}>
                      <Link to={'/' + currentBorder}>
                        {
                          countries.find(
                            (currentCountry) =>
                              currentCountry.cca3 === currentBorder
                          ).name.common
                        }
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}