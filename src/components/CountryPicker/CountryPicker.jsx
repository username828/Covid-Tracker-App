import React,{useState,useEffect} from 'react';
import { NativeSelect, FormControl } from '@mui/material';
import styles from './CountryPicker.module.css';
import { fetchCountry } from '../../api';

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries,setFetchedCountries]=useState([])
    useEffect(()=>{
        const fetchAPI = async()=>{
            setFetchedCountries(await fetchCountry())
        }

        fetchAPI();
    },[setFetchedCountries])
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker