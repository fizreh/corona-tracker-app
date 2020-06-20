
import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {countries} from '../../Api';

const CountryPicker = () => {
    return (
        <FormControl className= "styles.formcontrol">
            <NativeSelect>
                <option value = 'global' >Global</option>
            </NativeSelect>
        </FormControl>
    
        
    )
}

export default CountryPicker;
