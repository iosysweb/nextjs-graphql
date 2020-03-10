import React from 'react'
import Head from 'next/head'
import Link from "next/link";
import { useQuery } from "@apollo/react-hooks"
import COUNTRIES_QUERY from '../../graphql/countries.query'
import { useRouter } from "next/router"

const Country = () => {
    const router = useRouter();
    const { data, loading, error } = useQuery(COUNTRIES_QUERY);

    if(loading) 
        return <p>loading...</p>

    if(error) 
        return <p>Error: { JSON.stringify(error) }</p>

    return (
        <div>
            <Head>
                <title>Country List</title>
            </Head>
            <ul>
                {
                    data.countries.map(country => {
                        return (
                          <li key={`country_${country.id}`}>
                            <h5>
                              <Link href="/country/[slug]" as={`/country/${country.slug}`}>
                                <a>{country.name}</a>
                              </Link>
                            </h5>
                            <p>{country.slug}</p>
                          </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Country;